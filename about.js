document.write(`

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=DM+Sans&family=Inter&family=K2D&display=swap");
    </style>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="style-about-page.css">
    <link rel="stylesheet" href="style-prizes-page.css">
    <script>
      // render only the body background and nothing else fro 2 seconds
      document.body.style.visibility = "hidden";
      // sleep 2 seconds
      setTimeout(() => {
        document.body.style.visibility = "visible";
      }, 2000);

      // then get class one and two with query and make visible
      document.querySelector(".one").style.visibility = "visible";
      document.querySelector(".two").style.visibility = "visible";
    </script>
  </head>
  <body>
    <div class="full-about-page" id="About">
      <div class="interior-box">
        <div class="about-heading">
          <p>About the Event</p>
        </div>  

        <div class="about-paragraph">
          <p>Ideathon '23 by Envision, IIIT Kalyani is an effort to nudge candidates to come up with innovative solutions to some of the most imperative challenges of our time. Participants work across various majors are encouraged to form a team and use design thinking and innovative learning practices to ideate and collaborate on possible solutions. There are various tracks which are elaborated in detail below.</p>
        </div>

        <div class="pink1">
          <img id="pnk1" src="img/Screenshot 2023-03-26 at 19-24-13 color picker - Google Search.png" alt="pink">
        </div>

        <div class="pink2">
          <img id="pnk2" src="img/Screenshot 2023-03-26 at 19-24-13 color picker - Google Search.png" alt="pink">
        </div>
      </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
      </div>
      <div class="full-prizes-page">
      <div class="prizes-heading">
        <p><a id="Prizes">Prizes</a></p>
      </div>

      <div class="boxes">
        <div class="first-box" translate="none">
          <p id="win">Winner</p>

          <img id="trophy" src="img/trophy-material-7-svgrepo-com.svg" alt="trophy">

          <div class="winner">
            <img id="rupee1" src="img/rupee-svgrepo-com(1).svg" alt="rupee-symbol">
            <p>8000</p>
          </div>
        </div>

        <div class="second-box">
          <p id="win1ru">1st Runner Up</p>

          <img id="trophy" src="img/trophy-material-7-svgrepo-com.svg" alt="trophy">

          <div class="oneru">
            <img id="rupee1" src="img/rupee-svgrepo-com(1).svg" alt="rupee-symbol">
            <p>5000</p>
          </div>
        </div>

        <div class="third-box">
          <p id="win2ru">2nd Runner Up</p>

          <img id="trophy" src="img/trophy-material-7-svgrepo-com.svg" alt="trophy">

          <div class="tworu">
            <img id="rupee1" src="img/rupee-svgrepo-com(1).svg" alt="rupee-symbol">
            <p>4000</p>
          </div>
        </div>

        <div class="fourth-box">
          <p id="win">Special</p>

          <img id="trophy" src="img/trophy-material-7-svgrepo-com.svg" alt="trophy">

          <div class="special">
            <img id="rupee1" src="img/rupee-svgrepo-com(1).svg" alt="rupee-symbol">
            <p>3000</p>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
    </div>
      <script src="index.js"></script>
      <script src="script-about-page.js"></script>
      <script src="script-prizes-page.js"></script>
    </body>
</html>
`)