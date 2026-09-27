const input = document.getElementById('myInput');
const button = document.getElementById('myButton');
button.textContent = input.value;

const image = document.getElementById('myImage');
image.src = 'image2.jpg';

const link = document.getElementById('myLink');
const img = document.getElementById('contentImage');
link.href = 'https://store.steampowered.com/?l=russian';
img.setAttribute('alt', 'Опис цього зображення');

const firstItem = document.querySelector('#myList li');
firstItem.textContent = 'Змінений перший елемент';