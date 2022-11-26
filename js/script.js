$(document).ready(function(){

  setTimeout(()=>{
    $("#preloader img").css("opacity" , "0")
  } , 700)
  setTimeout(() => {
    $("#preloader").css({
      opacity : "0" , 
      visibility : "hidden" ,
    })
    $("body").css("overflow" , "visible");
  }, 1500);

  // gallery swiper

const swiper = new Swiper(' .gallery .mySwiper', {
  loop: true,
  // autoplay: true,
 
  pagination: {
    el: '.gallery .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.gallery .swiper-button-next ',
    prevEl: '.gallery .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});


// blog swiper
const swiper2 = new Swiper(' .blog .mySwiper', {
  loop: true,
  // autoplay: true,
 
  pagination: {
    el: '.blog .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.blog .swiper-button-next ',
    prevEl: '.blog .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20
    }, 
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});


//  wow animation
new WOW().init();

//  open & close  nav 

$(".menu-bars").click(function(){
  $(".mynav").removeClass("open-nav");
  $("body").css("overflow" , "hidden") ;
})
$(".menu-close").click(function(){
  $(".mynav").addClass("open-nav");
  $("body").css("overflow" , "visible") ;
})


// nested products list in small screen 

  $(".li-drop").click(function (e) {
    e.preventDefault() ;
    $(".drop-list").slideToggle(1000) ;
    })


// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})



$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, '1000');
}) 



// footer-ul-drop
if($(window).width() <= 768) {
  $(".list-item h4").click(function(){
    $(this).next().slideToggle(500);
    $(this).toggleClass("test");
  })
}
})




