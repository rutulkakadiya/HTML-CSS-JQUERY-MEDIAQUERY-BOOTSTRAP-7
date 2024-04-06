$(document).ready(function(){
  $("#icon1").click(function()
  {
    $(".block").toggle("on")
  })

  $("#icon2").click(function()
  {
    $(".block").toggle("on")
  })

})



var swiper = new Swiper(".mySwiper1", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  jQuery(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.mySwiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {  
      '576': {
        slidesPerView: 1,
        spaceBetween: 40,},
      '768': {
        slidesPerView: 2,
        spaceBetween: 50, },
      '992': {
            slidesPerView: 3,
            spaceBetween: 50, },
      '1200': {
                slidesPerView: 4,
                spaceBetween: 50, },    
    },
      // Optional parameters   
       freeMode: true,
      loop: false,
      scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,},
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', },
  
  })
  
  });

  $(window).scroll(function()
{
    $('header').toggleClass('background',$(this).scrollTop()>100);
});

var swiper = new Swiper(".mySwiper3", {
  autoplay: true,
  autoplayspeed: 1000,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

jQuery(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.mySwiper3', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {  
    '576': {
      slidesPerView: 1,
      spaceBetween: 40,},
    '768': {
      slidesPerView: 1,
      spaceBetween: 50, },
    '992': {
          slidesPerView: 3,
          spaceBetween: 50, },
    '1200': {
              slidesPerView: 3,
              spaceBetween: 50, },    
  },
    // Optional parameters   
     freeMode: true,
    loop: false,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', },

})

});
