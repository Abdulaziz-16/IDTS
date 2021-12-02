function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

$(document).ready(function () {
  $("#buttonUp").click(function () {
    $('body, html').animate({
      scrollTop: 0
  }, 400);
  return false;
  })
  $(window).scroll(function () {

    let scroll = $(window).scrollTop();
    let topfixed = $(window).scrollTop();
    
    if (scroll > 100) {
      $("#buttonUp").fadeIn("slow");
    } else {
      $("#buttonUp").fadeOut("slow");
    }
    
    if (topfixed > 500) {
      $(".header").fadeIn("slow");
    } else {
      $(".header").fadeOut("slow");
    }
    
   
  });
  

  
  $(window).ready(function () {
    let mobWidth = $(window).innerWidth();
    if (mobWidth < 992) {
      $('.app-header__nav__link').click(function (event) {
        $('.app-header__nav').toggleClass('flex')
        $('body').toggleClass('lock')
      })
    }
  })

  $('.app-header__bars, .app-header__nav__close').click(function (event) {
    
    
    $('.app-header__nav').toggleClass('flex')
    $('body').toggleClass('lock')
  })
  $.mask.definitions['9'] = false;
  $.mask.definitions['5'] = "[0-9]";
  $("#phone").mask("+998(55)555-55-55");
  $('.modal-open, .modal-header__close').click(function (event) {
    
    $('#modal').toggle('slow').css("display", "flex")
    $('body').toggleClass('lock')
    

  })
});


$(document).ready(function () {

  let links = $('.app-header__nav__link');
  links.click(function (e) {
    e.preventDefault();
    links.removeClass('active');
    
    let menuHeight = $('.app-header__nav').innerHeight();
    let id = $(this).addClass('active').attr('href');
    let target = $(id).offset().top - menuHeight - 10;
    
    $('html').animate({
      scrollTop: target
    }, 1000)
  })

  $(window).scroll(function () {
    var scroll = $(this).scrollTop();

    links.each(function () {
      var attr = $(this).attr('href');
      var postion = $(attr).offset().top;
      if (scroll >= postion) {
        links.removeClass('active');
        $(this).addClass('active');
      }
    })
  })

  $('.slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: '.app-main-slider__paginate__right',
    prevArrow: '.app-main-slider__paginate__left',
    dots: true,
    dotsClass: 'app-main-slider__paginate',
  });
  $('.app-main-section__brands__brand').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: '.app-main-section__brands__paginate__right',
    prevArrow: '.app-main-section__brands__paginate__left',
    dots: true,
    dotsClass: 'app-main-section__brands__paginate',
    appendDots: '.app-main-section__brands',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});