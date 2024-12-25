const numSparkles = 100; // Number of sparkles to create
const sparklesContainer = document.getElementById('sparkles-container');

// Define possible motion types
const motionTypes = ['spiralMotion', 'circularMotion', 'waveMotion', 'topToBottom'];

for (let i = 0; i < numSparkles; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkles');

    // Randomize the initial position of each sparkle within the viewport
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;

    // Randomize the motion type for each sparkle
    const motionType = motionTypes[Math.floor(Math.random() * motionTypes.length)];
    sparkle.style.animationName = motionType;
    
    // Randomize animation duration and delay for more variety
    sparkle.style.animationDuration = `${Math.random() * 6 + 10}s`; // Between 10 and 16 seconds
    //sparkle.style.animationDelay = `${Math.random() * 5}s`; // Random delay up to 5 seconds

    // Add the sparkle to the container
    sparklesContainer.appendChild(sparkle);
}
