// Burger menu
const iconMenu = document.querySelector('.menu__icon');
/* menu__body */
const menuBody = document.querySelector('.menu__list');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Active condition of nav link / Активное состояние навигационной ссылки при нажатии
$('.menu__link').on('click', function (e) {
  $('.menu__link').removeClass('menu__link--active');
  $(this).addClass('menu__link--active');
});

//fixed header during page scroll / фиксированная шапка при прокрутке
$(function () {
  let header = $('.header');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('header--fixed');
    } else {
      header.removeClass('header--fixed');
    }
  });
});


//Scroll by click / прокрутка при клике
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 700);
  });
});


//Swiper for the blog
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
$(document).ready(function () {
  $('.video__popup').magnificPopup({
    type: 'iframe'
  });
  $('.gallery__items').magnificPopup({
    delegate: "a", // the selector for gallery item
    type: "image",
    gallery: {
      enabled: true
    }
  });
});

//Mixitup for gallery
var mixer = mixitup('.gallery__items');