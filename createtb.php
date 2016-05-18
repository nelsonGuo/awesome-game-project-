<?php
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
    
   /* $sql = "CREATE TABLE playerInfo ( ".
      "id INTEGER NOT NULL auto_increment, ".
      "playerName VARCHAR(50) NOT NULL, ".
      "playTime INTEGER(10) NOT NULL default '', ".
      "level INTEGER(10) NOT NULL default '', ".      
      "PRIMARY KEY (id), ".
      ")"; */

      $sql = "CREATE TABLE playerInfo (id int NOT NULL auto_increment,playerName varchar(50),playTime int(10),level int(10),PRIMARY KEY (id));"; 

	   
  $retval = mysql_query($sql);
	 if(!$retval)
	 {
		 die('Could not create table: ' . mysql_error());
	 }
	?>