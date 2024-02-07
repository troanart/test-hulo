import './scss/main.scss';
import CreateElem from './js/items';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Modal from './js/modal';


Modal()
CreateElem()

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });


  var swiperPagitanion = new Swiper(".mySwiper2", {
    modules: [Pagination],
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' js-class">' + (index + 1) + "</span>";
      },
    },
    autoplay: {
      delay: 5000, 
      disableOnInteraction: false, 
    },
    
  });
