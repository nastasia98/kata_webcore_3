let burgerBtn = document.querySelector('.control__burger');
let exitBtn = document.querySelector('.control__exit');
let sidebarMenu = document.querySelector('.sidebar');
let mainContent = document.querySelector('.main-flex');

export function burgerMenuToggle(){
  burgerBtn.addEventListener('click', menuToggle);
  exitBtn.addEventListener('click', menuToggle);
}

function menuToggle() {
  sidebarMenu.classList.toggle('sidebar--hidden');
  mainContent.classList.toggle('main-flex--opacity');
}




