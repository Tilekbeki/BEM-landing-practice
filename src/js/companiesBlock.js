import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import {showItems, showBurgerMenu} from './functions';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  autoplay: true,
  speed: 500,
  loop: true,
  width: 240,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  loopAdditionalSlides: 2
});

showItems('.company__button','.companies-flex')