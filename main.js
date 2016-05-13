//设置canvas 并插图
var idRecord = "grid-0-0";
var row;
var column;
var rowUp;
var columnLeft;
var columnRight;

var map = new Array();

var sequence = new Array();
var numClick = 0;

//initialization
function start() {
	document.getElementById("startPage").style.display = "none";
	document.getElementById("sequence1").style.display = "block";
	document.getElementById("game-header").style.display = "block";

	setTimeout(function () {
		document.getElementById("sequence1").style.display = "none";
		document.getElementById("level1").style.display = "none";
		document.getElementById("grid-container").style.display = "block";
		document.getElementById("game-header").style.display = "block";

	}, 5000);


	  for(var i = 0;i <4;i++){
	  	addImage(i,getValue(5));
	  }
	  
 

//generate random symbols for the map
	for(var i = 2; i>=0;i--) {
		for(var j = 2; j>=0;j--){
		addImageToMap(i,j,getValue(5));
		}
	}



for(var i = 0; i<3;i++) {
		for(var j = 0; j<3;j++){
		if (map["grid-"+i+"-"+j] == sequence[i]){

		}
		}
	}



	checkSymbol();


}

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



//add image
function addImage(i,j) {
	var S = document.getElementById("position" + i);
	var ctx = S.getContext("2d");
	var img = document.getElementById("symbol" + j);
	ctx.drawImage(img,5,5);

	sequence[i] = j;

}
//add image to map
function addImageToMap(i,j,k) {
	var S = document.getElementById("grid-"+i+"-"+j);
	var ctx = S.getContext("2d");
	var img = document.getElementById("symbol" + k);
	ctx.drawImage(img,5,5);

	map["grid-"+i+"-"+j] = k;
}


//StepMatching
function stepMatching(id) {
	if(numClick == 0) {
		if (id == "grid-0-0" || id == "grid-0-1" || id == "grid-0-2") {
			if (sequence[numClick] == map[id]) {
				var c = document.getElementById(id);
				var ctx = c.getContext("2d");
				ctx.shadowBlur= 20;
				ctx.shadowColor="black";
				ctx.fillStyle ="rgba(0, 0, 0, 0.3)";
				ctx.fillRect(0,0,300,300);

				idRecord = id;
				numClick++;
				row = idRecord.substring(5,6);
				column = idRecord.substring(7,8);
				row = parseInt(row);
				column = parseInt(column);
				rowUp = row + 1;
				columnLeft = column - 1;
				columnRight = column + 1;
			}
			else
		
				alert("you lost");
		}
		else
			alert("you lost");
	}
	else {
		if(id == "grid-"+row+"-"+columnLeft || id == "grid-"+row+"-"+columnRight || id == "grid-"+rowUp+"-"+column) {
			if (sequence[numClick] == map[id]) {

				var c = document.getElementById(id);
				var ctx = c.getContext("2d");
				ctx.shadowBlur= 20;
				ctx.shadowColor="black";
				ctx.fillStyle ="rgba(0, 0, 0, 0.3)";
				ctx.fillRect(0,0,300,300);

				idRecord = id;
				numClick++;
				row = idRecord.substring(5,6);
				column = idRecord.substring(7,8);
				row = parseInt(row);
				column = parseInt(column);
				rowUp = row + 1;
				columnLeft = column - 1;
				columnRight = column + 1;
			}
			else
				alert("you lost");
		}
		else {
			alert("you lost");
		}

	}

}


//instruction
function ins(){
	document.getElementById("instruction").style.display = "block";
}
function HomePage() {
    document.getElementById("instruction").style.display = "none";

}
//sequence timer
window.onload=function sequenceTimer(){
	var i = 10;
	var timer = setInterval(function(){
		if(i== -1){
			clearInterval(timer);
		}else{
			document.getElementById("timer").innerHTML = "Time: "+i;
			--i;
		}
	},1000);
}



