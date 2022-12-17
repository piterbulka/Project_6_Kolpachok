let offset = 0; //смещение от левого края

const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-right').addEventListener('click', function(){
    offset = offset + 278; //offset += 278;
    if (offset > 834) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px' ;
});

document.querySelector('.slider-left').addEventListener('click', function(){
    offset = offset - 278; //offset -= 278;
    if (offset < 0) {
        offset = 834;
    }
    sliderLine.style.left = -offset + 'px' ;
});
