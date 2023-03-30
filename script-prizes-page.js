// Animation for two red blobs on both side
gsap.from(".blur-element1", {
  duration: 1.5,
  opacity: 0
})

gsap.from(".blur-element2", {
  duration: 1.5,
  opacity: 0
})

// Prizes animation
gsap.from(".prizes-heading", {
  duration: 1,
  opacity: 0,
  y: '2vw'
})

// Boxes animation
gsap.from(".first-box", {
  duration: 2,
  opacity: 0,
  ease: "back.out(10)",
  y: '2vh',
})

gsap.from(".second-box", {
  duration: 2,
  opacity: 0,
  ease: "back.out(10)",
  y: '2vh',
  delay: 0.1
})

gsap.from(".third-box", {
  duration: 2,
  opacity: 0,
  ease: "back.out(10)",
  y: '2vh',
  delay: 0.2
})

gsap.from(".fourth-box", {
  duration: 2,
  opacity: 0,
  ease: "back.out(10)",
  y: '2vh',
  delay: 0.3
})
