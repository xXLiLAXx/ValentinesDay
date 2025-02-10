// Select elements
const heart = document.getElementById("heart");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const screenEffect = document.getElementById("screen-effect");

// "Yes" Button: Make the heart fly and do a confetti effect
yesButton.addEventListener("click", () => {
    heart.classList.add("fly");
    heart.classList.remove("pop");
    createConfetti(); // Optional: Add a confetti function if needed
});

// "No" Button: Heart blows up and triggers full-screen effect
noButton.addEventListener("click", () => {
    heart.classList.add("pop");

    // Trigger full-screen effect
    screenEffect.style.animation = "screenFlash 1s ease forwards";

    // Remove the heart after animation ends
    setTimeout(() => {
        heart.style.display = "none";
    }, 500);
});
