let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector("header");

let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.25 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = 0.1 + "px";
  text.style.marginRight = value * 3 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});