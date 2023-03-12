let gridContent = document.querySelector('.grid');

let callBtn = document.querySelector('.control__call');
let callExitBtn = document.querySelector('.call__exit');
let callContent = document.querySelector('.call');

let feedBtn = document.querySelector('.control__feedback');
let feedExitBtn = document.querySelector('.feedback__exit');
let feedbackContent = document.querySelector('.feedback');

export function modulesContentToggle(openBtn, exitBtn, contentBlock){
  openBtn.addEventListener('click', function() {
    contentBlock.classList.remove('module--hidden');
    gridContent.style.opacity = '0.1';
  })

  exitBtn.addEventListener('click', function() {
    contentBlock.classList.add('module--hidden');
    gridContent.style.opacity = '1';
  })
}

