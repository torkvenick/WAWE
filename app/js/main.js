var mixer = mixitup('.gallery__items');

var mySwiper = new Swiper('.blog__container', {
  // Optional parameters
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(document).ready(function() {
  $('.video__popup').magnificPopup({
    type:'iframe'
  });
});