// Select elements
const heart = document.getElementById("heart");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const screenEffect = document.getElementById("screen-effect");
const confettiContainer = document.getElementById("confetti-container");

// "Yes" Button: Make the heart fly and trigger confetti hearts
yesButton.addEventListener("click", () => {
  heart.classList.remove("pop"); // Ensure "pop" is removed
  heart.classList.add("fly");

  // Trigger confetti hearts
  createConfetti();
});

// "No" Button: Make the heart pop and make the screen red
noButton.addEventListener("click", () => {
  heart.classList.remove("fly"); // Ensure "fly" is removed
  heart.classList.add("pop");

  // Make the screen permanently red
  screenEffect.classList.add("red");

  // Remove the heart after the pop animation ends
  setTimeout(() => {
    heart.style.display = "none";
  }, 500); // Match the pop animation duration
});

// Function to create confetti hearts
function createConfetti() {
  const numberOfHearts = 50; // Number of confetti hearts
  for (let i = 0; i < numberOfHearts; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Randomize position and animation delay
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.backgroundColor = getRandomColor();

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// Function to generate random colors for confetti
function getRandomColor() {
  const colors = ["#ff6f91", "#ff8fa3", "#ffc1cc", "#ff4d6d", "#d6336c"];
  return colors[Math.floor(Math.random() * colors.length)];
}
