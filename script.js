const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".logo", { duration: 1, opacity: 0, y: -50 });

  gsap.from(".menus li", {
    duration: 1,
    opacity: 0,
    y: -20,
    stagger: 0.2,
  });

  gsap.from(".hero-text", { duration: 1.5, opacity: 0, y: 50 });

  gsap.from(
    ".secondSection img, .secondSection .description, .thirdSection .grid div",
    {
      scrollTrigger: {
        trigger: ".secondSection, .thirdSection",
        start: "top 80%",
      },
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2,
    }
  );
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(
  ".secondSection,.secondSection .description, .thirdSection .grid div",
  {
    scrollTrigger: {
      trigger: ".secondSection, .thirdSection",
      start: "right 80%",
    },
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
  }
);
