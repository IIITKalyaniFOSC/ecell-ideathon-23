// Animations for elements inside interior-box

gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector(".about-heading");
const letters = text.textContent.split("");

text.textContent = "";
letters.forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;
  text.appendChild(span);
});

const spans = document.querySelectorAll(".about-heading span");
spans.forEach(span => {
  span.style.opacity = 0;
  span.style.transform = "translateY(100%)";
});

let delay = 0;
spans.forEach(span => {
  gsap.to(span, {
    scrollTrigger: {
      trigger: span,
      toggleActions: "restart none none reverse", // Restarts animation when the element enters the screen
      start: "top 100%"
    },
    duration: 1,
    delay: delay,
    opacity: 1,
    y: "0%",
    ease: "power4.out"
  });
  delay += 0.02;
});

gsap.from(".about-paragraph", {
  scrollTrigger: {
    trigger: ".about-paragraph",
    toggleActions: "restart none none reverse",
    start: "top 100%"
  },
  y: '10vh',
  opacity: 0,
  duration: 1
})

// Animations for interior-box

// Twist on hover
const twists = document.querySelectorAll('.interior-box');

twists.forEach((twist) => {
  twist.addEventListener('mousemove', function(event) {
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleX = (centerY - y) / centerY * 15;
    const angleY = (centerX - x) / centerX * 15;
    this.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(100px)`;
  });

  twist.addEventListener('mouseleave', function() {
    this.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
  });
});

// Gyroscope effect on phone
const tiltingDivs = document.getElementsByClassName('interior-box');
const MAX_ROTATION = 25;

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const { beta, gamma } = event;

  // const xRotation = beta ? beta / 2 * 3 : 0;
  const yRotation = gamma ? gamma * 1.0 : 0;

  const clampedRotation = clamp(yRotation, -MAX_ROTATION, MAX_ROTATION);

  for (let i = 0; i < tiltingDivs.length; i++) {
    tiltingDivs[i].style.transform = `rotateY(${clampedRotation}deg)`;
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

