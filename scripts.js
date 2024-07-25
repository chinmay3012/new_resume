window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    const triggerPoint = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.querySelector('.content').classList.add('animated');
        } else {
            section.querySelector('.content').classList.remove('animated');
        }
    });
});
