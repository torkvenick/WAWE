// Burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


//Mixitup
var mixer = mixitup('.gallery__items');

//Swiper
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

//Magnific popup for the video
$(document).ready(function() {
  $('.video__popup').magnificPopup({
    type:'iframe'
  });
});