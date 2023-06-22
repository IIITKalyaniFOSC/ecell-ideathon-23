document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Team</title>

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
		.team-image1 {
			max-width: 60%;
			height: auto;
			display: block;
			margin: 0 auto;
			margin-bottom: 15px;
			border-radius: 8px;
		}

		.team-image2 {
			max-width: 40%;
			height: auto;
			display: block;
			margin: 0 auto;
			margin-bottom: 15px;
			border-radius: 8px;
		}

		@media (max-width: 768px) {
			.team-image2 {
				max-width: 60%;
				height: auto;
				display: block;
				margin: 0 auto;
				margin-bottom: 15px;
				border-radius: 8px;
			}
		}

		.team-name {
			text-align: center;
			font-size: 30px;
			color: #fff;
			font-family: 'Grandstander';
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
		<div class="team-heading">Teams</div>
	</header>
	<div class="container">
		<div class="row" id="team-row">
			<div class="col-md-4">
				<img src="placeholder.png" alt="Image 1" class="team-image1" hidden>
				<h2 class="team-name" hidden>Bhaskar Metiya</h2>
			</div>
			<div class="col-md-4">
				<img src="img/Iman_Kalyan_Chakraborty_Image.jpg" alt="Image 2" class="team-image1" hidden>
				<h2 class="team-name" hidden>Iman Kalyan Chakraborty</h2>
			</div>
			<div class="col-md-4">
				<img src="placeholder.png" alt="Image 2" class="team-image1" hidden>
				<h2 class="team-name" hidden>Satadru Halder</h2>
			</div>
		</div>
		<div class="row" id="team-row">
			<div class="col-md-6">
				<img src="placeholder.png" alt="Image 4" class="team-image2" hidden>
				<h2 class="team-name" hidden>Shashwat Dwivedi</h2>
			</div>
			<div class="col-md-6">
				<img src="placeholder.png" alt="Image 5" class="team-image2" hidden>
				<h2 class="team-name" hidden>Subroto Banerjee</h2>
			</div>
		</div>
	</div>
	<div class="one"></div>
	<div class="two"></div>

	<!-- Bootstrap JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script>
		setTimeout(function () {
			document.querySelectorAll('.team-image1').forEach(function (element) {
				element.removeAttribute('hidden');
			});
		}, 2500);
		setTimeout(function () {
			document.querySelectorAll('.team-image2').forEach(function (element) {
				element.removeAttribute('hidden');
			});
		}, 2500);
		setTimeout(function () {
				document.querySelectorAll('.team-name').forEach(function (element) {
					element.removeAttribute('hidden');
				});
			}, 2700);
	</script>

</body>

</html>
`);
