import '../scss/style.scss'

import {swiperMode} from "./components/swiperMode";
import {textShow} from "./components/textShow";
import {burgerMenuToggle} from "./components/burgerMenuToggle";
import {showMoreContent} from "./components/showMoreContent";
import {makeLinkActive} from "./components/makeLinkActive";
import {modulesContentToggle} from "./components/modulesContentToggle";

window.addEventListener('load', swiperMode);
window.addEventListener('resize', swiperMode);

window.addEventListener('load', textShow)
window.addEventListener('resize', textShow)

burgerMenuToggle()
showMoreContent()
makeLinkActive()

//modules show/hidden
let callBtn = document.querySelector('.control__call');
let callExitBtn = document.querySelector('.call__exit');
let callContent = document.querySelector('.call');

let feedBtn = document.querySelector('.control__feedback');
let feedExitBtn = document.querySelector('.feedback__exit');
let feedbackContent = document.querySelector('.feedback');

modulesContentToggle(callBtn, callExitBtn, callContent)
modulesContentToggle(feedBtn, feedExitBtn, feedbackContent)
