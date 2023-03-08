//heroSwiper
const heroSwiper = new Swiper('.myhome', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,
  loop: true,
  simulateTouch: true,

  pagination: {
    el: '.myhome__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.myhome__next',
    prevEl: '.myhome__prev',
  },
});

//newsSwiper
const newsSwiper = new Swiper('.news', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  loop: true,
  simulateTouch: true,

  pagination: {
    el: '.news__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.news__next',
    prevEl: '.news__prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    376: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },
});

//heroComplexSwiper
const mediaSize = 767;
let complexSwiper = null;

function complexSwiperInit() {
  if(!complexSwiper) {
    complexSwiper = new Swiper('.complex-cards', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      loop: true,
      simulateTouch: true,
    });
  }
}

function complexSwiperDestroy () {
  if(complexSwiper) {
    complexSwiper.destroy();
    complexSwiper = null;
  }
}

function complexInit() {
  let windowWidth = window.innerWidth;

  if (windowWidth <= mediaSize) {
    complexSwiperInit()
  } else {
    complexSwiperDestroy();
  }
}

const loadResize = ['load', 'resize'];

loadResize.forEach((el) => {
  window.addEventListener(el, function () {
    complexInit();
  });
})

window.addEventListener('load', () => {

});




//YMap
ymaps.ready(function () {
  const contactsMap = new ymaps.Map("YMap", {
    center: [55.777249694486855,37.63335489881133],
    zoom: 17,
    controls: []
  })

  const contactsPlacemark = new ymaps.Placemark([55.777464358359985,37.63149344575499], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/point.svg',
    iconImageSize: [25, 32],
    iconImageOffset: [135, 20]
  });

  contactsMap.geoObjects.add(contactsPlacemark);

  if(window.innerWidth <= 1024) {
    contactsMap.behaviors.disable('drag');
  }

});
