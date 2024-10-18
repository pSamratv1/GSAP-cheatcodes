var path = `M 100 200 Q 818 200 1536 200`;
const initialPath = `M 100 200 Q 818 200 1536 200`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 100 200 Q ${dets.x} ${dets.y} 1536 200`;
  gsap.to("#string svg path", {
    attr: { d: path },
    duration: 0.2,
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.7,
    ease: "elastic.out(1,0.2)",
  });
});
