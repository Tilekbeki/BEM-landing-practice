import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import showItems from './functions';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var swiper = new Swiper(".price-slider", {
  modules: [Navigation, Pagination],
  autoplay: true,
  speed: 500,
  loop: true,
  width: 260,
  spaceBetween: 16,
  pagination: {
    el: ".price-slider__pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  loopAdditionalSlides: 2
});

