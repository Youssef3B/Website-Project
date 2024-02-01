// let slide = document.getElementById("slide");
// let menuSlide = document.getElementsByClassName("menu-slide2")[0];
// let isOppen = false;

let slide = document.getElementById("slide");
let menuSlide = document.getElementsByClassName("menu-slide2")[0];
let shop = document.getElementById("shop");
let cardSlide = document.getElementsByClassName("card-slide2")[0];

slide.addEventListener("click", () => {
  if (menuSlide) {
    menuSlide.classList.toggle("menu-slide");
    menuSlide.classList.toggle("menu-slide2");
    console.log(
      menuSlide.classList.contains("menu-slide") ? "click" : "Cancel"
    );
  }
});
