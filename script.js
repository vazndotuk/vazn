document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 100);
    });
});

const ascii = document.querySelector('.ascii-art');

setInterval(() => {
    ascii.style.textShadow = "0 0 10px #0f0";
    setTimeout(() => {
        ascii.style.textShadow = "none";
    }, 300);
}, 2000);
