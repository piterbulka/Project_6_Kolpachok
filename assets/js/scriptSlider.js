let offset = 0; //смещение от левого края

const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-right').addEventListener('click', function(){
    offset = offset + 288; //offset += 278;
    if (offset > 2324) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px' ;
});

document.querySelector('.slider-left').addEventListener('click', function(){
    offset = offset - 288; //offset -= 278;
    if (offset < 0) {
        offset = 2314;
    }
    sliderLine.style.left = -offset + 'px' ;
});

