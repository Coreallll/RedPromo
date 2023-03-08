//Аккордеон
const boxes = document.querySelectorAll('.accordion__item');

boxes.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let currentContent = e.currentTarget.querySelector('.accordion__content');
    let pluses = document.querySelectorAll('.plus');
    let contents = document.querySelectorAll('.accordion__content');

    if(!e.currentTarget.classList.contains('accordion__item--active') ) {
      pluses.forEach((plus) => {
        plus.classList.remove('plus--active')
      });

      contents.forEach((content) => {
        content.style.maxHeight = '0';
      });
    }

    item.classList.toggle('accordion__item--active');
    e.currentTarget.querySelector('.plus').classList.toggle('plus--active');
    if (item.classList.contains('accordion__item--active')) {
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    } else {
      currentContent.style.maxHeight = '0';
    }

  });
});