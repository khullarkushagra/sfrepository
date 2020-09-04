<?php
    session_start();

    $f=$_SESSION['name'];
    $fl=strtoupper($f['0']);;
    $uname=ucfirst($f);
    $topic = $_GET['q'];


    $connect=mysqli_connect('localhost','id14461671_khullarkushagra','Nilima197210@gmail.com','id14461671_mydb');

	if(!$connect){
		echo "No connection";
	}

	$qy="insert into topics(logo,uname,topic) values('$fl', '$uname', '$topic')";
	mysqli_query($connect,$qy);
	$qy1="select * from topics where topic ='$topic' ";
	$qy1result=mysqli_query($connect,$qy1);
	$id=mysqli_fetch_assoc($qy1result);
	$kk=$id["id"];

	$query4 = "select * from registration where name='$uname'";
    $result4 = mysqli_query($connect,$query4);
    $row4=mysqli_fetch_assoc($result4);

	$query="select name from registration";
	$queryresult=mysqli_query($connect,$query);

	while($roww=mysqli_fetch_assoc($queryresult)){
		$un=$roww["name"];
		$qy2="insert into ld values('$kk','$un','none')";
		mysqli_query($connect,$qy2);
	}

	echo "<div class='stylepost'>";
	echo "<div class='topics' id=" .$id["id"].">";
	echo "<span class='dp'>" . $fl . "</span>";
	echo "<h2>" . $uname . "</h2>";
	echo "<p id = 'topic" .$id["id"]."'>" . $topic . "</p>";
	echo "<i class='fa fa-thumbs-up' id = 'like" .$id["id"]."' onclick='likes(".$id["id"].")'>0</i>";
	echo "<i class='fa fa-thumbs-down' id = 'dislike" .$id["id"]."' onclick='dislikes(".$id["id"].")'>0</i>";
	echo "<i class='fa fa-comments' id = 'no" .$id["id"]."' onclick='showcomments(".$id["id"].")'>0</i>";
	if($row4["acc_type"]=="Admin"){
		echo "<i class='fas fa-edit' onclick='editpost(".$id["id"].")'>  </i>";
	    echo "<i class='fas fa-trash' onclick='deletepost(".$id["id"].")'>  </i>";
	}
	echo "</div>";
	echo "<div class='comments' id='com" .$id["id"]."' style='display:none;'>";
	echo "<textarea class='textarea2' id='cs".$id["id"]."'' rows='1' cols='50' placeholder='Add your comment here'></textarea>";
	echo "<button class='postcmnt' onclick='comment(".$id["id"].")'> comment </button>";
	echo "</div>";
	echo "</div>";
?>