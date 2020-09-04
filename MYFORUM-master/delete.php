<?php
	$delid=$_GET['q'];
	$connect=mysqli_connect('localhost','id14461671_khullarkushagra','Nilima197210@gmail.com','id14461671_mydb');

	if(!$connect){
		echo "No connection";
	}

	$q="delete from topics where id = '$delid' ";
	mysqli_query($connect,$q);
?>