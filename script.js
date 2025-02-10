// Select elements
const heart = document.getElementById("heart");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const screenEffect = document.getElementById("screen-effect");
const confettiContainer = document.getElementById("confetti-container");

// "Yes" Button: Make the heart fly and trigger confetti hearts
yesButton.addEventListener("click", () => {
  heart.classList.add("fly");
  heart.classList.remove("pop");
  createConfetti();
});

// "No" Button: Make the heart pop and make the screen red permanently
noButton.addEventListener("click", () => {
  heart.classList.add("pop");
  heart.classList.remove("fly");

  // Turn the screen red and keep it red
  setTimeout(() => {
    screenEffect.classList.add("red");
  }, 500); // Wait for the pop animation to finish

  // Hide the heart after the pop animation
  setTimeout(() => {
    heart.style.display = "none";
  }, 500);
});

// Function to create confetti hearts
function createConfetti() {
  const numberOfHearts = 50; // Number of hearts
  for (let i = 0; i < numberOfHearts; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Randomize position and animation delay
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random() * 1}s`;

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 3000); // Matches animation duration
  }
}
