var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  var swiper = new Swiper(".myCwiper", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    loop:true,
    navigation: {
      nextEl: ".Cwiper-next",
      prevEl: ".Cwiper-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
  });

    
  const toTop=document.querySelector(".top-bottom");
  window.addEventListener("scroll",()=>{
      if(window.pageYOffset >200){
          toTop.classList.add("active");
      }else{
          toTop.classList.remove("active");
      }
  });
  $(window).scroll(function(){
    var sticky = $('.header-section'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 300) sticky.addClass('menu-fixed');
    else sticky.removeClass('menu-fixed');
  });




$(".opne-menu ,.header-close").click(function(){
  $(".header-button ,.head-scr").toggleClass("active")
});