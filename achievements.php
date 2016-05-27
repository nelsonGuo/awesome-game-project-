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


	$FC = mysql_real_escape_string($_COOKIE['FC']);

	$FC = trim($FC);

	$SC = mysql_real_escape_string($_COOKIE['SC']);

	$SC = trim($SC);

	$LvlC = mysql_real_escape_string($_COOKIE['LvlC']);

	$LvlC = trim($LvlC);

	$LifeC = mysql_real_escape_string($_COOKIE['LifeC']);

	$LifeC = trim($LvlC);

	$TC = mysql_real_escape_string($_COOKIE['TC']);

	$TC = trim($TC);


	$query = "SELECT * FROM playerInfo WHERE playerName='$_SESSION['user']'";
	$result = mysql_query($query);


	if($result){
	if(mysql_num_rows($result) == 1){// if name not found then register

		if(mysql_query("UPDATE playerInfo SET A='$FC ', B='$SC', C='$LvlC', D='$LifeC', E='$TC' WHERE playerName='$_SESSION['user']'"))
		{

			$_SESSION['FC'] =$_COOKIE['FC'];
			$_SESSION['SC'] =$_COOKIE['SC'];
			$_SESSION['LvlC'] =$_COOKIE['LvlC'];
			$_SESSION['LifeC'] =$_COOKIE['LifeC'];
			$_SESSION['TC'] =$_COOKIE['TC'];


		}
		else
		{
			?>
			<script>alert('error while updating');</script>
			<?php
		}
	}
	else{
			?>
			<script>alert('error ...');
			</script>
			<?php


	}
   }else{
	   die("Query failed");
   }
?>
