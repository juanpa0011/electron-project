const newGame = document.getElementById("newgame");

const starFallIntro = document.getElementsByClassName("falling-stars")[0]

const mainMenu = document.getElementsByClassName("Menu-list")[0]
const IntroContainer = document.getElementsByClassName("Background--menu")[0]

const chap1 = document.getElementById("chapter-one");


newGame.addEventListener("click", () => {
    fadeOut(mainMenu);
    fadeOut(starFallIntro);
    fadeIn(chap1);
}) 

 function fadeOut(element) {
    element.style.opacity = 0;
    setTimeout(() => {
      element.classList.add("hidden")
    }, 2000);
}
function fadeIn(element) {
  element.style.opacity = 1;
  setTimeout(() => {
    element.classList.remove("hidden")
  }, 2000);
}