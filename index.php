<?php
	require_once('config.php');

	// Connect to server and select database.
	mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)or die("cannot connect");
	mysql_select_db(DB_DATABASE)or die("cannot select DB");
	$tbl_name="playerInfo"; // Table name


$sql = 'select * FROM playerInfo ORDER BY `level` DESC,`playTime` ASC LIMIT 0, 30 ';
	// ORDER BY id DESC is order result by descending
	$result=mysql_query($sql);
 
?>
<!DOCTYPE html>
	<html>
	<head lang="en">
    	<meta charset="UTF-8">
    	<title>Escape game</title>
    	<meta name="viewport" content="width=device-width, initial-scale=1"/>
    	<link rel="stylesheet" type="text/css" media="screen and (max-device-width: 600px)" href="smallScreen.css" />
    	<link rel="stylesheet" type="text/css" media="screen and (min-device-width: 600px)" href="bigScreen.css" />
		<link rel="stylesheet" type="text/css" href="popup.css">
    	<script type="text/javascript" src="JavaScript/main.js"></script>
		<script type="text/javascript" src="JavaScript/addImage-1.js"></script>
		<script type="text/javascript" src="JavaScript/addImage-2.js"></script>
		<script type="text/javascript" src="JavaScript/increaseGrids.js"></script>
		<script type="text/javascript" src="JavaScript/stepMatching-1.js"></script>
		<script type="text/javascript" src="JavaScript/RestartGame-WrongStep.js"></script>
		<script type="text/javascript" src="JavaScript/Timer.js"></script>
		<script type="text/javascript" src="JavaScript/GlobalVariables.js"></script>
		<script type="text/javascript" src="JavaScript/Level34.js"></script>
		<script type="text/javascript" src="JavaScript/checkSymbols-1.js"></script>
		<script type="text/javascript" src="JavaScript/easterEgg.js"></script>
		<script type="text/javascript" src="JavaScript/lifeBar.js"></script>
		<script type="text/javascript" src="JavaScript/button.js"></script>
		<script type="text/javascript" src="JavaScript/lose.js"></script>
		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

		<script src="JavaScript/popup.js"></script>
		<audio autoplay id='music'>
			<source src='audio/music.mp3' type='audio/mp3'>
		</audio>
		<audio id='push-rock'>
			<source src='audio/push.mp3' type='audio/mp3'>
		</audio>
	</head>
	<body>
		<div id="gameSpace">
			<!--Leaderboarder-->
			<div id="leaderBoard">
				<h1>Leaderboard</h1>
				<table>
					<tr>
						<th>Rank</th>
						<th>Name</th>
						<th>Time</th>
						<th>Level</th>
					</tr>
						<?php
							 $rank =0;
							while($rows=mysql_fetch_array($result)){ 
							           $rank ++;                              // Start looping table row
						?>
							<tr>
							<td ><?php echo $rank ?></td>
							<td ><?php echo $rows['playerName']; ?></td>
							<td ><?php echo $rows['playTime']; ?></td>
							<td ><?php echo $rows['level']; ?></td>
							</tr>
							<?php
							// Exit looping and close connection
							}
							mysql_close();
							?>
					  <tr>
				</table>
				<a class="btn btn-primary btn-lg" id="back" onclick="HomePage()">Go Back</a>
			</div>
			<!--instructions-->
			<div id="instruction">
				<h1>Instruction</h1>
				<div id="ins1">
					<p>Remember and Follow the sequence</p>
					<img src="pictures/ins1.png" alt="instruction1" height="500">
					<input type="image" src="pictures/next.png" class="nextPage" onclick="ins2()" height="100" width="100">
				</div>
				<div id="ins2">
					<p>Tap the grid to move from bottom to the top<br>
				 	Remember that you can only go left, right and up</p>
					<img src="pictures/ins2.png" alt="instruction1" height="450">
					<input type="image" src="pictures/next.png" class="nextPage" onclick="ins3()" height="100" width="100">
				</div>
				<div id="ins3">
					<p>Take care of your time and life</p>
					<img src="pictures/ins3.png" alt="instruction1" height="450">
					<a class="btn btn-primary btn-lg" id="back" onclick="HomePage()">Go Back</a>
				</div>
			</div>
			<!--start page-->
			<div id="startPage">
				<h1 id ="header" onclick="eggs()">Escape Sequence</h1>
				<input type="image" src="pictures/leaderboardIcon.png" id="iconLeader" onclick="leaderBoard()" onmouseover="this.src='pictures/leaderboardIcon2.png'" onmouseout="this.src='pictures/leaderboardIcon.png'">
				<a class="btn btn-primary btn-lg" id="ins" onclick="ins()"> Instruction </a>
				<a class="btn btn-primary btn-lg" id="start1" onclick="start()"> Start Game </a>
			</div>
			<!--insert images-->
			<div>
				<img id="symbol0" class = "symbol" src="pictures/0.jpg"  />
				<img id="symbol1" class = "symbol" src="pictures/1.jpg"  />
				<img id="symbol2" class = "symbol" src="pictures/2.jpg"  />
				<img id="symbol3" class = "symbol" src="pictures/3.jpg"  />
				<img id="symbol4" class = "symbol" src="pictures/4.jpg"  />
			</div>
			<div id="game-header">
				<!--life & timer-->
				<div id="top-bar">
					<h2 id="life"></h2>
					<h2 id="timer"></h2>
				</div>
				<div id="level1">
					<h1>Level 1</h1>
				</div>
				<!--sequence section-->
				<div id="sequence1">
					<canvas id="position0" class="seqgrid" width="200" height="200"></canvas>
					<canvas id="position1" class="seqgrid" width="200" height="200"></canvas>
					<canvas id="position2" class="seqgrid" width="200" height="200"></canvas>
					<canvas id="position3" class="seqgrid" width="200" height="200"></canvas>
				</div>
				<!--game map section-->
				<div id="grid-container">
					<!-- Popup content -->
					<div id="popup-content" >
						<div id="popup-form">
							<p>You Win this game!!!</p>

							<form action="playerName.php" method="post">
								<span>Please input your name</span></span>
								<input name="playerName" type="text">
								<input id="value" type="hidden" name="value" value="0">


								<input id="send" type="submit" value="Submit" onclick="getTime()">
							</form>
						</div>
							<input id="modal-close-button" type="button" value="Close Popup" />
					</div>
					<div id="overlay-bg"></div>
				<canvas class = "map" id="grid-2-2" onclick="stepMatching('grid-2-2')" width="200" height="200"></canvas>
				<canvas class = "map" id="grid-2-1" onclick="stepMatching('grid-2-1')" width="200" height="200"></canvas>
				<canvas class = "map" id="grid-2-0" onclick="stepMatching('grid-2-0')" width="200" height="200"></canvas>
				<canvas class = "map" id="grid-1-2" onclick="stepMatching('grid-1-2')" width="200" height="200"></canvas>
				<canvas class = "map" id="grid-1-1" onclick="stepMatching('grid-1-1')" width="200" height="200"></canvas>
				<canvas class = "map" id="grid-1-0" onclick="stepMatching('grid-1-0')" width="200" height="200"></canvas>
				<canvas class = "map" id="grid-0-2" onclick="stepMatching('grid-0-2')" width="200" height="200"></canvas>
				<canvas class = "map" id="grid-0-1" onclick="stepMatching('grid-0-1')" width="200" height="200"></canvas>
				<canvas class = "map" id="grid-0-0" onclick="stepMatching('grid-0-0')" width="200" height="200"></canvas>
				</div>
				<!--grid for next level-->
				<div id="grid-container2">

					<canvas class = "map" id="2grid-3-3" onclick="stepMatching('2grid-3-3')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-3-2" onclick="stepMatching('2grid-3-2')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-3-1" onclick="stepMatching('2grid-3-1')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-3-0" onclick="stepMatching('2grid-3-0')" width="150" height="150"></canvas>

					<canvas class = "map" id="2grid-2-3" onclick="stepMatching('2grid-2-3')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-2-2" onclick="stepMatching('2grid-2-2')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-2-1" onclick="stepMatching('2grid-2-1')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-2-0" onclick="stepMatching('2grid-2-0')" width="150" height="150"></canvas>

					<canvas class = "map" id="2grid-1-3" onclick="stepMatching('2grid-1-3')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-1-2" onclick="stepMatching('2grid-1-2')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-1-1" onclick="stepMatching('2grid-1-1')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-1-0" onclick="stepMatching('2grid-1-0')" width="150" height="150"></canvas>

					<canvas class = "map" id="2grid-0-3" onclick="stepMatching('2grid-0-3')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-0-2" onclick="stepMatching('2grid-0-2')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-0-1" onclick="stepMatching('2grid-0-1')" width="150" height="150"></canvas>
					<canvas class = "map" id="2grid-0-0" onclick="stepMatching('2grid-0-0')" width="150" height="150"></canvas>
				</div>
			</div>
		</div>
	</body>

</html>
