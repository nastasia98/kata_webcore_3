//swiper

let swiper = Swiper;
let init = false;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper(".slider", {
                slidesPerView: 'auto',
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<div class="' + className + '"></div>';
                    },
                },
            });
        }
    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener('load', function() {
    swiperMode();
});

window.addEventListener('resize', function() {
    swiperMode();
});

// show/hide "show more"

let hiddenBrands = document.querySelectorAll('.logo--hidden')
let hiddenContentDown = document.querySelector('.hidden-content__icon')
let hiddenContentUp = document.querySelector('.hidden-content--hide')

hiddenContentDown.addEventListener('click', function(){
    for (let i = 0; i < hiddenBrands.length; i++) {
        hiddenBrands[i].classList.remove('logo--hidden')
    }
    hiddenContentUp.classList.remove('hidden-content--hide')
    hiddenContentDown.classList.add('hidden-content--hide')
})

hiddenContentUp.addEventListener('click', function() {
    for (let i = 0; i < hiddenBrands.length; i++) {
        hiddenBrands[i].classList.add('logo--hidden')
    }
    hiddenContentDown.classList.remove('hidden-content--hide')
    hiddenContentUp.classList.add('hidden-content--hide')
})