//Cемён, я устал босс... я хочу 5 и домой

const translations = {
    'ru': {
        'nav-about': 'О себе',
        'nav-projects': 'Проекты',
        'theme-btn': 'Сменить тему',
        // Главная
        'profile-name': 'Гарибян Георгий Арменович',
        'profile-desc': 'Студент 3 курса колледжа TOP ACADEMY. Будущий веб-разработчик.',
        'tech-stack': 'Технологический стек:',
        'contact-me': 'Связаться со мной',
        // Проекты
        'projects-title': 'Портфолио проектов',
        'proj-1-title': 'Мой первый сайт',
        'proj-1-desc': 'Учебный проект, созданный в рамках обучения в TOP ACADEMY.',
        'proj-2-title': 'Мой GitHub',
        'proj-2-desc': 'Здесь вы найдете мои репозитории, включая Bank Management System на Go.',
        // Детали
        'det-title': 'Название проекта: "Веб-портфолио"',
        'det-goal-label': 'Цель и суть проекта:',
        'det-goal-text': 'Создание персональной страницы для демонстрации навыков программирования.',
        'det-tech-label': 'Использованные технологии:',
        'det-tech-adapt': 'Адаптивная верстка (Flexbox/Grid)',
        'back-btn': '« Назад к списку проектов',
        // Модалка
        'modal-title': 'Контакты',
        'modal-text': 'Моя почта: georgiy_top@example.com'
    },
    'en': {
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'theme-btn': 'Change Theme',

        'profile-name': 'Garibyan Georgiy Armenovich',
        'profile-desc': '3rd-year student at TOP ACADEMY. Future web developer.',
        'tech-stack': 'Tech Stack:',

        'projects-title': 'Project Portfolio',
        'proj-1-title': 'My First Website',
        'proj-1-desc': 'Educational project created during studies at TOP ACADEMY.',
        'proj-2-title': 'My GitHub',
        'proj-2-desc': 'Here you can find my repositories, including Bank Management System in Go.',

        'det-title': 'Project Name: "Web Portfolio"',
        'det-goal-label': 'Project Purpose:',
        'det-goal-text': 'Creating a personal page to showcase programming skills.',
        'det-tech-label': 'Technologies Used:',
        'det-tech-adapt': 'Responsive Design (Flexbox/Grid)',
        'back-btn': '« Back to project list',

        'modal-title': 'Contacts',
        'modal-text': 'Email: georgiy_top@example.com'
    }
};

let currentLang = 'ru';
// Смена языка
const langBtn = document.getElementById('lang-toggle');
if (langBtn) {
    langBtn.onclick = function() {
        currentLang = (currentLang === 'ru') ? 'en' : 'ru';
        langBtn.innerText = (currentLang === 'ru') ? 'EN' : 'RU';
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                element.innerText = translations[currentLang][key];
            }
        });
    };
}
// Это темная тема, Жора не забудь
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.onclick = function() {
        document.body.classList.toggle('dark-theme');
    };
}
// Анимация и её плавность
window.onload = function() {
    const main = document.querySelector('main');
    if (main) {
        main.style.opacity = '0';
        setTimeout(() => {
            main.style.transition = 'opacity 1s';
            main.style.opacity = '1';
        }, 100);
    }
};