const burgerBtn = document.getElementById('burger');
const closeNav = document.getElementById('close');
const headerNav = document.querySelector('.nav');
const headerBack = document.querySelector('.header-back');
const body = document.querySelector('.page__body');

burgerBtn.addEventListener('click', (ec) => {
  body.classList.add('body-scroll');
  headerNav.classList.add('nav--active');
  headerBack.classList.add('header-back--active');
  closeNav.classList.add('nav-close--active');
});

closeNav.addEventListener('click', () => {
  body.classList.remove('body-scroll');
  headerNav.classList.remove('nav--active');
  headerBack.classList.remove('header-back--active');
  closeNav.classList.remove('nav-close--active');
})

body.addEventListener('click', (e) => {
  let target = e.target;
  let itsHeaderNav = target === headerNav || headerNav.contains(target);
  let itsBurgerBtn = target === burgerBtn;

  if (!itsHeaderNav && !itsBurgerBtn) {
    body.classList.remove('body-scroll');
    headerNav.classList.remove('nav--active');
    headerBack.classList.remove('header-back--active');
    closeNav.classList.remove('nav-close--active');
  }
});
