let offset2 = 0; //смещение от левого края

const sliderLineBoy = document.querySelector('.slider-line-boy');

document.querySelector('.slider-right-boy').addEventListener('click', function(){
    offset2 = offset2 + 288; //offset += 278;
    if (offset2 > 328) {
        offset2 = 0;
    }
    sliderLineBoy.style.left = -offset2 + 'px' ;
});

document.querySelector('.slider-left-boy').addEventListener('click', function(){
    offset2 = offset2 - 288; //offset -= 278;
    if (offset2 < 0) {
        offset2 = 288;
    }
    sliderLineBoy.style.left = -offset2 + 'px' ;
});

const mediaQuery = window.matchMedia('(max-width: 1033px)')

if (mediaQuery.matches) {
    document.querySelector('.slider-right-boy').addEventListener('click', function(){
        offset2 = offset2 + 0; //offset += 278;
        if (offset2 > 616) {
            offset2 = 0;
        }
        sliderLineBoy.style.left = -offset2 + 'px' ;
    }); 

    document.querySelector('.slider-left-boy').addEventListener('click', function(){
        offset2 = offset2 - 0; //offset -= 278;
        if (offset2 < 0) {
            offset2 = 616;
        }
        sliderLineBoy.style.left = -offset2 + 'px' ;
    });
}