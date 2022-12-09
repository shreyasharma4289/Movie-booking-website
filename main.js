// swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
   
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280:{
            slidesPerView:1,
            spaceBetween: 10,

        },
        320:{
            slidesPerView:2,
    spaceBetween: 10,
        }, 
        510:{
            slidesPerView:2,
    spaceBetween: 10,
    },
    758:{
        slidesPerView:3,
spaceBetween: 15,
  },
  900:{
    slidesPerView:4,
spaceBetween: 20,
},
},
  
});