gsap.from(".blur-element1", {
  duration: 1.5,
  opacity: 0
})

gsap.from(".blur-element2", {
  duration: 1.5,
  opacity: 0
})

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

