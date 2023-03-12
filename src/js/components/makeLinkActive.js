let navList = document.querySelector('.nav__list')
let navItemFocused = navList.querySelector('.link--focused--nav')
let navItems = navList.children

export function makeLinkActive(){
  for (let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener('click', function () {
      navItems[i].classList.add('link--focused--nav')
      navItemFocused.classList.remove('link--focused--nav')
      let arr = Array.from(navItems)
      let newArr = arr.filter(item => arr.indexOf(item) !== i)
      for (let j = 0; j < newArr.length; j++){
        newArr[j].classList.remove('link--focused--nav')
      }
    })
  }
}


