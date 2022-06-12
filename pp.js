let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}


let myNav = document.querySelector("header");



window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }

   
}

let a = document.querySelectorAll(".links");
  let sec = document.querySelectorAll("section");

  function activeMenu(){
      let len = sec.length;
      while(--len && window.scrollY + 50 < sec[len].offsetTop){}
      a.forEach(ltx => ltx.classList.remove("active"));
      a[len].classList.add("active");
  }

  activeMenu();
  window.addEventListener("scroll",activeMenu);


  


  document.querySelectorAll('.navbar a').forEach(n => n.addEventListener('click',() => {
    menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}))

 
const toTop = document.querySelector('.angle');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100){
    toTop.classList.add('active');
  }
  else{
    toTop.classList.remove('active');
  }

})

 
    