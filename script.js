const navbarLinks = document.querySelectorAll('#navbar li a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const header = document.getElementById('header');
const stickyOffset = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > stickyOffset) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});




