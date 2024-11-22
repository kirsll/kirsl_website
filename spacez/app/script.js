export async function main() {
    const container = document.getElementById('container');
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        await new Promise(resolve => setTimeout(resolve, Math.random() * 300));
        star.classList.add('star');

        const size = Math.random() * 4;
        star.style.width = `${size}px`;
        star.style.height = `${size*2}px`;
        
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        const speed = Math.random() * 5 + 2;
        star.style.animationDuration = `${speed}s`;

        container.appendChild(star);

        function animateStar() {
            let position = parseFloat(star.style.top);
            position += speed;
            if (position > container.offsetHeight) {
                position = -10;
            }
            star.style.top = `${position}px`;
            requestAnimationFrame(animateStar);
        }

        animateStar();
    }
}

