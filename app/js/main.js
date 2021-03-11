var mixer = mixitup('.gallery__inner');

var mySwiper = new Swiper('.blog__container', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});