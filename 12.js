//1 задание
const h1 = document.querySelector('h1');
h1.textContent = 'Добро пожаловать на наш сайт!';

const h2Elements = document.querySelectorAll('h2');
h2Elements.forEach(h2 => {
    h2.style.color = 'red';
});

const firstParagraph = document.querySelector('p');
firstParagraph.textContent = 'Это новый текст параграфа.';

const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.style.display = 'none';
});