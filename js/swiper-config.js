let mainSlider = new Swiper('.swiper', {
  slidesPerView: 1.4,
  // breakpoints: {
  //   // 768px以上の場合
  //   768: {
  //     slidesPerView: 1.6,
  //   }
  // },
  centeredSlides: true,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});