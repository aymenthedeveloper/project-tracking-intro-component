const menuIcon =  document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('show')
  menuIcon.nextElementSibling.classList.toggle('show')
});