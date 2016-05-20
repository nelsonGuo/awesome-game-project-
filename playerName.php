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
	$playerName = mysql_real_escape_string($_POST['playerName']);    
	
	$playerName = trim($playerName);

    $playTime = mysql_real_escape_string($_POST['value']);    
	
	$playTime = trim($playTime);

	$level = mysql_real_escape_string($_POST['levelValue']);    
	
	$level = trim($level);

     
	// name exist or not
	$query = "SELECT * FROM playerInfo WHERE playerName='$playerName'";
	$result = mysql_query($query);
	
	
	if($result){
	if(mysql_num_rows($result) == 0){// if name not found then insert
		
		if(mysql_query("INSERT INTO playerInfo(playerName, playTime, level) VALUES('$playerName','$playTime','$level')"))
		{    
			header("location: index.php");
			
			exit();
		}
		else
		{
			?>
			<script>alert('error while submitting ...');</script>
			<?php
		}		
	}
	else{

			if(mysql_query("UPDATE playerInfo SET playerName='$playerName', playTime='$playTime', level='$level' WHERE playerName='$playerName'"))
		{    
			header("location: index.php");
			
			exit();
		}
		else
		{
			?>
			<script>alert('error while submitting ...');</script>
			<?php
		}		
			
	}
   }else{
	   die("Query failed");
   }
?>
