function showItems (selectorBtn, selectorContainer) {
    const showBtn = document.querySelector(selectorBtn),
      flexContainer = document.querySelector(selectorContainer);

      showBtn.addEventListener('click', () => {
    var styles = window.getComputedStyle(showBtn,':before');

    if (styles['transform'] !== 'matrix(-1, 0, 0, -1, 0, 0)') {
        showBtn.classList.add('show-link_active');
        showBtn.textContent = 'Скрыть'
        flexContainer.style.height = '100%';
    } else {
        showBtn.classList.remove('show-link_active');
        showBtn.textContent = 'Показать все'
        flexContainer.style.height = '';
    }
    
    });
}

function showBurgerMenu (selectorBurger, burgerMenuList,closeBtn) {
    const menuIcon = document.querySelector(selectorBurger),
      menuContainer = document.querySelector(burgerMenuList),
      main = document.querySelector('main'),
      body = document.querySelector('body');

    if (window.screen.width<=768) {
      menuIcon.addEventListener('click', () => {
          menuContainer.style.transform = 'translateX(0px)';
          main.classList.add('main_active');
          body.style.overflow = 'hidden';
          console.log(1)
        })
  
        const closeIcon = document.querySelector(closeBtn);
        closeIcon.addEventListener('click', () => {
          menuContainer.style.transform = 'translateX(-320px)';
          main.classList.remove('main_active');
          body.style.overflow = '';
        })
  }
}

function showForm (selectorLink, formList,closeBtn, form) {
  const links = document.querySelectorAll(selectorLink),
    formContainer = document.querySelector(formList),
    formItem = document.querySelector(form),
    main = document.querySelector('main'),
    body = document.querySelector('body');

    links.forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      formContainer.style.transform = 'translateX(0px)';
      console.log(links)
      main.classList.add('main_active');
      body.style.overflow = 'hidden';
      formItem.classList.remove('forms_hidden');
    })
  });

  const closeIcon = document.querySelector(closeBtn);
        closeIcon.addEventListener('click', () => {
          formContainer.style.transform = 'translateX(520px)';
          main.classList.remove('main_active');
          body.style.overflow = '';
          formItem.classList.add('forms_hidden');
        })

}

export { showItems, showBurgerMenu, showForm };