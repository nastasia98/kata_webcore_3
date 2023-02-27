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
            swiper = new Swiper(".brands", {
                slidesPerView: 'auto',
                spaceBetween: 15,
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

let hiddenBrands = document.querySelectorAll('.brands__logo--hidden') //content
let showContentButton = document.querySelector('.hidden-content__button') //btn
let hiddenContentIcon = showContentButton.querySelector('img')
let hiddenContentSpan = showContentButton.querySelector('span')

showContentButton.addEventListener('click', btnClick)

function btnClick(){
    if (hiddenBrands[0].classList.contains('brands__logo--hidden')){
        hiddenContentSpan.textContent = 'Скрыть'
        hiddenContentIcon.style.transform = 'rotate(180deg)'
        showContentButton.classList.add('hidden-content--down')
    } else {
        hiddenContentSpan.textContent = 'Показать все'
        hiddenContentIcon.style.transform = 'rotate(360deg)'
        showContentButton.classList.remove('hidden-content--down')

    }
    for (let i = 0; i < hiddenBrands.length; i++) {
        hiddenBrands[i].classList.toggle('brands__logo--hidden')
    }
}