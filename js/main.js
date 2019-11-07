
// variables
const main = $(".main");
const body = $("body");
const html = $('html');
const hamburger = $(".hamburger");
const sidenav = $(".sidenav");
const desktopNav = $(".navigation");
const desktopLinks = $(".navigation__item");
const desktopNavWrapper = $(".navigation__wrapper");
const socialIcon = $(".navigation__social__icon");
const navLogo = $(".navigation__logo");
const parallax = $(".parallax");
const modalBody = $('.modal-body');
const modalTrigger = $('#exampleModalPreview');

$(document).ready(function () {
  $('#hamburger').click(handleNavAnimationClick);

  $(parallax).parallax({ imageSrc: "/img/photos-one.jpg" });

  fetchInstagram();

  $(modalTrigger).on("show.bs.modal", e => {
    let imageUrl = $(e.relatedTarget).attr("src");
    let modalImage = $(".modal-image").attr("src", imageUrl);
    $(modalBody).append(modalImage);
  });
});

// Handle all scroll events
$(document).scroll(function () {
  $(this).scrollTop() > 10
    ? ($(desktopNav).addClass("navigation__nav-scrolled"),
      $(desktopLinks).addClass("navigation__links-scrolled"),
      $(socialIcon).addClass("navigation__links-scrolled"),
      $(desktopNavWrapper).addClass("navigation__wrapper__scrolled"),
      $(navLogo).addClass("navigation__logo__scrolled"))
    : ($(desktopNav).removeClass("navigation__nav-scrolled"),
      $(desktopLinks).removeClass("navigation__links-scrolled"),
      $(socialIcon).removeClass("navigation__links-scrolled"),
      $(desktopNavWrapper).removeClass("navigation__wrapper__scrolled"),
      $(navLogo).removeClass("navigation__logo__scrolled"));
});

// Handle Sidenav hamburger click
handleNavAnimationClick = () => {
  if ($(hamburger).hasClass("on")) {
    $(hamburger).removeClass("on");
    $(sidenav).removeClass("sidenav-transform-x");
    $(main).removeClass("main-transform-x");
    $(body).removeClass("no-scroll");
    $(html).removeClass("no-scroll");
  } else {
    $(hamburger).addClass("on");
    $(sidenav).addClass("sidenav-transform-x");
    $(main).addClass("main-transform-x");
    $(body).addClass("no-scroll");
    $(html).addClass("no-scroll");
  }
};

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

$('.navigation__logo').on('click', e => {
  e.preventDefault();
  $('#hero').scrollView();
})

$('.about-link-sidenav').on('click', e => {
  e.preventDefault();
  handleNavAnimationClick();
  $('#about').scrollView();
})

$('.work-link-sidenav').on('click', e => {
  e.preventDefault();
  handleNavAnimationClick();
  $('.art').scrollView();
})

$('.contact-link-sidenav').on('click', e => {
  e.preventDefault();
  handleNavAnimationClick();
  $('#contact').scrollView();
})

$('.about-link').on('click', e => {
  e.preventDefault();
  $('#about').scrollView();
})

$('.work-link').on('click', e => {
  e.preventDefault();
  $('.art').scrollView();
})

$('.contact-link').on('click', e => {
  e.preventDefault();
  $('#contact').scrollView();
})


// Pull data to dynamically create art cards in Art section. This might be destroyed once Etsy API is integrated
const data = [
  {
    id: 1,
    pic: "/img/art/abstract2.jpg",
    name: "Art Piece 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae odio facere quo corrupti distinctio sapiente expedita animi alias, dolor qui quod fuga, nisi consectetur. Sit voluptatem non natus optio. Voluptatum!",
    url: "#",
    materials: "Oil on canvas",
    price: "$100"
  },
  {
    id: 2,
    pic: "/img/art/abstract3.jpg",
    name: "Art Piece 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae odio facere quo corrupti distinctio sapiente expedita animi alias, dolor qui quod fuga, nisi consectetur. Sit voluptatem non natus optio. Voluptatum!",
    url: "#",
    materials: "Oil on canvas",
    price: "$300"
  },
  {
    id: 3,
    pic: "/img/art/abstract4.jpg",
    name: "Art Piece 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae odio facere quo corrupti distinctio sapiente expedita animi alias, dolor qui quod fuga, nisi consectetur. Sit voluptatem non natus optio. Voluptatum!",
    url: "#",
    materials: "Oil on canvas",
    price: "$10200"
  },
  {
    id: 4,
    pic: "/img/art/abstract5.jpg",
    name: "Art Piece 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae odio facere quo corrupti distinctio sapiente expedita animi alias, dolor qui quod fuga, nisi consectetur. Sit voluptatem non natus optio. Voluptatum!",
    url: "#",
    materials: "Oil on canvas",
    price: "$200"
  },
  {
    id: 5,
    pic: "/img/art/abstract6.jpg",
    name: "Art Piece 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae odio facere quo corrupti distinctio sapiente expedita animi alias, dolor qui quod fuga, nisi consectetur. Sit voluptatem non natus optio. Voluptatum!",
    url: "#",
    materials: "Oil on canvas",
    price: "$550"
  },
  {
    id: 6,
    pic: "/img/art/abstract7.jpg",
    name: "Art Piece 6",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae odio facere quo corrupti distinctio sapiente expedita animi alias, dolor qui quod fuga, nisi consectetur. Sit voluptatem non natus optio. Voluptatum!",
    url: "#",
    materials: "Oil on canvas",
    price: "$120"
  }
];

const buildArtCard = art => {
  const div = $("<div>");
  const name = $("<h3>");
  const a = $("<a>");
  const img = $("<img>");
  const description = $("<p>");
  const materials = $("<p>");
  const price = $("<h3>");
  const button = $("<button>Buy Now</button>");

  const artRow = $(".art__row");
  artRow.append(div);
  name.append(art.name);
  description.append(art.description);
  price.append(art.price);
  materials.append(art.materials);
  div.append(img);
  div.append(name, description, materials, price, button);

  description.attr("class", "art__row__text");
  price.attr("class", "art__row__price");
  button.attr("class", "general-btn art__row__button");

  a.attr("href", art.url);
  img.attr({
    src: art.pic,
    class: "art__row__image",
    id: "modalActivate",
    "data-toggle": "modal",
    "data-target": "#exampleModalPreview"
  });
  div.attr("class", "art__row__container");
};

data.forEach(art => buildArtCard(art));

