import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateElements(element) {
  gsap.from(element, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      scrub: false,
      once: true
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animationOnScroll");

  animatedElements.forEach(element => {
    animateElements(element);
  })
});