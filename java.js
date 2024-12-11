const noButton = document.getElementById('no-button');
const container = document.querySelector('.container');
const yesButton = document.getElementById('yes-button');
const mainContainer = document.getElementById('main-container');
const yesContainer = document.getElementById('yes-container');
const goWAButton = document.getElementById('go-wa');

noButton.addEventListener('mouseover', () => {
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const randomX = Math.random() * (containerRect.width - noButtonRect.width);
    const randomY = Math.random() * (containerRect.height - noButtonRect.height);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    yesContainer.style.display = 'block';
});

goWAButton.addEventListener('click', () => {
    window.location.href = `https://wa.me/62895371532881`;
});
