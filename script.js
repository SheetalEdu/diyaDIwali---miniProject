const confettiContainer = document.querySelector('.confetti');

function createConfetti() {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-piece');
    
    // Randomize position and size
    const size = Math.random() * 10 + 5; // size between 5px and 15px
    confettiPiece.style.width = `${size}px`;
    confettiPiece.style.height = `${size}px`;
    confettiPiece.style.backgroundColor = getRandomColor();
    confettiPiece.style.position = 'absolute';
    confettiPiece.style.left = `${Math.random() * 100}vw`; // random horizontal position
    confettiPiece.style.opacity = Math.random();
    
    // Set animation duration
    const duration = Math.random() * 3 + 2; // duration between 2s and 5s
    confettiPiece.style.animationDuration = `${duration}s`;
    
    // Append to the confetti container
    confettiContainer.appendChild(confettiPiece);
    
    // Remove the confetti piece after animation ends
    confettiPiece.addEventListener('animationend', () => {
        confettiPiece.remove();
    });
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create confetti at intervals
setInterval(createConfetti, 100); // Create a confetti piece every 100ms