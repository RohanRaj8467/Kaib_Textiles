// You can add interactivity or features here, like controlling the play/pause for all videos
// For now, the videos are just controlled by the native browser controls

// Example: Adding an event to log when a video is played
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', () => {
        console.log(`${video.src} is playing`);
    });
});
