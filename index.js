
// hide section and nav and set opacity 0
document.querySelector("section").style.visibility = "hidden";
document.querySelector("nav").style.visibility = "hidden";
document.querySelector("section").style.opacity = "0";
document.querySelector("nav").style.opacity = "0";

// sleep 2 seconds
setTimeout(() => {
    // document.body.style.visibility = "visible";
    document.querySelector("section").style.visibility = "visible";
    document.querySelector("nav").style.visibility = "visible";
    document.querySelector("section").style.opacity = "1";
    document.querySelector("nav").style.opacity = "1";
}, 2000);

// then get class one and two with query and make visible
document.querySelector(".main-vector-left").style.visibility = "visible";
document.querySelector(".main-vector-right").style.visibility = "visible";

// on mouse move, skew the sub-heading on the landing page
// get h2 tag
const h2 = document.querySelector('h2')
// get mouse X position continously
document.addEventListener('mousemove', (e) => {
    // get mouse X position
    const x = e.clientX;
    // get total width
    const width = window.innerWidth;
    // get mouse X position in percentage
    // moving skew from -20 to 20 degrees
    const y = ((x - (width / 2))) * 0.2/ width * 100;
    // set skew property transform style of h2 as x
    h2.style.transform = `skewX(${y}deg)`;
});

// if on desktop remove mobile-vector-top and mobile-vector-bottom else remove main-vector-left and main-vector-right
if (window.innerWidth > 768) {
    document.querySelector(".mobile-vector-top").remove();
    document.querySelector(".mobile-vector-bottom").remove();
}
else {
    document.querySelector(".main-vector-left").remove();
    document.querySelector(".main-vector-right").remove();
}

// added this to index.js as this is being used by everyone
AOS.init()