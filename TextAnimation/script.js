function brokenText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splitedText = h1Text.split("");

  var currentText = "";
  splitedText.forEach((ele) => {
    currentText += `<span class="a">${ele}</span>`;
  });

  h1.innerHTML = currentText;
}
brokenText();
gsap.from("h1 span", {
  y: 200,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
});
