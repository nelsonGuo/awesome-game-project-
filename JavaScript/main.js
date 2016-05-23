//initialization when game start
function start() {
	rankTime();
	document.getElementById("startPage").style.display = "none";
	document.getElementById("showLevel").style.display ="block";
	document.getElementById("showLevel").innerHTML="Level " + lvl;
	document.getElementById("game-header").style.display = "block";
	document.getElementById("level1").style.display = "none";
	setTimeout(function(){
		sequenceTimer();
		document.getElementById("lvlUp").innerHTML="Level "+lvl;
		document.getElementById("level1").style.display = "block";
	document.getElementById("showLevel").style.display ="none";
	document.getElementById("sequence1").style.display = "block";
	document.getElementById("top-bar").style.display = "block";
	},2000);
		setTimeout(function () {
		document.getElementById("sequence1").style.display = "none";
		document.getElementById("level1").style.display = "none";
		document.getElementById("grid-container").style.display = "block";
		document.getElementById("top-bar").style.display = "block";
			lifeShape();
			gameTimer();
	}, 13000);
	generateSymbol();
	checkSymbol();
}
// get a random symbol for the map
function getValue(num){
	var temp = Math.floor((Math.random() * num));
	return temp;
   }
