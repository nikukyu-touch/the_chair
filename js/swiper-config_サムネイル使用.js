let mainSlider = new Swiper('.slider', {
  slidesPerView: 1.2,
  centeredSlides: true,
  loop: true,
  // loopAdditionalSlides: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//サムネイル
let Thumbnail = new Swiper('.thumbnail', {
  slidesPerView: 5,
  centeredSlides: true,
  loop: true,
  // loopAdditionalSlides: 5,
  slideToClickedSlide: true,
});

// スライド遷移時にイベントが発生する slideChange というAPIを使用
// スライダーをスライドした時にサムネイルを移動させる
mainSlider.on('slideChange', () => {
  // realIndex は現在activeになっているスライドの番号が入っている
  Thumbnail.slideToLoop(mainSlider.realIndex);
});
// サムネイルをスライドした時にメインスライドを連動させる(上記と逆)
Thumbnail.on('slideChange', () => {
  mainSlider.slideToLoop(Thumbnail.realIndex);
});