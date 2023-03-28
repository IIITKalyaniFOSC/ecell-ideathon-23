// AOS.init()

// to do
// run all this code if desktop

// hide section and nav and set opacity 0
document.querySelector("section").style.visibility = "hidden";
document.querySelector("nav").style.visibility = "hidden";
// document.querySelector("section").style.opacity = "0";
// document.querySelector("nav").style.opacity = "0";


// sleep 2 seconds
setTimeout(() => {
    // document.body.style.visibility = "visible";
}, 2000);

// then get class one and two with query and make visible
document.querySelector(".one").style.visibility = "visible";
document.querySelector(".two").style.visibility = "visible";


// delay DOM rendering by 2 seconds
setTimeout(() => {
    // show section and nav
    document.querySelector("section").style.visibility = "visible";
    document.querySelector("nav").style.visibility = "visible";
    // animate opacity to 100% over 2 seconds
    document.querySelector("section").animate([
        // keyframes
        { opacity: '0' },
        { opacity: '1' }
    ], {
        // timing options
        duration: 2000,
        iterations: 1
    });
    document.querySelector("nav").animate([
        // keyframes
        { opacity: '0' },
        { opacity: '1' }
    ], {
        // timing options
        duration: 2000,
        iterations: 1
    });
    // animate nav from the top to current position with a poppig effect
    document.querySelector("nav").animate([
        // keyframes
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(0%)' }
    ], {
        // timing options
        duration: 2000,
        iterations: 1,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });
}, 2000);

// set transition ease 1s to all button tags as doing it in css kills the previous animation
// document.querySelectorAll("button").forEach((button) => {
//     button.style.transition = "ease 1s";
// });

// get h2 tag
const h2 = document.querySelector('h2')
// get mouse X position continously
document.addEventListener('mousemove', (e) => {
    // get mouse X position
    const x = e.clientX;
    // get total width
    const width = window.innerWidth;
    // get mouse X position in percentage
    const y = (x - (width / 2)) / width * 100;
    // moving skew from -20 to 20 degrees
    const z = y * 0.2;
    // set skew property transform style of h2 as x
    h2.style.transform = `skewX(${z}deg)`;
});

