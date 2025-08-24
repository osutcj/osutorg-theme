
    // Run script only if the viewport width is greater than 768 pixels (commonly used breakpoint)
    if (window.innerWidth >  900) {
        document.addEventListener('DOMContentLoaded', () => {
            const containers = document.querySelectorAll('.container, .container1, .container2, .container3, .container4, .card'); 
            
            containers.forEach(container => {
                const image = container.querySelector('.image');
                const light = container.querySelector('.light');
        
                container.addEventListener('mousemove', (e) => {
                    const rect = container.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
        
                    if (light) {
                        light.style.left = `${x}px`;
                        light.style.top = `${y}px`;
                        light.style.opacity = 1;
                    }
        
                    if (image) {
                        image.style.transform = `scale(1) translate(${(x - rect.width / 2) / 20}px, ${(y - rect.height / 2) / 20}px)`;
                    }
                });
        
                container.addEventListener('mouseleave', () => {
                    if (image) {
                        image.style.transform = `scale(1) translate(0, 0)`;
                    }
        
                    if (light) {
                        light.style.opacity = 0;
                    }
                });
            });
        });
    }
