

//initialization
function start() {
	setTimeout(function () {
		document.getElementById("startPage").style.display = "none";
		document.getElementById("sequence1").style.display = "block";
		document.getElementById("game-header").style.display = "block";
		document.getElementById("top-bar").style.display = "block";
	}, 1000);
		sequenceTimer();
		setTimeout(function () {
		document.getElementById("sequence1").style.display = "none";
		document.getElementById("level1").style.display = "none";
		document.getElementById("grid-container").style.display = "block";
		document.getElementById("game-header").style.display = "block";
		document.getElementById("top-bar").style.display = "block";
			lifeBar();
			gameTimer();
	}, 11000);
	generateSymbol();
	checkSymbol();
}
//generate random symbols for the map
function generateSymbol(){
		for(var i = 0;i <4;i++){
			addImage(i,getValue(5));
		}
		//generate random symbols for the map
		for(var i = 2; i>=0;i--) {
			for(var j = 2; j>=0;j--){
			addImageToMap(i,j,getValue(5));
				gridCount++;
			}
		}
		
}



// get a random symbol for the map
function getValue(num){
	var temp = Math.floor((Math.random() * num));
	return temp;
   }




//instruction
function ins(){
	document.getElementById("instruction").style.display = "block";
	document.getElementById("startPage").style.display = "none";
}
function HomePage() {
    document.getElementById("instruction").style.display = "none";
    document.getElementById("leaderBoard").style.display = "none";
    document.getElementById("iconLeader").style.display = "block";
    document.getElementById("startPage").style.display = "block";
}



//stone audio
function pushRock(){
	var p= document.getElementById("push-rock")
	p.play();
}


//leader board page
function leaderBoard(){
	document.getElementById("leaderBoard").style.display = "block";
	document.getElementById("iconLeader").style.display = "none";
	document.getElementById("startPage").style.display = "none";
}
