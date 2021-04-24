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

// Active condition of nav link / Активное состояние навигационной ссылки при нажатии
$('.menu__link').on('click', function (e) {
  $('.menu__link').removeClass('menu__link--active');
  $(this).addClass('menu__link--active');
});


//Scroll by click / прокрутка при клике

/* Collecting objects' massive, which take part in navigation / Собираем массив обьектов, которые учавствуют в навигации */
/* 1. Creating massive; querySelectorAll helps to search objects with class 'menu__link' and attribute [data-goto] / создаем массив. querySelectorAll помогает искать класс вместе с конкретным атрибутом */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
/* checking whether we have such objects. If we do, work starts / Проверяем есть ли данные обьекты. Если есть - начинаем работу */
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    /* hanging "click" event on function, which we create below / вешаем событие "click" на созданную ниже функцию */
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    /* here we get the object we click on (link in our case) / здесь получаем обьект, на который кликаем (ссылка в нашем случае) */
    const menuLink = e.target;
    /* creating task, which checks if data attribute is filled, if there's something in it and if object, to which data attribute is related, exist / создаем важное условие, проверяющее заполнен ли дата атрибут, есть ли в нём что-то и существует ли объект, на который он ссылается */
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      /* following const gives us this object / данной константой получаем объект */
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      /* calculating position of the object? including header height / высчитываем положение объекта с учетом высоты шапки */
      /* pageYOffset - qty of scrolled pixels / pageYOffset - количество прокрученных пикселей */
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      /* makes scroll work. Giving task to browser's window / заставляет скролл прокручиваться. Мы обращаемся к окну браузера */
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      /* Disabling link default work. Allow her only to go to necessary section / Отключаем ссылку, позволяя лишь скроллить к нужному блоку */
      e.preventDefault();
    }
  }

}

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