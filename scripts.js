const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Светлая тема';
    } else {
        themeBtn.textContent = 'Темная тема';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 100);
});

const contactLinks = document.querySelectorAll('a[href="#"], .contact-info');
contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Контактные данные Гарибяна Георгия: georgiy_top@example.com");
    });
});