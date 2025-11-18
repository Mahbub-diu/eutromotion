(function ($) {
  $(document).ready(function () {
    //  code goes here

    $('[data-background]').each(function () {
      $(this).css({
        'background-image': 'url(' + $(this).attr('data-background') + ')',
        'background-size': 'cover',
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
      });
    });

    // home slider start here

    var swiper = new Swiper('.home-slider', {
      effect: 'fade',
      speed: 2000,
      autoplay: {
        delay: 5000,
      },
      autoplay: false,
      loop: true,
    });

    $('.swiper-video').on('loadeddata', function () {
      var duration = this.duration;

      var autoplayDelay = Math.round(duration * 1000);

      $(this)
        .closest('.video-slide')
        .attr('data-swiper-autoplay', autoplayDelay);

      console.log('Video Duration: ' + duration + ' seconds');
    });
    // home slider ends here

    var swiper = new Swiper('.assemblaggio-slider', {
      slidesPerView: 1.8,
      spaceBetween: 70,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: false,
      centeredSlides: true,

      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1.4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1.4,
          spaceBetween: 40,
        },
        1025: {
          slidesPerView: 1.4,
          spaceBetween: 45,
        },
        1200: {
          slidesPerView: 1.5,
          spaceBetween: 70,
        },
      },
    });

    // Mobile menu start
    $('header .main-header .header-flex .main-header-items').meanmenu();

    $(document).on('click', '#header-bar', function () {
      $(this).toggleClass('active');

      $('#targetElement').slideToggle(600);
    });

    // Mobile menu ends

    // header sticky start
    $(window).scroll(function () {
      var navbar = $('#main-header');
      if ($(window).scrollTop() >= 150) {
        navbar.addClass('sticky');
      } else {
        navbar.removeClass('sticky');
      }
    });
    // header sticky ends
  });
})(jQuery);
