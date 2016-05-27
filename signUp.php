<?php
	//Start session
	session_start();

	//Include database connection details
	require_once('config.php');

	//Connect to mysql server
	$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);
	if(!$link) {
		die('Failed to connect to server: ' . mysql_error());
	}

	//Select database
	$db = mysql_select_db(DB_DATABASE);
	if(!$db) {
		die("Unable to select database");
	}

	//Function to sanitize values received from the form. Prevents SQL injection
	function clean($str) {
		$str = @trim($str);
		if(get_magic_quotes_gpc()) {
			$str = stripslashes($str);
		}
		return mysql_real_escape_string($str);
	}

	//Sanitize the POST values
	//$name = clean($_POST['name']);
	//$eamil = clean($_POST['email']);
	//$password = clean($_POST['signUpPassword']);

	$playerName = mysql_real_escape_string($_POST['signName']);
	$password = mysql_real_escape_string($_POST['signPassWord']);

	$playerName = trim($playerName);
	$password = trim($password);

	// name exist or not
	$query = "SELECT * FROM playerInfo WHERE playerName='$playerName'";
	$result = mysql_query($query);


	if($result){
	if(mysql_num_rows($result) == 0){// if name not found then register

		if(mysql_query("INSERT INTO playerInfo(playerName, passWord) VALUES('$playerName','$password')"))
		{

			$_SESSION['user'] =$playerName;

			header("location:index.php");

			exit();
		}
		else
		{
			?>
			<script>alert('error while registering you...');</script>
			<?php
		}
	}
	else{
			?>
			<script>alert('Sorry name already taken ...');
			</script>
			<?php


	}
   }else{
	   die("Query failed");
   }
?>
