const buttons = document.querySelectorAll(".button");

function log(e, button) {
  if (e.target.id === button.id) {
    document.querySelector("body").style.backgroundColor = button.id;
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", (e) => log(e, button));
});
