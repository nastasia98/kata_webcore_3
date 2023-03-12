let btn = document.querySelectorAll('.expand-button');
let brandsList = document.querySelector('.brands__list');
let technicsList = document.querySelector('.technics__list');
let arr = [brandsList, technicsList]

export function showMoreContent(){
  for(let i = 0; i < btn.length; i++){
    let expandImg = btn[i].querySelector('img')
    let expandText = btn[i].querySelector('span')
    let keyWord = arr[i].className.split(' ')[1]
    moreContent(btn[i], expandImg, expandText, arr[i], keyWord)
  }
}

function moreContent(btn, expandImg, expandText, content, keyWord){

  btn.addEventListener('click', function() {
    content.classList.toggle(`${keyWord}`);
    expandImg.classList.toggle('expand-button__img');
    content.classList.contains(`${keyWord}`)
      ? expandText.textContent = 'Показать все'
      : expandText.textContent = 'Cкрыть';
  })
}
