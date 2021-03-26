const $iconMenu = document.getElementById('icon-menu'),
  $listMenu = document.getElementById('nav-list');

function showMenu() {
  $iconMenu.classList.toggle('active');
  $listMenu.classList.toggle('active');
}
$iconMenu.addEventListener('click', showMenu);
