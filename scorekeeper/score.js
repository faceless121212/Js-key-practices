const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const winningScoreSelect = document.querySelector("#plato");

let p1Scor = 0;
let winningScore = 5;
let p2Scor = 0;
let isGamepver = false;
p1Button.addEventListener("click", function () {
  if (!isGamepver) {
    p1Scor += 1;
    if (p1Scor === winningScore) {
      isGamepver = true;
    }
    p1Score.textContent = p1Scor;
  }
});
p2Button.addEventListener("click", function () {
  if (!isGamepver) {
    p2Scor += 1;
    if (p2Scor === winningScore) {
      isGamepver = true;
      p1Score.classList.add("winner");
      p2Score.classList.add("loser");
    }
    p2Score.textContent = p2Scor;
  }
});
resetButton.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
function reset() {
  p1Score.classList.remove("winner", "loser");
  p2Score.classList.remove("Loser", "Winner");
  isGamepver = false;
  p1Scor = 0;
  p2Scor = 0;
  p1Score.textContent = 0;
  p2Score.textContent = 0;
}
