const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	// slidesPerGroup: 1,
	spaceBetween: 24,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  watchOverflow: true,

  breakpoints: {
    1116: {
      slidesPerView: 4
    },
    850: {
      slidesPerView: 3
    },
    450: {
      slidesPerView: 2
    },
  },
});