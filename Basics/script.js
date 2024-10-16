gsap.to("#box1",{
    x: 1450,     // to move to element to defined pixel in x-direction.
    duration: 2, // duration to move the element into defined pixel (in second).
    delay: 1,    // to create the delay to start the anomations.
    rotate: 360, // to give the rotation of the element (in degree).
    backgroundColor:"blue", // we can use the css properties but in camelCase.
    borderRadius: "50%",
    scale: 3,
})
gsap.to("#box2",{
    x: 1000,     // to move to element to defined pixel in x-direction.
    y: 100,      // to move to element to defined pixel in y-direction.
    duration: 2, // duration to move the element into defined pixel (in second).
    delay: 1,    // to create the delay to start the anomations.
    repeat:0,    // to repeat the animation how many time more 1 means the animations runs twice of time. -1 means infinite
    borderRadius: 10

     
})
gsap.from("h1",{
    // color:"red",  // provides color to the h1 element
    duration:1,
    delay:1,
    opacity: 0,     // opacity refers to the value of visibility 1 and 0
    y: 30,
    stagger:0.6,    // runs every element with same name it the queue order with delay (on second)
})