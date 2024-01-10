const addText = document.querySelector('.add-text');
const addButton = document.querySelector('.add-button');

addButton.addEventListener('click', () => {
    addButton.style.display = 'none';
    addText.style.display = 'block';
});