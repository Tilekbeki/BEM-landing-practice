var swiper = new Swiper(".swiper", {
  autoplay: true,
  speed: 500,
  loop: true,
  width: 240,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  loopAdditionalSlides: 2
});

const companyShowBtn = document.querySelector('.company__button'),
      companiesFlexContainer = document.querySelector('.companies-flex');

companyShowBtn.addEventListener('click', () => {
  var styles = window.getComputedStyle(companyShowBtn,':before');

  if (styles['transform'] !== 'matrix(-1, 0, 0, -1, 0, 0)') {
    companyShowBtn.classList.add('show-link_active');
    companyShowBtn.textContent = 'Скрыть'
    companiesFlexContainer.style.height = '100%';
  } else {
    companyShowBtn.classList.remove('show-link_active');
    companyShowBtn.textContent = 'Показать все'
    companiesFlexContainer.style.height = '186px';
  }
  
});