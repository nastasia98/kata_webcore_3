import {Navigation, Pagination, Swiper} from "swiper";

function swipe(name, spaceBetween = 0){
  return new Swiper(name, {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: spaceBetween,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"></div>';
      },
    }
    })
}

let init = false;
let swiperBrands
let swiperTechnics
let swiperServices

export function swiperMode() {

  if(window.innerWidth < 768) {
    if(!init) {
      init = true
      swiperBrands = swipe('.brands', 20)
      swiperTechnics = swipe('.technics')
      swiperServices = swipe('.services')
    }
  } else {
    init = false;
    swiperBrands.destroy();
    swiperTechnics.destroy();
    swiperServices.destroy();
  }
}


