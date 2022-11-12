let homeScoreBtnOne = document.getElementById("home--score--btn1");
let homeScoreBtnTwo = document.getElementById("home--score--btn2");
let homeScoreBtnThree = document.getElementById("home--score--btn3");
let guestScoreBtnOne = document.getElementById("guest--score--btn1");
let guestScoreBtnTwo = document.getElementById("guest--score--btn2");
let guestScoreBtnThree = document.getElementById("guest--score--btn3");
let homeStoreEl = document.getElementById("home--score");
let guestStoreEl = document.getElementById("guest--score");
let homeScore = 0;
function incrementOne() {
  homeScore += 1;
  homeStoreEl.textContent = homeScore;
}
function incrementTwo() {
  homeScore += 2;
  homeStoreEl.textContent = homeScore;
}
function incrementThree() {
  homeScore += 3;
  homeStoreEl.textContent = homeScore;
}
let guestScore = 0;
function incrementgOne() {
  guestScore += 1;
  guestStoreEl.textContent = guestScore;
}
function incrementgTwo() {
  guestScore += 2;
  guestStoreEl.textContent = guestScore;
}
function incrementgThree() {
  guestScore += 3;
  guestStoreEl.textContent = guestScore;
}
function reset() {
  homeStoreEl.textContent = 0;
  guestStoreEl.textContent = 0;
  homeScore = 0;
  guestScore = 0;
}
