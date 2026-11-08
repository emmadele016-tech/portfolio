
/* =========================
   1. MOBILE NAVIGATION
========================= */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {

        const isOpen = navLinks.classList.toggle('active');

        menuToggle.classList.toggle('active');

        menuToggle.setAttribute('aria-expanded', isOpen);

        menuToggle.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );

    });

    navItems.forEach(link => {

        link.addEventListener('click', () => {

            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');

            menuToggle.setAttribute('aria-expanded', 'false');

            menuToggle.setAttribute(
                'aria-label',
                'Open navigation menu'
            );

        });

    });

}


/* =========================
   2. SCROLL REVEAL ANIMATIONS
========================= */

const revealElements = document.querySelectorAll(
    '.section-heading, .about-content, .skill-card, .project-card, .contact-content'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

if ('IntersectionObserver' in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add('visible');
    });

}
