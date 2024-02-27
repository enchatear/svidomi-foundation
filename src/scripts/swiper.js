import Swiper from 'swiper/bundle'; // Імпорт Swiper.js
import 'swiper/swiper-bundle.css';


const socialSwiper = new Swiper('.social_swiper-container', {
  slidesPerView: 'auto',
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
  },
  spaceBetween: 24
});

const awardsSwiper = new Swiper('.awards_swiper-container', {
  slidesPerView: 1,
  // loop: true,
  // spaceBetween: 0,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  centeredSlides: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
})