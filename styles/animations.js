// All the animations are done in this file

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//Registering the ScrollTrigger plugin to gsap
gsap.registerPlugin(ScrollTrigger);

// sliding animation in x-axis i.e. left or right with scroll
export const triggerXSlide = function (animationClass) {
  // const x = animationClass == ".trigger-left" ? 50 : -50;
  const x = animationClass.includes("left") ? 50 : -50;

  gsap.fromTo(
    animationClass,
    {
      x: x,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: animationClass,
        start: "top bottom",
        end: "top bottom-=200",
        scrub: 0.5,
        // markers: true,
      },
    }
  );
};

// sliding animation in y-axis i.e. top or bottom with scroll
export const triggerYSlide = function (animationClass) {
  // const y = animationClass == ".trigger-top" ? 50 : -50;
  const y = animationClass.includes("top") ? 50 : -50;
  gsap.fromTo(
    animationClass,
    {
      y: y,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: animationClass,
        start: "50px bottom",
        end: "top bottom-=200",
        scrub: 0.5,
      },
    }
  );
};

// Fading animation without scroll
export const fadeAnimation = function (animationClass) {
  const scrollTrigger = animationClass.includes("scroll")
    ? {
        trigger: animationClass,
        start: "50px bottom",
        end: "top bottom-=70",
        scrub: 0.5,
      }
    : "";
  gsap.fromTo(
    animationClass,
    {
      opacity: 0,
    },
    {
      duration: 3,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: scrollTrigger,
    }
  );
};

// Slide animation without scroll  (x-axis)
export const xSlide = function (animationClass) {
  const x = animationClass == ".slide-left" ? 50 : -50;
  gsap.from(animationClass, { opacity: 0, x: x, duration: 1 });
};

// Slide animation without scroll  (y-axis)
export const ySlide = function (animationClass) {
  const y = animationClass == ".slide-top" ? 100 : -100;
  gsap.from(animationClass, { opacity: 0, y: y });
};
