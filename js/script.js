$(document).ready(function () {
  $(".md_view_sub_menu").hide();
  $(".md_view_menu li a").click(function () {
    $(this).next(".md_view_sub_menu").slideToggle();
    $(this).find("i").toggleClass("bi-chevron-down bi-chevron-up");
  });
  $("#banner").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $("#Newproduct").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576:{
        items:2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  $("#Testimonail").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
        center: true,
        stagePadding:30,
      },
      768: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
  });
  $("#Logoslider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  $("#Blog").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    // autoplay: true,
    // autoplayTimeout: 6000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },

      992: {
        items: 3,
      },
    },
  });
  $(window).scroll(function () {
    var sticky = $(".sticky"),
      scroll = $(window).scrollTop();
    if (scroll >= 200) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });
});
