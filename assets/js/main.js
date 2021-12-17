$(document).ready(function () {
  $(".banner-area").slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    infinite: true,
    autoplay: true,
    loop: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".testimonials").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    loop: true,
    slidesToShow: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('#nav').slicknav();
});
