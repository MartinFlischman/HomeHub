document.addEventListener('DOMContentLoaded', function() {
    const temperatureDisplay = document.querySelector('.temperature-value');
    let temperature = 21; // Initial temperature

    // Update temperature display
    function updateTemperature() {
        temperatureDisplay.textContent = `${temperature}°C`;
    }

    // Event listener for increasing temperature
    document.getElementById('increaseTemp').addEventListener('click', function() {
        temperature++;
        updateTemperature();
    });

    // Event listener for decreasing temperature
    document.getElementById('decreaseTemp').addEventListener('click', function() {
        temperature--;
        updateTemperature();
    });

    // Initialize temperature display
    updateTemperature();
});

// Array of funny song names
const funnySongs = [
    "The Duck Song",
    "Banana Phone",
    "Peanut Butter Jelly Time",
    "Badger Badger Badger",
    "The Hamster Dance Song",
    "Numa Numa",
    "The Gummy Bear Song"
];

// Get elements
const songNameElement = document.querySelector('.song-name');
const playPauseButton = document.getElementById('playPauseMusic');
const nextButton = document.getElementById('nextSong');

let currentSongIndex = 0;
let isPlaying = false;

// Function to play the song
function playSong() {
    const randomIndex = Math.floor(Math.random() * funnySongs.length);
    songNameElement.textContent = funnySongs[randomIndex];
}

// Event listener for play/pause button
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        // Pause the song
        isPlaying = false;
        playPauseButton.innerHTML = '<i class="fas fa-play"></i> Play';
        // Add pause functionality here
    } else {
        // Play the song
        isPlaying = true;
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
        playSong();
    }
});

// Event listener for next button
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % funnySongs.length;
    songNameElement.textContent = funnySongs[currentSongIndex];
});

// Event listener for previous button
document.getElementById('previousSong').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + funnySongs.length) % funnySongs.length;
    songNameElement.textContent = funnySongs[currentSongIndex];
});
