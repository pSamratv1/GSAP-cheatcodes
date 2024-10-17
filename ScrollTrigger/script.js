// gsap.from("#page1 #box", {
//   scale: 0,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
// });
// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });

gsap.to("#page2 h1", {
  transform: "translate(-188%)",
  duration: 2,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    scrub: 3,
    pin: true,
  },
});
