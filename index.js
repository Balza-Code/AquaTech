const navToggle = document.querySelector('#nav-toggle');
const menu = document.querySelector('.nav__list');



  navToggle.addEventListener('click', () => {
    menu.classList.toggle('nav__open');
  });



