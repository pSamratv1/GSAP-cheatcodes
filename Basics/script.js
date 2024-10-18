gsap.to("#box1", {
  x: 1450, // to move to element to defined pixel in x-direction.
  duration: 2, // duration to move the element into defined pixel (in second).
  delay: 1, // to create the delay to start the anomations.
  rotate: 360, // to give the rotation of the element (in degree).
  backgroundColor: "blue", // we can use the css properties but in camelCase.
  borderRadius: "50%",
  scale: 3,
  // repeat: -1,
  // yoyo:true,
});
gsap.to("#box2", {
  x: 1000, // to move to element to defined pixel in x-direction.
  y: 110, // to move to element to defined pixel in y-direction.
  duration: 2, // duration to move the element into defined pixel (in second).
  delay: 1, // to create the delay to start the anomations.
  repeat: 0, // to repeat the animation how many time more 1 means the animations runs twice of time. -1 means infinite
  borderRadius: 10,
});
gsap.from("h1", {
  // color:"red",  // provides color to the h1 element
  duration: 1,
  delay: 1,
  opacity: 0, // opacity refers to the value of visibility 1 and 0
  y: 30,
  stagger: 0.3, // runs every element with same name it the queue order with delay (on second)
});

// Asynchronous Way of timelining
gsap.to("#boxes1", {
  x: 1200,
  duration: 1,
  delay: 1,
  rotate: 270,
  borderRadius: 10,
});
gsap.to("#boxes2", {
  x: 1300,
  duration: 1,
  delay: 1.75,
  rotate: 270,
  borderRadius: 10,
});
gsap.to("#boxes3", {
  x: 1400,
  duration: 1,
  delay: 2.5,
  rotate: 270,
  borderRadius: 10,
});

// synchronous timelining using GSAP Timeline
var tl = gsap.timeline();

tl.to("#boxes1", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 270,
  borderRadius: 10,
});
tl.to("#boxes2", {
  x: 1300,
  duration: 2,
  rotate: 270,
  borderRadius: 10,
});
tl.to("#boxes3", {
  x: 1400,
  duration: 2,
  rotate: 270,
  borderRadius: 10,
});

var navtl = gsap.timeline();
navtl.from("#nav #title", {
  y: -60,
  duration: 1.3,
  delay: 1,
  opacity: 0,
});
navtl.from("#part2", {
  y: -60,
  duration: 2,
  opacity: 0,
});
