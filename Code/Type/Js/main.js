const menu = document.querySelector('.burger');
const drop = document.querySelector('.dropdown');

menu.addEventListener('click', function() {
  drop.classList.toggle('show');
});