const image = document.querySelector('img');
const title =document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const songs = [
    {
        name: 'bad',
        displayName: 'Bad',
        artist: 'Michael Jackson',
    },
    {
        name: 'i want you back',
        displayName: 'I want you back',
        artist: 'Michael Jackson',
    },
    {
        name: 'jam',
        displayName: 'Jam',
        artist: 'Michael Jackson',
    },
    {
        name: 'a b c (1,2,3)',
        displayName: 'a b c (1,2,3)',
        artist: 'Michael Jackson',
    },
    {
        name: 'say say say',
        displayName: 'say say say',
        artist: 'Michael Jackson',
    },
    {
        name: 'the way you make me feel',
        displayName: 'The way you make me feel',
        artist: 'Michael Jackson',
    },
    {
        name: 'man in the mirror',
        displayName: 'man in the mirror',
        artist: 'Michael Jackson',
    },
    {
        name: 'dirty diana',
        displayName: 'dirty diana',
        artist: 'Michael Jackson',
    },
    {
        name: 'rockin robin',
        displayName: 'rockin robin',
        artist: 'Michael Jackson',
    },
    {
        name: 'ben',
        displayName: 'Ben',
        artist: 'Michael Jackson',
    },
    {
        name: 'smooth criminal',
        displayName: 'Smooth Criminal',
        artist: 'Michael Jackson',
    },
    {
        name: 'blame it on the boogie',
        displayName: 'Blame it on the boogie',
        artist: 'Michael Jackson',
    },
    {
        name: 'black or white',
        displayName: 'Black or White',
        artist: 'Michael Jackson',
    },
    {
        name: "dont stop till you get enough",
        displayName: "Don't stop till you get enough",
        artist: 'Michael Jackson',
    },
    {
        name: 'remember the time',
        displayName: 'Remember the time',
        artist: 'Michael Jackson',
    },
    {
        name: 'give in to me',
        displayName: 'give in to me',
        artist: 'Michael Jackson',
    },
    {
        name: 'in the closet',
        displayName: 'In the closet',
        artist: 'Michael Jackson',
    },
    {
        name: 'rock with you',
        displayName: 'Rock with you',
        artist: 'Michael Jackson',
    },
    {
        name: 'who is it',
        displayName: 'Who is it',
        artist: 'Michael Jackson',
    },
    {
        name: 'heal the world',
        displayName: 'Heal the world',
        artist: 'Michael Jackson',
    },
    {
        name: 'can you feel it',
        displayName: 'Can you feel it',
        artist: 'Michael Jackson',
    },
    {
        name: 'will you be there',
        displayName: 'Will you be there',
        artist: 'Michael Jackson',
    },
    {
        name: 'the girl is mine',
        displayName: 'The girl is mine',
        artist: 'Michael Jackson',
    },
    {
        name: 'you are not alone',
        displayName: 'You are not alone',
        artist: 'Michael Jackson',
    },
    {
        name: 'billie jean',
        displayName: 'Billie Jean',
        artist: 'Michael Jackson',
    },
    {
        name: 'earth song',
        displayName: 'Earth song',
        artist: 'Michael Jackson',
    },
    {
        name: 'beat it',
        displayName: 'Beat it',
        artist: 'Michael Jackson',
    },
    {
        name: "they dont care about us",
        displayName: "They don't care about us",
        artist: 'Michael Jackson',
    },
    {
        name: 'wanna be startin something',
        displayName: 'Wanna be startin something',
        artist: 'Michael Jackson',
    },
    {
        name: 'you rock my world',
        displayName: 'You rock my world',
        artist: 'Michael Jackson',
    },
    {
        name: 'human nature',
        displayName: 'Human nature',
        artist: 'Michael Jackson',
    },
    {
        name: ' p y t (pretty young thing)',
        displayName: ' p y t (pretty young thing)',
        artist: 'Michael Jackson',
    },
    {
        name: 'thriller',
        displayName: 'Thriller',
        artist: 'Michael Jackson',
    },
    {
        name: 'Michael Jackson & Freddie Merucry - There Must Be More Than Life That This',
        displayName: 'Michael Jackson & Freddie Merucry - There Must Be More Than Life That This',
        artist: 'Michael Jackson',
    },

    
]

// Check if Playing
let isPlaying=false;

//Play
function playSong(){
    isPlaying= true;
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.setAttribute('title', 'pause')
    music.play();
}

//Pause

function pauseSong(){
    isPlaying= false;
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute('title', 'play')
    music.pause();
}

//Play or pause event listener
playBtn.addEventListener('click',() =>(isPlaying ? pauseSong() : playSong()));

//Current Song
let songIndex=0;
//On Load
loadSong(songs[0]);

//prev Song
function prevSong(){
    songIndex--;
    if (songIndex < 0){
        songIndex= songs.length - 1 ; 
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

//Next Song
function nextSong(){
    songIndex++; 
    if (songIndex > songs.length - 1 ){
        songIndex=0;
    }
    loadSong(songs[songIndex]);
    playSong();
}


//Update the DOM
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src=`music/${song.name}.mp3`;
}

// Update progress bar and time
function updateProgressBar(e){
    if(isPlaying){
        const {duration, currentTime}= e.srcElement;
        //Update progress bar Width
        const progressPercent= (currentTime/duration) * 100;
        progress.style.width = `${progressPercent}%`;
        //To calculate and display duration
        const durationMinutes= Math.floor(duration/60);
        if (durationSeconds < 10){
            durationSeconds = `0${durationSeconds}`;
        }
        let durationSeconds = Math.floor(duration%60);
        
        //Delay switching duration element to avoid NaN
        if(durationSeconds){
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;

        }
         //To calculate and display current
         const currentMinutes= Math.floor(currentTime/60);
         let currentSeconds = Math.floor(currentTime%60);
         if (currentSeconds < 10){
             currentSeconds = `0${currentSeconds}`;
         }
         currentTimeEl.textContent= `${currentMinutes}:${currentSeconds}`;
         
    }
}



//Event listeners
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
music.addEventListener('timeupdate', updateProgressBar);