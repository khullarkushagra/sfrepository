<?php
session_start();

$connect=mysqli_connect('localhost','id14461671_khullarkushagra','Nilima197210@gmail.com','id14461671_mydb');

$name=$_POST['name'];
$user=$_POST['username'];
$pass=$_POST['password'];
$cpass=$_POST['cpassword'];
$radio=$_POST['type'];

$q1="select * from registration where username ='$user' ";
$q1result=mysqli_query($connect,$q1);
$q1num=mysqli_num_rows($q1result);

function phpAlert($msg) {
    echo '<script type="text/javascript">alert("' . $msg . '")</script>';
}

if($q1num){
	phpAlert("This username already exists");
	header('location:demo.php');
}

else if($pass!=$cpass){
	phpAlert("Your Password doesnot match");
	header('location:demo.php');
}

else{
	$q2="insert into registration values('$name', '$user', '$pass', '$radio')";
	mysqli_query($connect,$q2);
	$_SESSION['name']=$name;
	header('location:homepage.php');
}

?>