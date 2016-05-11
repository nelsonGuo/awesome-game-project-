//设置canvas 并插图
var S0, ctx0, img0;
var S1, ctx1, img1;
var S2, ctx2, img2;
var S3, ctx3, img3;



var map = new Array();
var sequence = new Array();
var numClick = 0;

function start() {
	document.getElementById("startPage").style.display = "none";
	document.getElementById("sequence1").style.display = "block";

	setTimeout(function () {
		document.getElementById("sequence1").style.display = "none";
		document.getElementById("grid-container").style.display = "block";
		document.getElementById("game-header").style.display = "block";

	}, 1000);

	for(var i = 3; i>=0;i--) {
		addImage(i);

	}

	for(var i = 2; i>=0;i--) {
		for(var j = 2; j>=0;j--){
			addImageToMap(i,j);
		}
	}


}

function addImage(i) {
	var S = document.getElementById("position" + i);
	var ctx = S.getContext("2d");
	var img = document.getElementById("symbol" + i);
	ctx.drawImage(img,5,5);
	sequence[i] = i;

}

function addImageToMap(i,j) {
	var S = document.getElementById("grid-"+i+"-"+j);
	var ctx = S.getContext("2d");
	var img = document.getElementById("symbol" + i);
	map["grid-"+i+"-"+j] = i;
	ctx.drawImage(img,5,5);

}

function stepMatching(id) {
	if(sequence[numClick] == map[id]) {
		alert("Correct");
		numClick++;
	}
	else
		alert("Wrong");

}



function ins(){
	document.getElementById("instruction").style.display = "block";
}
function HomePage() {
    document.getElementById("instruction").style.display = "none";

}

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




