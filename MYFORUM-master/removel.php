<?php
	session_start();
	$id=$_GET['q'];
	$f=$_SESSION['name'];
    $uname=ucfirst($f);

    $connect=mysqli_connect('localhost','id14461671_khullarkushagra','Nilima197210@gmail.com','id14461671_mydb');

	if(!$connect){
		echo "No connection";
	}

	$qy="update topics set likes=likes-1 where id='$id'";
	mysqli_query($connect,$qy);

	$qy1="update ld set reaction='none' where id='$id' and uname='$uname'";
	mysqli_query($connect,$qy1);

	$qy2="select * from topics where id='$id' ";
	$qy2result=mysqli_query($connect,$qy2);
	$row=mysqli_fetch_assoc($qy2result);

	echo $row["likes"];

?>