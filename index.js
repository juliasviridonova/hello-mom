
const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', () => {
    output.textContent = 'Сережа, я тебя люблю♥'; // Используем textContent для предотвращения XSS атак
});
