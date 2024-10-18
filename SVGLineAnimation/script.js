var path = `M 10 200 Q 818 200 1626 200`;
const initialPath = `M 10 200 Q 818 200 1626 200`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 200 Q ${dets.x} ${dets.y} 1626 200`;
  gsap.to("#string svg path", {
    attr: { d: path },
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: initialPath },
  });
});
