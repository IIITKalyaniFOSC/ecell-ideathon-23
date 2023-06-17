// Prizes animation
gsap.from(".prizes-heading", {
    scrollTrigger: ".prizes-heading",
    duration: 1,
    opacity: 0,
    y: '2vw'
  })
  
  // Boxes animation
  gsap.from(".first-box", {
    scrollTrigger: ".first-box",
    duration: 2,
    opacity: 0,
    ease: "back.out(10)",
    y: '2vh',
  })
  
  gsap.from(".second-box", {
    scrollTrigger: ".second-box",
    duration: 2,
    opacity: 0,
    ease: "back.out(10)",
    y: '2vh',
    delay: 0.1
  })
  
  gsap.from(".third-box", {
    scrollTrigger: ".third-box",
    duration: 2,
    opacity: 0,
    ease: "back.out(10)",
    y: '2vh',
    delay: 0.2
  })
  
  gsap.from(".fourth-box", {
    scrollTrigger: ".fourth-box",
    duration: 2,
    opacity: 0,
    ease: "back.out(10)",
    y: '2vh',
    delay: 0.3
  })