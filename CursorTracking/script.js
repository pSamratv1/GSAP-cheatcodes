var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var ball = document.querySelector("#ball");
var imageDiv

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,

    ease: "back.out",
  });
});
ball.addEventListener("mousemove", function (dets) {
  gsap.to(ball, {
    y: 510,
    duration: 1,
    ease: "bounce.out",
  });
});
