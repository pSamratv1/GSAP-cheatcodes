var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var ball = document.querySelector("#ball");
var imageDiv = document.querySelector("#image");
var imageText = document.querySelector("#textbelow");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 3.5,
    backgroundColor: "#fffefe7c",
  });
  gsap.to(imageText, { y: 1, duration: 0.3 });
});
imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";

  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
  gsap.to(imageText, {
    y: -60,
    duration: 0.3,
  });
});
ball.addEventListener("mousemove", function (dets) {
  gsap.to(ball, {
    y: 510,
    duration: 1,
    ease: "bounce.out",
  });
});
