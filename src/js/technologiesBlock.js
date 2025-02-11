import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import {showItems } from './functions';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var swiper = new Swiper(".technology-slider", {
  modules: [Navigation, Pagination],
  autoplay: true,
  speed: 500,
  loop: true,
  width: 240,
  spaceBetween: 16,
  pagination: {
    el: ".technology-slider__pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  loopAdditionalSlides: 2
});

showItems('.technologies__button', '.technologies-flex');

