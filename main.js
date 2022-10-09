"use strict";

const navbar = document.querySelector(".navbar");
const navbarLogo = document.querySelector(".navbar-brand");
const navbarBtn = document.querySelector(".navbar-toggler");
const navIcon = document.querySelector(".navbar-toggler");
const privacy = document.querySelector(".privacy");
const terms = document.querySelector(".terms");
const faq = document.querySelector(".faq");
const footerHead = document.querySelector(".modal-title");

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    navbar.style.backgroundColor = "white";
    navbarLogo.style.color = "black";
    navbarBtn.style.color = "black";
    navIcon.style.color = "black";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbarLogo.style.color = "#fdcc52";
    navbarBtn.style.color = "rgb(185, 185, 185)";
    navIcon.style.color = "rgb(185, 185, 185)";
  }
});

// modal

privacy.addEventListener("click", () => {
  footerHead.innerHTML = privacy.innerHTML;
  $("#footerModals").modal("toggle");
});

terms.addEventListener("click", () => {
  footerHead.innerHTML = terms.innerHTML;
  $("#footerModals").modal("toggle");
});

faq.addEventListener("click", () => {
  footerHead.innerHTML = faq.innerHTML;
  $("#footerModals").modal("toggle");
});
