new Swiper('.swiper-container', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      820: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
   },
});