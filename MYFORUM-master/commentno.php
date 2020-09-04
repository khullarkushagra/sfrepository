<?php

	$id=$_GET["q"];
	$connect=mysqli_connect('localhost','id14461671_khullarkushagra','Nilima197210@gmail.com','id14461671_mydb');
	if(!$connect){
		echo "No connection";
	}

	$q1="select * from comments where id='$id'";
	$q1result=mysqli_query($connect,$q1);
	$q1num=mysqli_num_rows($q1result);

	echo $q1num;
?>