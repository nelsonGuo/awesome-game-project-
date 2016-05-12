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
		document.getElementById("grid-container").style.display = "block";
		document.getElementById("game-header").style.display = "block";

	}, 10000);

  //hardcore the sequence     
      addImage(0,0);
	  addImage(1,1);
	  addImage(2,2);
	  addImage(3,3);
	  
 

//generate random symbols for the map
	for(var i = 2; i>=0;i--) {
		for(var j = 2; j>=0;j--){
		addImageToMap(i,j,getValue());
		}
 //overide some necessary symbols to have at leat one solution
 addImageToMap(0,1,0);
 addImageToMap(1,1,1);
 addImageToMap(1,0,2);
 addImageToMap(2,0,3);

	}
}
 // get a random symbol for the map  
function getValue(){
	var temp = Math.floor((Math.random() * 10) / 2);
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
				alert("Correct");
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
				alert("Wrong");
		}
		else
			alert("Wrong");
	}
	else {
		if(id == "grid-"+row+"-"+columnLeft || id == "grid-"+row+"-"+columnRight || id == "grid-"+rowUp+"-"+column) {
			if (sequence[numClick] == map[id]) {
				alert("Correct");
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
				alert("Wrong");
		}
		else {
			alert("Wrong");
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
			document.getElementById("timer").innerHTML = "Time"+i;
			--i;
		}
	},1000);
}



