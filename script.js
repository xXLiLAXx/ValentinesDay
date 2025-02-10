// Select elements
const heart = document.getElementById("heart");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const screenEffect = document.getElementById("screen-effect");

// "Yes" Button: Make the heart fly (optional functionality)
yesButton.addEventListener("click", () => {
  heart.classList.add("fly");
});

// "No" Button: Make the heart pop and trigger red screen effect
noButton.addEventListener("click", () => {
  heart.classList.add("pop");

  // Trigger the screen red effect
  screenEffect.style.animation = "screenRed 1s ease-out forwards";

  // Remove the heart after the pop animation ends
  setTimeout(() => {
    heart.style.display = "none";
  }, 500); // Match the pop animation duration
});
