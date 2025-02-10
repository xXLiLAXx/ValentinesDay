// Select the heart, buttons, and confetti container
const heart = document.getElementById("heart");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const confettiContainer = document.getElementById("confetti-container");
const screenFlash = document.getElementById("screen-flash");

// "Yes" Button: Make the heart beat, fly, and confetti rain
yesButton.addEventListener("click", () => {
  heart.classList.add("fly");
  heart.classList.remove("pop");
  createConfetti();
});

// "No" Button: Make the heart pop, disappear, and trigger a screen flash
noButton.addEventListener("click", () => {
  heart.classList.add("pop");
  heart.classList.remove("fly");

  // Trigger full-screen flash
  screenFlash.style.animation = "screenFlash 0.5s ease forwards";

  // Remove the heart after animation
  setTimeout(() => {
    heart.style.display = "none";
  }, 300);
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
    confetti.style.backgroundColor = getRandomColor(); // Optional: random colors

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// Function to generate random colors (optional for multicolored hearts)
function getRandomColor() {
  const colors = ["#ff6f91", "#ff8fa3", "#ffc1cc", "#ff4d6d", "#d6336c"];
  return colors[Math.floor(Math.random() * colors.length)];
}
