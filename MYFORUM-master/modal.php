<?php
	$edid=$_GET['q'];
	$connect=mysqli_connect('localhost','id14461671_khullarkushagra','Nilima197210@gmail.com','id14461671_mydb');

	if(!$connect){
		echo "No connection";
	}

	$query = "select * from topics where id = '$edid' ";
	$result = mysqli_query($connect,$query);

	$row=mysqli_fetch_assoc($result);
	echo $row["topic"];
?>