document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
    const sections = [...document.querySelectorAll('section')];
    const scrollY = window.scrollY || window.pageYOffset; // Cross-browser compatible scroll position

    if (document.onWayTo === null) {
        let destIndex = document.lastCentered;

        // Find the section that is currently in the middle of the viewport
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                destIndex = i;
                break;
            }
        }

        if (destIndex !== document.lastCentered) {
            document.onWayTo = destIndex;
            window.scrollTo({ top: sections[destIndex].offsetTop, behavior: 'smooth' });
        }
    }

    sections.forEach((section, index) => {
        if (index === document.lastCentered) {
            section.className = 'active';
            if (document.onWayTo === index) {
                document.onWayTo = null;
            }
        } else {
            section.className = '';
        }
    });

    document.lastCentered = document.onWayTo !== null ? document.onWayTo : document.lastCentered;
});
