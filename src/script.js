gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector(".hero__images-wrapper");

const standardBtn = document.getElementById("standardBtn");
const proBtn = document.getElementById("proBtn");

const standardPrice = document.getElementById("standard-membership");
const proPrice = document.getElementById("pro-membership");

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".floating-nav__link");

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

function togglePro() {
  proPrice.style.display = "block";
  proBtn.classList.add("w--current");
  standardPrice.style.display = "none";
  standardBtn.classList.remove("w--current");
}

function toggleStandard() {
  proPrice.style.display = "none";
  proBtn.classList.remove("w--current");
  standardPrice.style.display = "block";
  standardBtn.classList.add("w--current");
}

const faqRows = document.querySelectorAll(".faq__row");

faqRows.forEach((row) => {
  const rowAnswer = row.querySelector(".faq__answer");
  const rowArrow = row.querySelector(".faq__arrow");

  row.addEventListener("click", () => {
    const isAnswerVisible = rowAnswer.style.display !== "none";

    // Toggle answer visibility
    if (isAnswerVisible) {
      rowAnswer.style.display = "none";
      rowArrow.style.transform = "rotate(0deg)";
    } else {
      rowAnswer.style.display = "block";
      rowArrow.style.transform = "rotate(180deg)";
    }
  });
});

proBtn.addEventListener("click", togglePro);
standardBtn.addEventListener("click", toggleStandard);
