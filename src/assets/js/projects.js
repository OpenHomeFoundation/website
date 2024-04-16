import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

Swiper.use([Autoplay]);

new Swiper(".collab-container", {
  spaceBetween: 24,
  centeredSlides: true,
  slidesPerView: 1.2,
  enabled: true,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  speed: 12000,
  breakpoints: {
    768: {
      slidesPerView: "auto",
    },
  },
});
