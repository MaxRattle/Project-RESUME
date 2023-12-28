document.querySelector(".burger__icon").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav__menu").classList.toggle("open");
});


// document.querySelector(".nav__menu").addEventListener("click", function () {
//   this.classList.toggle("active");
//   document.querySelector(".nav__menu").classList.toggle("open");
//   if (this.classList.contains("close")) {
//     document.querySelector(".nav__menu").classList.remove("close");
//     document.querySelector(".nav__menu").classList.add("open");
//   } else {
//     document.querySelector(".nav__menu").classList.remove("open");
//     document.querySelector(".nav__menu").classList.add("close");
//   }
// });
//додумайся сам жальше