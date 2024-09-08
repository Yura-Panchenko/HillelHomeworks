const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
];

const parent = document.getElementsByTagName('body')[0];
const img = document.createElement('img');
const imgIndex = Math.floor(Math.random() * images.length);
img.setAttribute('src', `images/${images[imgIndex]}`);
img.setAttribute('alt', `${images[imgIndex]}`);

parent.appendChild(img);