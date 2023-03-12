let showTextBtn = document.querySelector('.showtext-button')
let showTextBtnImg = showTextBtn.querySelector('img')
let showTextBtnText = showTextBtn.querySelector('span')
let textBlock = document.querySelector('.text')
let text = textBlock.innerText
let textArr = text.split(' ')

export function textShow(){

  function textLength(arr){
    let content = ''
    for (let i=0; i<arr.length; i++){
      content += arr[i] + ' '
      if(i === 21 || i === 56 || i === 78 || i === arr.length-1){
        content += '\n\n'
      }
    }
    textBlock.innerText = content
  }

  if(window.innerWidth < 768){
    let newText = textArr.slice(0, 22)
    textLength(newText)
  } else if(window.innerWidth > 768 && window.innerWidth < 1120){
    let newText = textArr.slice(0, 33)
    textLength(newText)
  } else {
    let newText = textArr.slice(0, 57)
    textLength(newText)
  }

  showTextBtn.addEventListener('click', function(){
    textLength(textArr)
    showTextBtnImg.classList.add('showtext-button__img');
    textArr.length < 57
      ? showTextBtnText.textContent = 'Читать далее'
      : showTextBtnText.textContent = 'Cкрыть';

    if (showTextBtnText.textContent === 'Cкрыть'){
      showTextBtn.addEventListener('click', function(){
        textShow()
        showTextBtnText.textContent = 'Читать далее';
        showTextBtnImg.classList.remove('showtext-button__img');
      })
    }
  })
}
