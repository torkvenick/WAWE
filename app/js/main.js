var mixer = mixitup('.gallery__items');

var mySwiper = new Swiper('.blog__container', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
});

$(document).ready(function() {
  $('.video__popup').magnificPopup({
    type:'iframe'
  });
});