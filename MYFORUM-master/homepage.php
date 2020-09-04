<?php
	session_start();
	if(!isset($_SESSION['name'])){
		header('location:demo.php');
	}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Welcome to MyForum</title>
	<link rel="stylesheet" type="text/css" href="forumsf.css">
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
	<script type="text/javascript" src="forum.js"></script>
	<script src="https://kit.fontawesome.com/208bcfe2f3.js" crossorigin="anonymous"></script>
</head>
<body>
	<div class="header">
		<h1>MyForum</h1>
		<div class="logo_container">
			<p class="logo logo1" onclick="tabcontent1()" onmouseover="addtopic(this)" onmouseout="removetopic(this)">+</p>
			<p class="logo" id="logo" onclick="tabcontent()"><?php $f=$_SESSION['name']; echo strtoupper($f['0']); ?></p>
		</div>
		
	</div>

	<span id="nameuser"><?php echo ucfirst($_SESSION['name'])?></span>
	<div id="timeline">
		<?php

			$connect=mysqli_connect('localhost','id14461671_khullarkushagra','Nilima197210@gmail.com','id14461671_mydb');

			if(!$connect){
				echo "No connection";
			}

			$user=ucfirst($_SESSION['name']);

			$query4 = "select * from registration where name='$user'";
		    $result4 = mysqli_query($connect,$query4);
		    $row4=mysqli_fetch_assoc($result4);

			$query = "select * from topics order by id desc";
			$result = mysqli_query($connect,$query);

			$query2 = "select * from comments order by cmtid desc";
			mysqli_query($connect,$query2);

			while($row=mysqli_fetch_assoc($result)){
				$id=$row["id"];
				$query10="select * from ld where uname='$user' and id='$id'";
				$query10result=mysqli_query($connect,$query10);
				$query10num=mysqli_num_rows($query10result);
				if($query10num==0){
					$qy12="insert into ld values('$id','$user','none')";
					mysqli_query($connect,$qy12);
				}
				echo "<div class='stylepost'>";
				echo "<div class='topics' id=" .$row["id"].">";
				echo "<span class='dp'>" . $row["logo"] . "</span>";
				echo "<h2>" . $row["uname"] . "</h2>";
				echo "<p id = 'topic" .$row["id"]."'>" . $row["topic"] . "</p>";
				$query3 = "select * from ld where id='$id' and uname='$user'";
			    $result3 = mysqli_query($connect,$query3);
			    $row3=mysqli_fetch_assoc($result3);
			    $q1="select * from comments where id='$id'";
				$q1result=mysqli_query($connect,$q1);
				$q1num=mysqli_num_rows($q1result);
			    if($row3["reaction"]=='like'){
			    	echo "<i class='fa fa-thumbs-up' id = 'like" .$row["id"]."' onclick='likes(".$row["id"].")' style='color:rgb(13, 153, 215);'>".$row["likes"]."</i>";
					echo "<i class='fa fa-thumbs-down' id = 'dislike" .$row["id"]."' onclick='dislikes(".$row["id"].")'>".$row["dislikes"]."</i>";
			    }
			    elseif ($row3["reaction"]=='dislike') {
			    	echo "<i class='fa fa-thumbs-up' id = 'like" .$row["id"]."' onclick='likes(".$row["id"].")'>".$row["likes"]."</i>";
					echo "<i class='fa fa-thumbs-down' id = 'dislike" .$row["id"]."' onclick='dislikes(".$row["id"].")' style='color:rgb(13, 153, 215);'>".$row["dislikes"]."</i>";
			    }
			    else{
			    	echo "<i class='fa fa-thumbs-up' id = 'like" .$row["id"]."' onclick='likes(".$row["id"].")'>".$row["likes"]."</i>";
					echo "<i class='fa fa-thumbs-down' id = 'dislike" .$row["id"]."' onclick='dislikes(".$row["id"].")'>".$row["dislikes"]."</i>";
			    }
				echo "<i class='fa fa-comments' id = 'no" .$row["id"]."' onclick='showcomments(".$row["id"].")'>".$q1num."</i>";
				if ($row4["acc_type"]=="Admin") {
					echo "<i class='fas fa-edit' onclick='editpost(".$row["id"].")'>  </i>";
				    echo "<i class='fas fa-trash' onclick='deletepost(".$row["id"].")'>  </i>";
				}
				
				echo "</div>";
				echo "<div class='comments' id='com" .$row["id"]."' style='display:none;'>";
				$query1 = "select * from comments where id='$id'";
				$result1 = mysqli_query($connect,$query1);
				while ($row1=mysqli_fetch_assoc($result1)) {
					echo "<div class='cmt_layout' id='c" .$row1["cmtid"]."'>";
					echo "<span class='dp1'>" . $row1["logo"] . "</span>";
					echo "<h2>" . $row1["uname"] . "</h2>";
					echo "<p id = 'cmt" .$row1["cmtid"]."'>" . $row1["comment"] . "</p>";
					echo "</div><br>";
				}
				
				echo "<textarea class='textarea2' id='cs".$row["id"]."' rows='1' cols='50' placeholder='Add your comment here'></textarea>";
				echo "<button class='postcmnt' onclick='comment(".$row["id"].")'> comment </button>";
				echo "</div>";
				echo "</div>";
			}
		?>
		
	</div>
	<div id="modal1">
		<div id="content">
			<div class="close" onclick="closemodal()">+</div>			
			<img src="user.png">
			<p class="welcome">WELCOME <?php echo strtoupper($_SESSION['name'])?>!</p>
			<a href="demo.php">LogOut</a>
		</div>
		
	</div>

	<div id="modal2">
		<div class="topicadd">
			<div class="close" onclick="closemodal1()">+</div>
			<textarea class="textarea" id="ta" rows="5" cols="100" placeholder="Enter Text Here..."></textarea>
			<button class="addbtn" id="editbtn" onclick="addcontent()">ADD</button>
			<button class="disbtn" onclick="discard()">DISCARD</button>
		</div>
	</div>
</body>
</html>