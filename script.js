// Simple button click effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 100);
    });
});

// Optional: subtle glow animation for ASCII
const ascii = document.querySelector('.ascii-art');

setInterval(() => {
    ascii.style.textShadow = "0 0 10px #0f0";
    setTimeout(() => {
        ascii.style.textShadow = "none";
    }, 300);
}, 2000);
