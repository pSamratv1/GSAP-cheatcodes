var menu = document.querySelector("#menu_opener");
var close = document.querySelector("#menu_close");

menu.addEventListener("click", function () {
  tl.play();
});
close.addEventListener("click", function () {
  tl.reverse();
});

var tl = gsap.timeline();

tl.to("#side_menu", {
  right: 0,
  duration: 0.8,
});
tl.from("#menu_title", {
  opacity: 0,
  duration: 0.3,
});
tl.from("#menu_title img", {
  opacity: 0,
  x: -1200,
  y: -100,
  duration: 2,
  scrub: 2,
});
tl.from("#side_menu #menu", {
  x: 200,
  opacity: 0,
  stagger: 0.3,
});
tl.from("#side_menu i", {
  opacity: 0,
});
tl.pause();
