

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
//check symbols function
function checkSymbol() {
		//step 1
			if(map["grid-0-0"] != sequence[0] && map["grid-0-1"] != sequence[0] && map["grid-0-2"] != sequence[0]){
		   addImageToMap(0,getValue(3),sequence[0]);
			}
		if(map["grid-0-2"] == sequence[0]){
			if(map["grid-0-1"] != sequence[1] && map["grid-1-2"] != sequence[1]){
				var temp = Math.floor((Math.random() * 2));
				if(temp = 0) {
					addImageToMap(1,2,sequence[1]);
				}else if(temp = 1) {
					addImageToMap(0,1,sequence[1]);
				}
			}
		addImageToMap(1,1,sequence[2]);
		addImageToMap(2,1,sequence[3]);
}else if (map["grid-0-0"] == sequence[0]){
	if (map["grid-0-1"] != sequence[1] && map["grid-1-0"] != sequence[1]) {
		var temp1 = Math.floor((Math.random() * 2));
		if(temp1 = 0) {
			addImageToMap(1,0,sequence[1]);
		}else if(temp1 = 1) {
			addImageToMap(0,1,sequence[1]);
		}
	}
	addImageToMap(1,1,sequence[2]);
	addImageToMap(2,1,sequence[3]);
}else if (map["grid-0-1"] == sequence[0]) {
	if (map["grid-0-2"] != sequence[1] && map["grid-0-0"] != sequence[1] && map["grid-1-1"] != sequence[1]) {
		var temp2 = Math.floor((Math.random() * 3));
			if(temp2 = 0) {
				addImageToMap(0,2,sequence[1]);
			}else if(temp2 = 1) {
				addImageToMap(0,0,sequence[1]);
			}else if(temp2 = 2) {
				addImageToMap(1,1,sequence[1]);
			}
		}
	if(map["grid-0-2"] == sequence[1]) {
		addImageToMap(1,2,sequence[2]);
		addImageToMap(2,2,sequence[3]);
	}else if(map["grid-0-0"] == sequence[1]) {
		addImageToMap(1,0,sequence[2]);
		addImageToMap(2,0,sequence[3]);
	}else if(map["grid-1-1"]) {
		var temp3 = Math.floor((Math.random() * 2));
		if(temp3 == 0){
			addImageToMap(1,0,sequence[2]);
			addImageToMap(2,0,sequence[3]);
		}else if(temp3 == 1) {
			addImageToMap(1,2,sequence[2]);
			addImageToMap(2,2,sequence[3]);
		}
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
