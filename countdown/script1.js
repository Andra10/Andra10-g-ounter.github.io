const theButton = document.querySelector(".btn");
const textButton = document.querySelector(".btn-text");

theButton.addEventListener("click", () => {
  theButton.classList.add("btn--loading");
});

theButton.addEventListener("click", function onclick() {
  location.href = "file.html";
});

textButton.addEventListener("click", function onclick() {
  textButton.style.color = " #585BE3";
});
