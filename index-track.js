// FUNCTION FOR ONCLICK FLIP
var cards = document.querySelectorAll('.mob-card');
[...cards].forEach((card)=>{
    card.addEventListener('click',function(){
        card.classList.toggle('is-flipped');
    })
})