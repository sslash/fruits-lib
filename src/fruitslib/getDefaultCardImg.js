const images = [
    '/img/defaultimg3.png',
    '/img/defaultimg3.png',
    '/img/defaultimg3.png',
    '/img/defaultimg1.jpg',
    '/img/defaultimg2.jpg'
];

const len = images.length;

export default function getDefaultCardImg() {
    return 'http://www.routes.guide/img/defaultimg3.png';
    const i = Math.floor(Math.random() * len);
    return images[i];
}
