document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Panelist</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Grandstander:wght@100&display=swap" rel="stylesheet">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

	<script>
		// render only the body background and nothing else for 2 seconds
		document.body.style.visibility = "hidden";
		// sleep 2 seconds
		setTimeout(() => {
			document.body.style.visibility = "visible";
		}, 2000);

		// then get class one and two with query and make visible
		document.querySelector(".one").style.visibility = "visible";
		document.querySelector(".two").style.visibility = "visible";
	</script>
	
	<style>
		/* Add styles for background image */

		.header-section {
			background: linear-gradient(to right, #00FFF0, #03C60B);
			color: transparent;
			-webkit-background-clip: text;
			background-clip: text;
			padding: 40px;
			margin-bottom: 20px;
            text-align: center;
            font-size: 80px;
            font-family: 'DM Sans';
		}

		@media (max-width: 768px) {
			.header-section {
				padding: 50px 0;
			}
		}

		/* Add styles for image and text */
		.panelist-image {
            max-width: 60%;
			height: auto;
			display: block;
			margin: 0 auto;
			margin-bottom: 15px;
			border-radius: 8px;
		}

		.panelist-name {
            text-align: center;
			font-size: 30px;
			color: #fff;
			font-family: 'Grandstander';
		}
		.one {
			height: 80vh;
			width: 15vw;
			position: absolute;
			top: 10vh;
			background-color: #70262688;
			filter: blur(80px);
			border-radius: 500px;
			transform: translateX(-150px);
			/* animation to fade it in from the left */
			animation: fadein-left 2s;
		}

		.two {
			height: 80vh;
			width: 15vw;
			position: absolute;
			right: 0;
			top: 10vh;
			/* transform: translateX(750%); */
			background-color: #70262688;
			filter: blur(80px);
			border-radius: 500px;
			transform: translateX(150px);
			animation: fadein-right 2s;
			/* transform: rotate(180deg); */
		}

		/* fadein animation keyframes */
		@keyframes fadein-left {
			from {
				opacity: 0;
				transform: translateX(-250px);
			}

			to {
				opacity: 1;
				transform: translateX(-150px);
			}
		}

		@keyframes fadein-right {
			from {
				opacity: 0;
				transform: translateX(250px);
			}

			to {
				opacity: 1;
				transform: translateX(150px);
			}
		}
	</style>
</head>
<body>
	<header class="header-section">
		<div class="panel-heading">Panelists</div>
	</header>
	<div class="container">
		<div class="row" id="panelist-row">
			<div class="col-md-6">
				<img src="placeholder.png" alt="Image 1" class="panelist-image" hidden>
				<h2 class="panelist-name" hidden>Panelist 1</h2>
			</div>
			<div class="col-md-6">
				<img src="placeholder.png" alt="Image 2" class="panelist-image" hidden>
				<h2 class="panelist-name" hidden>Panelist 2</h2>
			</div>
		</div>
	</div>
	<div class="one"></div>
	<div class="two"></div>

	<!-- Bootstrap JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script>
		setTimeout(function() {
		  document.querySelectorAll('.panelist-image').forEach(function(element) {
			element.removeAttribute('hidden');
		  });
		  setTimeout(function() {
			document.querySelectorAll('.panelist-name').forEach(function(element) {
				element.removeAttribute('hidden');
			});
		}, 2700);
		}, 2500);
	  </script>
	  
</body>
</html>
`)