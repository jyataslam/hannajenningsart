// variables
const main = $(".main");
const body = $("body");
const hamburger = $(".hamburger");
const sidenav = $(".sidenav");
const desktopNav = $(".navigation");
const desktopLinks = $(".navigation__item");
const desktopNavWrapper = $(".navigation__wrapper");
const navLogo = $('.navigation__logo');
const parallax = $(".parallax");

$(document).ready(function() {
  document
    .getElementById("hamburger")
    .addEventListener("click", handleNavAnimationClick);

  $(parallax).parallax({ imageSrc: "/img/photos-one.jpg" });
});

// Initialize ParticlesJS
// window.onload = function() {
//   Particles.init({
//     selector: ".doctor__background",
//     maxParticles: 200,
//     color: '#e1e1e1',
//     connectParticles: true,

//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           maxParticles: 100,
//           connectParticles: true
//         }
//       },
//       {
//         breakpoint: 425,
//         options: {
//           maxParticles: 100,
//           connectParticles: false
//         }
//       }
//     ]
//   });
// };

// Handle all scroll events
$(document).scroll(function() {
  $(this).scrollTop() > 10
    ? ($(desktopNav).addClass("navigation__nav-scrolled"),
      $(desktopLinks).addClass("navigation__links-scrolled"),
      $(desktopNavWrapper).addClass("navigation__wrapper__scrolled"),
      $(navLogo).addClass('navigation__logo__scrolled'))
    : ($(desktopNav).removeClass("navigation__nav-scrolled"),
      $(desktopLinks).removeClass("navigation__links-scrolled"),
      $(desktopNavWrapper).removeClass("navigation__wrapper__scrolled"),
      $(navLogo).removeClass('navigation__logo__scrolled'));
});

// Handle Sidenav hamburger click
handleNavAnimationClick = () => {
  if ($(hamburger).hasClass("on")) {
    $(hamburger).removeClass("on");
    $(sidenav).removeClass("sidenav-transform-x");
    $(main).removeClass("main-transform-x");
    $(body).removeClass("no-scroll");
  } else {
    $(hamburger).addClass("on");
    $(sidenav).addClass("sidenav-transform-x");
    $(main).addClass("main-transform-x");
    $(body).addClass("no-scroll");
  }
};
