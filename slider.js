const sliderHandler = document.querySelector('#slider');
const nextHandler = document.querySelector('.next');
const prevHandler = document.querySelector('.prev');
const sliderItems = document.querySelectorAll('#box');
const inputImage = document.querySelector('#addImg');
let imgArray = [];
let index = 6;
let selected = 0;


function slider() {
    let arrAngle = selected/imgArray.length * -360;
    sliderHandler.style.transform = 'translateZ(-288px) rotateY(' + arrAngle + 'deg)';
}
nextHandler.addEventListener('click', () => {
    console.log('next');
    selected++;
    slider();
})
prevHandler.addEventListener('click', () => {
    console.log('prev');
    selected--;
    slider();
})

inputImage.addEventListener('change', () => {
    const imageSrc = URL.createObjectURL(inputImage.files[0]);
    imgArray.push(imageSrc);
    let angle = 360 / imgArray.length;
    sliderHandler.innerHTML = imgArray.map((v, i) => `<img src=${v} id='box' style='transform: rotateY(${angle * i}deg) translateZ(288px)'>`)
    console.log(imgArray);
})

