document.write(`
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans&family=Inter&family=K2D&display=swap");
  </style>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
   <link rel="stylesheet" href="style.css" /> 
  <link rel="stylesheet" href="footer.css">
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
<div>
    <footer>
      <hr clas="horizontal-line">
      <div class="footer-section">


        <div class="footer-elements" data-aos="fade-up" data-aos-duration="1000">



          <p class="paragraph"> Envision is the entrepreneurship cell of Indian Institute of Information Technology of
            Kalyani.
          </p>

        </div>

        <div class="footer-elements" data-aos="fade-up" data-aos-duration="1000">

          <h4 class="heading">Envision</h4>

          <ul class="unorder-list">

            <li><a href="#" class="link">Ecell</a></li>

            <li><a href="http://iiitkalyani.ac.in/" class="link"> IIIT Kalyani</a></li>


            <li><a href="mailto: iic@iiitkalyani.ac.in" class="link"><i class="fa fa-envelope"></i> Mail Us</a></li>

          </ul>

        </div>
        <div class="footer-elements" data-aos="fade-up" data-aos-duration="1000">

          <h4 class="heading">Links</h4>

          <ul class="unorder-list">

            <li class="list"><a href="#home" class="link"></i> Home</a></li>

            <li class="list"><a href="#about" class="link"></i> About</a></li>


            <li class="list"><a href="#track" class="link"></i> Track</a></li>
            <li class="list"><a href="#timeline" class="link"></i> Timeline</a></li>
            <li class="list"><a href="#track" class="link"></i> Team</a></li>


          </ul>

        </div>

        <div class="footer-elements" data-aos="fade-up" data-aos-duration="1000">

          <h4 class="heading">Connect with Us</h4>

          <ul class="social-icons">





            <li class="list"><a href="https://www.linkedin.com/in/envision-iiit-kalyani-7b5194203" class="link"><i
                  class="fa fa-linkedin"></i></a></li>



            <li class="list"><a href="https://instagram.com/ecell_iiitk" class="link"><i
                  class="fa fa-instagram"></i></a></li>

          </ul>

        </div>
        <div class="footer-elements">
          <ul class="logo" data-aos="fade-up" data-aos="fade-up" data-aos-duration="1000">
            <li class="list"><img src="img/ECellLogo1.png" class="logo"></li>
          </ul>

        </div>

      </div>

      <hr class="horizontal-line">

      <p class="copyright">E-Cell | @ 2023 IIIT Kalyani- All Rights Reserved</p>

    </footer>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
  </div>
</body>
</html>
`);
