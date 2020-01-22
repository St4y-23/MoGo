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

 // Fixed header
 let header = $("#header");
 let intro = $("#header");
 // let introH = intro.height();       <----/* Высота элемента без падингов */
 let introH = intro.innerHeight();          /* Высота элемента с падингами */
 let scrollPos = $(window).scrollTop();     /* Позиция скролла от самого верха */
 checkScroll(scrollPos, introH);
 let nav = $("#nav")
 let navToggle = $("#navToggle");

 $(window).on("scroll resize", function () {         /* Выполнение действий при скролле, (load) загрузке изменении размера страницы */
   introH = intro.innerHeight();
   scrollPos = $(this).scrollTop();                    /* Обновить переменную на текущую позицию скролла */
   checkScroll(scrollPos, introH);

 });

 function checkScroll(scrollPos, introH) {
   if (scrollPos > introH) {                           /* Если высота скролла больше чем высота introH, то добавляется класс "fixed", если высота нет то класс убирается */
     header.addClass("fixed");
   } else {
     header.removeClass("fixed");
   }
 }

 // Smooth scroll
 $("[data-scroll").on("click", function (event) {              /* Event event.preventDefault - отменяет стандратное поведение ссылки при клике  */
  event.preventDefault();

  let elementID = $(this).data("scroll");                   /* Получить ID блока по которому кликнули */
  let elementOffset = $(elementID).offset().top;            /* Получить отступ от верха страницы  */

  nav.removeClass("show")

  // console.log(elementOffset);

  $("html, body").animate({                                 /* При клике плавно скролит до элемента по которому кликнули */
    scrollTop: elementOffset - 70                           /* - 50px  */
  }, 700);                                                /* Скорость прокрутки где 1000 - 1 секунда */
});

$(".ham").click(function(){
  $(".header__menu").slideToggle();
});



});