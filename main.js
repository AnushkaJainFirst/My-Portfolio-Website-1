const sections = document.querySelectorAll('.section');

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    sections.forEach(section => {
        const offset = section.offsetTop - window.innerHeight / 2;
        if (scrollPosition >= offset) {
            const sectionId = section.getAttribute('id');
            highlightNavItem(sectionId);
        }
    });
});

function highlightNavItem(sectionId) {
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === sectionId) {
            item.classList.add('active');
        }
    });
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').slice(1);
        scrollToSection(sectionId);
    });
});
