const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");

  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
  };
  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
  };
});

// Initialize ScrollReveal
const sr = ScrollReveal({
  origin: "top", // Direction from where the element will appear (can be 'top', 'bottom', 'left', 'right')
  distance: "85px", // How far the element will move
  duration: 2500, // Duration of the animation
  reset: true, // Reset the animation after scrolling past the element
});

// Apply ScrollReveal to the element with the class 'home-text'
sr.reveal(".home-text", {
  delay: 300, // Delay before the animation starts
});
sr.reveal(".home-img", {
  delay: 400, // Delay before the animation starts
});

sr.reveal(".container", {
  delay: 400, // Delay before the animation starts
});

sr.reveal(".about-img", {});
sr.reveal(".about-text", { delay: 300 });

sr.reveal(".middle-text", {});

sr.reveal(".row-btn, .shop-content", {
  delay: 300, // Optional: Delay before animation starts for these elements
});

sr.reveal(".review-content,shop-content", { delay: 300 });
