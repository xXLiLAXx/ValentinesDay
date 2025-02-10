/* General Styling */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  text-align: center;
  background-color: #ffecf0;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevents overflowing elements */
}

.container {
  text-align: center;
  width: 90%; /* Ensures content fits smaller screens */
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #d6336c;
}

/* Heart Styling */
.heart {
  width: 100px;
  height: 90px;
  background-color: red;
  position: relative;
  margin: 20px auto;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  clip-path: polygon(50% 0%, 100% 35%, 80% 100%, 50% 80%, 20% 100%, 0% 35%);
  will-change: transform, opacity, top; /* Optimized for animations */
}

.heart.fly {
  animation: beatFly 2s ease-in-out forwards;
}

.heart.pop {
  animation: pop 0.3s forwards;
}

/* Buttons */
.buttons {
  margin-top: 20px;
}

button {
  font-size: 1.2rem;
  padding: 15px 20px; /* Larger padding for touch */
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:focus {
  outline: 3px solid #ff6f91; /* Adds focus outline for accessibility */
}

#yes-btn {
  background-color: #ff6f91;
  color: white;
}

#yes-btn:hover {
  background-color: #d6336c;
}

#no-btn {
  background-color: #ffc1cc;
  color: white;
}

#no-btn:hover {
  background-color: #ff808d;
}

/* Animations */
@keyframes beatFly {
  0%,
  50% {
    transform: scale(1.5) translateY(-20px);
  }
  100% {
    transform: translateY(-100vh); /* Fly off the screen */
    opacity: 0;
  }
}

@keyframes pop {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

/* Confetti Styling */
.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.confetti {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: red;
  clip-path: polygon(50% 0%, 100% 35%, 80% 100%, 50% 80%, 20% 100%, 0% 35%);
  animation: fall 3s linear infinite;
  opacity: 0.8;
}

@keyframes fall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
  }
}
