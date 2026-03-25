document.addEventListener("DOMContentLoaded", () => {

    // Call to action: hero section
    document.querySelector('.btn-primary').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#intro').scrollIntoView({ behavior: 'smooth' });
    });


    // Blackhole animation
    const bhTargets = document.querySelectorAll('.blackhole-target');

    const originalTops = new Map();
    bhTargets.forEach(el => {
        originalTops.set(el, el.getBoundingClientRect().top + window.scrollY);
    });

    function updateBlackholeEffect() {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        bhTargets.forEach(el => {
            let progress;

            if (el.closest('.hero')) {
                progress = Math.max(0, Math.min(1, scrollY / (vh * 0.5)));
            } else {
                const originalTop = originalTops.get(el);
                const elementStart = originalTop - vh * 0.35;
                progress = Math.max(0, Math.min(1, (scrollY - elementStart) / (vh * 0.3)));
            }

            if (progress <= 0) {
                el.style.transform = '';
                el.style.opacity = '1';
                el.style.filter = 'none';
                return;
            }

            el.style.transform = `translate(${progress * 60}vw, ${progress * -60}vh) scale(${1 - progress * 0.85}) skewX(${progress * 20}deg)`;
            el.style.opacity = 1 - progress * 0.95;
        });

        requestAnimationFrame(updateBlackholeEffect);
    }

    updateBlackholeEffect();


    

});


   