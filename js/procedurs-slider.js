const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 25,
  
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    clickable: false,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});