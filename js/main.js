/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE HEADER STYLES ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper(".popular__swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 32,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: { spaceBetween: 80 },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

// Link the ID of each section (section id="home") to each link (a href="#home")
// and activate the link with the class .active-link
const scrollActive = () => {
  // We get the position by scrolling down
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id, // id of each section
      top = section.offsetTop - 50, // Distance from the top edge
      height = section.offsetHeight, // Element height
      link = document.querySelector(".nav__menu a[href*=" + id + "]"); // id nav link

    if (!link) return;

    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height,
    );
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  // reset: true,
});

sr.reveal(`.home__shape`, { origin: "bottom" });
sr.reveal(`.home__coffee`, { delay: 1000, distance: "200px", duration: 1500 });
sr.reveal(`.home__splash`, { delay: 1600, scale: 0, duration: 1500 });
sr.reveal(`.home__bean-1, .home__bean-2`, {
  delay: 2200,
  scale: 0,
  duration: 1500,
  rotate: { z: 180 },
});
sr.reveal(`.home__ice-1, .home__ice-2`, {
  delay: 2600,
  scale: 0,
  duration: 1500,
  rotate: { z: 180 },
});
sr.reveal(`.home__leaf`, {
  delay: 2800,
  scale: 0,
  duration: 1500,
  rotate: { z: 90 },
});
