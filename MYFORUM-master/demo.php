<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>MyForum</title>
	<link rel="stylesheet" type="text/css" href="forumsf.css">
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
	<script type="text/javascript">
		function tabs(num){
			if(num){
				document.getElementById("up_container").style["display"]="none";
				document.getElementById("in_container").style["display"]="block";
				document.getElementById("signin").style["border-bottom"]="4px solid #0d99d7";
				document.getElementById("signup").style["border-bottom"]="none";
			}
			else{
				document.getElementById("up_container").style["display"]="block";
				document.getElementById("in_container").style["display"]="none";
				document.getElementById("signup").style["border-bottom"]="4px solid #0d99d7";
				document.getElementById("signin").style["border-bottom"]="none";
			}
		}

	</script>
</head>
<body>
	<img src="image.png" class="girl">
	<div class="layout_container">
		<div class="button_container">
			<button id="signup" onclick="tabs(0)">Sign Up</button>
			<button id="signin" onclick="tabs(1)">Sign In</button>
		</div>

		<div id="up_container">
			<form action="registration.php" method="post" class="up_form">

				<div class="n_container">
					<div class="up up1">
						<input type="text" name="name" placeholder="Name" required="required">
					</div>
				
					<div class="up">
						<input type="text" name="username" placeholder="Username" required="required">
					</div>
				</div>

				<div class="p_container">
					<div class="up up1">
						<input type="password" name="password" placeholder="Password" required="required">
					</div>
				
					<div class="up">
						<input type="password" name="cpassword" placeholder="Confirm Password" required="required">
					</div>
					
				</div>


				<div class="ua_container">

					<div class="ad">
						<input type="radio" style="color: #0d99d7; opacity: 0.6; cursor: pointer;" id="ad" name="type" value="Admin" required="required">
						<label for="ad" style="color: rgb(153, 153, 153); cursor: pointer;">Admin</label>
					</div>

					<div class="us">
						<input type="radio" style="color: #0d99d7; opacity: 0.6; cursor: pointer;" id="us" name="type" value="User" required="required">
						<label for="us" style="color: rgb(153, 153, 153); cursor: pointer;">User</label>
					</div>
			
				</div>

				<div class="submit">
					<input type="submit" name="submit" value="Register">
				</div>

			</form>
		</div>

		<div id="in_container">
			<form action="validation.php" method="post" class=""in_form;>
				<div class="n_container">
					<input id="uname" type="text" name="uname" placeholder="Username" required="required">
				</div>

				<div class="p_container">
					
					<input id="pass" type="password" name="password" placeholder="Password" required="required">
					
				</div>

				<div class="ua_container">

					<div class="ad">
						<input type="radio" style="color: #0d99d7; opacity: 0.6; cursor: pointer;" id="ad1" name="type" value="Admin" required="required">
						<label for="ad1" style="color: rgb(153, 153, 153); cursor: pointer;">Admin</label>
					</div>

					<div class="us">
						<input type="radio" style="color: #0d99d7; opacity: 0.6; cursor: pointer;" id="us1" name="type" value="User" required="required">
						<label for="us1" style="color: rgb(153, 153, 153); cursor: pointer;">User</label>
					</div>
			
				</div>

				<div class="submit">
					<input type="submit" name="submit" value="Log In">
				</div>

			</form>
		</div>
	</div>
	
		

</body>
</html>