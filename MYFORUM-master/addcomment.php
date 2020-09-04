<?php
	session_start();

    $f=$_SESSION['name'];
    $fl=strtoupper($f['0']);;
    $uname=ucfirst($f);
    $comment = $_GET['q'];
    $id = $_GET['p'];


    $connect=mysqli_connect('localhost','id14461671_khullarkushagra','Nilima197210@gmail.com','id14461671_mydb');

	if(!$connect){
		echo "No connection";
	}
	
	$qy="insert into comments(id,logo,uname,comment) values('$id', '$fl', '$uname', '$comment')";
	mysqli_query($connect,$qy);
	$qy1="select * from comments where comment ='$comment' ";
	$qy1result=mysqli_query($connect,$qy1);
	$row=mysqli_fetch_assoc($qy1result);

	echo "<div class='cmt_layout' id='c" .$row["cmtid"]."'>";
	echo "<span class='dp1'>" . $fl . "</span>";
	echo "<h2>" . $uname. "</h2>";
	echo "<p id = 'cmt" .$row["cmtid"]."'>" . $comment . "</p>";
	echo "</div><br>";
?>