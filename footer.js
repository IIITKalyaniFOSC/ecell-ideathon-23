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
      <hr clas="footer-horizontal-line">
      <div class="footer-section">


        <div class="footer-elements" data-aos="fade-up" data-aos-duration="1000">



          <p class="footer-paragraph"> Envision is the entrepreneurship cell of Indian Institute of Information Technology of
            Kalyani.
          </p>

        </div>

        <div class="footer-elements" data-aos="fade-up" data-aos-duration="1000">

          <h4 class="footer-heading">Envision</h4>

          <ul class="footer-unorder-list">

            <li><a href="#" class="footer-link">Ecell</a></li>

            <li><a href="http://iiitkalyani.ac.in/" class="footer-link"> IIIT Kalyani</a></li>


            <li><a href="mailto: iic@iiitkalyani.ac.in" class="footer-link"><i class="fa fa-envelope"></i> Mail Us</a></li>

          </ul>

        </div>
        <div class="footer-elements" data-aos="fade-up" data-aos-duration="1000">

          <h4 class="footer-heading">Links</h4>

          <ul class="footer-unorder-list">

            <li class="footer-list"><a href="#home" class="footer-link"></i> Home</a></li>

            <li class="footer-list"><a href="#about" class="footer-link"></i> About</a></li>


            <li class="footer-list"><a href="#track" class="footer-link"></i> Track</a></li>
            <li class="footer-list"><a href="#timeline" class="footer-link"></i> Timeline</a></li>
            <li class="footer-list"><a href="#track" class="footer-link"></i> Team</a></li>


          </ul>

        </div>

        <div class="footer-elements" data-aos="fade-up" data-aos-duration="1000">

          <h4 class="footer-heading">Connect with Us</h4>

          <ul class="footer-social-icons">





            <li class="footer-list"><a href="https://www.linkedin.com/in/envision-iiit-kalyani-7b5194203" class="footer-link"><i
                  class="fa fa-linkedin "></i></a></li>



            <li class="footer-list"><a href="https://instagram.com/ecell_iiitk" class="footer-link"><i
                  class="fa fa-instagram"></i></a></li>

          </ul>

        </div>
        <div class="footer-elements">
          <ul class="footer-logo" data-aos="fade-up" data-aos="fade-up" data-aos-duration="1000">
            <li class="footer-list"><img src="img/ECellLogo.png" class="footer-logo"></li>
          </ul>

        </div>

      </div>

      <hr class="footer-horizontal1-line">

      <p class="footer-copyright">E-Cell | @ 2023 IIIT Kalyani- All Rights Reserved</p>

    </footer>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
  </div>
</body>
</html>
`);
