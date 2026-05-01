document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const music = document.getElementById("bg-music");
    const playPauseBtn = document.getElementById("play-pause");
    const muteBtn = document.getElementById("mute");
    const volumeSlider = document.getElementById("volume");
    const canvas = document.getElementById("snow-canvas");
    const ctx = canvas.getContext("2d");

    let snowflakes = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        music.play();
        playPauseBtn.textContent = "Pause";
    });

    playPauseBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            playPauseBtn.textContent = "Pause";
        } else {
            music.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    muteBtn.addEventListener("click", () => {
        music.muted = !music.muted;
        muteBtn.textContent = music.muted ? "Unmute" : "Mute";
    });

    volumeSlider.addEventListener("input", () => {
        music.volume = volumeSlider.value;
    });

    // Snow effect
    if (window.innerWidth > 768) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function createSnowflakes(count) {
            snowflakes = [];
            for (let i = 0; i < count; i++) {
                snowflakes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 3 + 1,
                    density: Math.random() * canvas.height
                });
            }
        }

        function drawSnow() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            ctx.beginPath();
            snowflakes.forEach(flake => {
                ctx.moveTo(flake.x, flake.y);
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI*2, true);
            });
            ctx.fill();
            updateSnow();
        }

        function updateSnow() {
            snowflakes.forEach(flake => {
                flake.y += 1 + flake.radius/2;
                flake.x += Math.sin(flake.y / 10) + (mouseX - canvas.width/2)/500;

                if (flake.y > canvas.height) {
                    flake.y = 0;
                    flake.x = Math.random() * canvas.width;
                }
            });
        }

        function animateSnow() {
            drawSnow();
            requestAnimationFrame(animateSnow);
        }

        createSnowflakes(100);
        animateSnow();

        window.addEventListener("mousemove", e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createSnowflakes(100);
        });
    }
});
