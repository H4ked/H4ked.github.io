
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.glass-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const grid = document.querySelector('.animated-grid');
            grid.style.transform = `translateY(${scrolled * 0.1}px) rotateX(${scrolled * 0.01}deg)`;
        });