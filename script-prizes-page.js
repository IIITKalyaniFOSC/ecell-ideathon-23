// Prizes animation
gsap.from(".prizes-heading", {
    scrollTrigger: {
    trigger: ".prizes-heading",
    toggleActions: "restart none none reverse"
  },
    duration: 1,
    opacity: 0,
    y: '2vw'
  })
  
  // Boxes animation
  gsap.from(".first-box", {
    scrollTrigger: {
    trigger: ".first-box",
    toggleActions: "restart none none reverse"
  },
    duration: 2,
    opacity: 0,
    ease: "back.out(10)",
    y: '2vh',
  })
  
  gsap.from(".second-box", {
    scrollTrigger: {
    trigger: ".second-box",
    toggleActions: "restart none none reverse"
  },
    duration: 2,
    opacity: 0,
    ease: "back.out(10)",
    y: '2vh',
    delay: 0.1
  })
  
  gsap.from(".third-box", {
    scrollTrigger: {
    trigger: ".third-box",
    toggleActions: "restart none none reverse"
  },
    duration: 2,
    opacity: 0,
    ease: "back.out(10)",
    y: '2vh',
    delay: 0.2
  })
  
  gsap.from(".fourth-box", {
    scrollTrigger: {
    trigger: ".fourth-box",
    toggleActions: "restart none none reverse"
  },
    duration: 2,
    opacity: 0,
    ease: "back.out(10)",
    y: '2vh',
    delay: 0.3
  })
