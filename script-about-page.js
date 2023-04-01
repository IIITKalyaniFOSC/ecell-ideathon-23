// Animation for two red blobs on both side
gsap.from(".blur-element1", {
  duration: 1.5,
  opacity: 0
})

gsap.from(".blur-element2", {
  duration: 1.5,
  opacity: 0
})

// Animations for elements inside interior-box
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
    duration: 1,
    delay: delay,
    opacity: 1,
    y: "0%",
    ease: "power4.out"
  });
  delay += 0.02;
});

gsap.from(".about-paragraph", {
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

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const { beta, gamma } = event;

  const xRotation = beta ? beta / 2 * 3 : 0;
  const yRotation = gamma ? gamma / 2 * 3: 0;

  for (let i = 0; i < tiltingDivs.length; i++) {
    tiltingDivs[i].style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  }
}

