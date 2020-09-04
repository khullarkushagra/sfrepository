<?php
session_start();

$connect=mysqli_connect('localhost','id14461671_khullarkushagra','Nilima197210@gmail.com','id14461671_mydb');

$user=$_POST['uname'];
$pass=$_POST['password'];
$radio=$_POST['type'];

$q1="select * from registration where username ='$user' && password='$pass' && acc_type='$radio'";
$q1result=mysqli_query($connect,$q1);
$q1num=mysqli_num_rows($q1result);

$q2="select * from registration where username ='$user' && password='$pass' && acc_type='$radio'";
$q2result=mysqli_query($connect,$q2);
$name=mysqli_fetch_assoc($q2result);

if($q1num){
	$_SESSION['name']=$name["name"];
	header('location:homepage.php');
}

else{
	echo '<script>alert("Invalid info")</script>';
	header('location:demo.php');
}

?>