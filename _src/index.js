// CSS and SASS files
import './index.scss';

import { default as Tobi } from '@midzer/tobii'
const tobi = new Tobi()

// Remove the two following lines to remove the product hunt floating prompt
//import FloatingPrompt from 'producthunt-floating-prompt'
//FloatingPrompt({ name: 'Mobile App Landing Page', url: 'https://www.producthunt.com/posts/mobile-app-landing-page', bottom: '96px', width: '450px' })

// Remove the following lines to remove the darkmode js
import Darkmode from 'darkmode-js'
function addDarkmodeWidget() {
  new Darkmode().showWidget()
}
window.addEventListener('load', addDarkmodeWidget)



// Select the hamburger element and main-nav-mob element  
var hamburger = document.querySelector('.hamburger');  
var mainNavMob = document.querySelector('.main-nav-mob');  
  
// Add a click event listener to the hamburger element  
hamburger.addEventListener('click', function() {  
  // Toggle the 'move' class on the main-nav-mob element  
  mainNavMob.classList.toggle('move');  
    
  // Toggle the 'close-menu' class on the hamburger element  
  this.classList.toggle('close-menu');  
});  



// $(".hamburger").click(function(){
//   $(".main-nav-mob").toggleClass("move");
//   $(this).toggleClass("close-menu"); // осталось только научить меню "уезжать" вправо.
// });


// 	$(".main-nav-mob").css("left", "-999px");
// $(".hamburger").click(function(){

//     $(".main-nav-mob").toggle().css("left", "0");
// 	});