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

	for(var i = 3; i>=0;i--) {
		addImage(i);

	}

	for(var i = 2; i>=0;i--) {
		for(var j = 2; j>=0;j--){
			addImageToMap(i,j);
		}
	}
}
//add image
function addImage(i) {
	var S = document.getElementById("position" + i);
	var ctx = S.getContext("2d");
	var img = document.getElementById("symbol" + i);
	ctx.drawImage(img,5,5);

	sequence[i] = i;

}
//add image to map
function addImageToMap(i,j) {
	var S = document.getElementById("grid-"+i+"-"+j);
	var ctx = S.getContext("2d");
	var img = document.getElementById("symbol" + i);
	ctx.drawImage(img,5,5);

	map["grid-"+i+"-"+j] = i;
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


/*
function giveValue(id){
	var temp == Math.random();

	if(temp <= 0.2)
		map[i] =1;
	else if(0.2<temp<=0.4)
		map[i] =2;
	else if(0.4<temp<=0.6)
		map[i] =3;
	else if(0.6<temp<=0.8)
		map[i] =4;
	else if(0.8<temp<1)
		map[i] =5;

	var block = $(id);
	block.innerHTML(temp);

}
*/
