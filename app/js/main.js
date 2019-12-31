$(function () {

  // accordion
  $(".accordion_tab").click(function(){
    $(".accordion_tab").each(function(){
      $(this).parent().removeClass("active");
      $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
});

// slider
$('.slider__inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev arrow__prev"><img src="img/svg/arrow-left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next arrow__next"><img src="img/svg/arrow-right.svg" alt=""></button>',
});



});