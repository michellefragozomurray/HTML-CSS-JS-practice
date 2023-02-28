const header = document.getElementById("header");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function() {
  header.style.color = getRandomColor();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}