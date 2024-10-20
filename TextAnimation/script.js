function brokenText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splitedText = h1Text.split("");
  var stringLength = splitedText.length;

  var halfLength = Math.floor(stringLength / 2);

  var currentText = "";
  splitedText.forEach(function (ele, idx) {
    if (idx < halfLength) {
      currentText += `<span class="a">${ele}</span>`;
    } else currentText += `<span class="b">${ele}</span>`;
  });

  h1.innerHTML = currentText;
}
brokenText();
gsap.from("h1 .a", {
  y: 200,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
  scrub: 2,
});
gsap.from("h1 .b", {
  y: 200,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.15,
  scrub: 2,
});
