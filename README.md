# 3D_carousel_feat_add_images
---
## description : 3D 캐러셀 기능으로 이미지를 추가하면, 자동으로 앵글을 계산하여 캐러셀로 보여줍니다.

``` javascript
const sliderHandler = document.querySelector('#slider');
const nextHandler = document.querySelector('.next');
const prevHandler = document.querySelector('.prev');
const sliderItems = document.querySelectorAll('#box');
const inputImage = document.querySelector('#addImg');
let imgArray = [];
let index = 6;
let selected = 0;

/**slider 함수 : 캐러셀 원통의 각도를 계산하여 지정해줍니다. */
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

/**input DOM에 이미지가 추가되면, Array에 해당 파일의 src를 모아주고, 캐러셀로 랜더링해줍니다. */
inputImage.addEventListener('change', () => {
    const imageSrc = URL.createObjectURL(inputImage.files[0]);
    imgArray.push(imageSrc);
    let angle = 360 / imgArray.length;
    sliderHandler.innerHTML = imgArray.map((v, i) => `<img src=${v} id='box' style='transform: rotateY(${angle * i}deg) translateZ(288px)'>`)
    console.log(imgArray);
})
```
