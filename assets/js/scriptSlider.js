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
        offset = 2304;
    }
    sliderLine.style.left = -offset + 'px' ;
});

const mediaQueryGirl = window.matchMedia('(max-width: 1033px)')

if (mediaQueryGirl.matches) {
    document.querySelector('.slider-right').addEventListener('click', function(){
        offset = offset + 0; //offset += 278;
        if (offset > 2612) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px' ;
    });

    document.querySelector('.slider-left').addEventListener('click', function(){
        offset = offset - 0; //offset -= 278;
        if (offset < 0) {
            offset = 2612;
        }
        sliderLine.style.left = -offset + 'px' ;
    });
}