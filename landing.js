// Initialize landing page canvas
const landingCanvas = document.getElementById('landing-canvas');
const landingCtx = landingCanvas.getContext('2d');
let landingStars = [];

function initLanding() {
    resizeCanvas();
    createStars(150);
    animateLanding();
    document.getElementById('enter-portfolio').addEventListener('click', startBlackHoleTransition);
}

function resizeCanvas() {
    landingCanvas.width = window.innerWidth;
    landingCanvas.height = window.innerHeight;
}

function createStars(count) {
    for (let i = 0; i < count; i++) {
        landingStars.push({
            x: Math.random() * landingCanvas.width,
            y: Math.random() * landingCanvas.height,
            size: Math.random() * 2 + 1,
            brightness: Math.random() * 0.5 + 0.3,
            speed: Math.random() * 0.2 + 0.1
        });
    }
}

function animateLanding() {
    landingCtx.fillStyle = 'rgba(10, 10, 35, 0.1)';
    landingCtx.fillRect(0, 0, landingCanvas.width, landingCanvas.height);
    
    landingStars.forEach(star => {
        star.y += star.speed;
        if (star.y > landingCanvas.height) {
            star.y = 0;
            star.x = Math.random() * landingCanvas.width;
        }
        
        landingCtx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        landingCtx.beginPath();
        landingCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        landingCtx.fill();
    });
    
    requestAnimationFrame(animateLanding);
}

function startBlackHoleTransition() {
    const blackHoleOverlay = document.getElementById('blackhole-overlay');
    const warpCanvas = document.getElementById('warp-canvas');
    const warpCtx = warpCanvas.getContext('2d');
    
    // Initialize warp canvas
    warpCanvas.width = window.innerWidth;
    warpCanvas.height = window.innerHeight;
    
    // Start animation
    blackHoleOverlay.classList.add('active');
    
    // After transition completes, redirect to portfolio
    setTimeout(() => {
        window.location.href = "portfolio.html";
    }, 1500);
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', initLanding);