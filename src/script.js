gsap.registerPlugin(ScrollTrigger)
const container = document.querySelector(".hero__images-wrapper");

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".floating-nav__link");

  const scrollPosition = window.scrollY;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove 'active-link' class from all links
      navLinks.forEach((otherLink) => {
        otherLink.classList.remove("w--current");
      });

      // Add 'active-link' class to the clicked link
      link.classList.add("w--current");
    });
  });
});

let tl = gsap.timeline();
tl.to(container, {
  x: "-450px",
  scrollTrigger: {
    trigger: container,
    start: "top bottom",
    end: "+500px",
    scrub: true,
    // markers: true
  },
});
