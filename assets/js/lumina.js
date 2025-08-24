const logo = document.querySelector('.logo-infotech');
const light = document.querySelector('.light');

function logoLogic() {
    if (window.innerWidth > 900) {
        logo.style.filter = 'brightness(30%)';
        light.style.display = '';

        // Your desktop-only script here
        const container = document.querySelector('.container');

        container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        light.style.top = `${y}px`;
        light.style.left = `${x}px`;
        });
    }
    else {
        logo.style.filter = 'brightness(100%)';
        light.style.display = 'none';
    }
}

logoLogic()

window.addEventListener('resize', () => {
    logoLogic()
});

logo.addEventListener('mouseover', () => {
    if (window.innerWidth > 900) {
        logo.style.filter = 'brightness(100%)';
    }
});

logo.addEventListener('mouseout', () => {
    if (window.innerWidth > 900) {
        logo.style.filter = 'brightness(30%)';
    }
});
