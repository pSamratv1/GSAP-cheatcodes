var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var ball = document.querySelector("#ball");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,

    ease: "back.out",
  });
});
// 9867675004
imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 3.5,
  });
});
imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";

  gsap.to(cursor, {
    scale: 1,
  });
});
ball.addEventListener("mousemove", function (dets) {
  gsap.to(ball, {
    y: 510,
    duration: 1,
    ease: "bounce.out",
  });
});
