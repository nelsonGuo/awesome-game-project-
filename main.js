//set variable
var idRecord = "grid-0-0";
var row;
var column;
var rowUp;
var columnLeft;
var columnRight;
var map = new Array();
var sequence = new Array();
var numClick = 0;
var life = 3;

var gridCount = 0;
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
		if (id == "grid-0-0" || id == "grid-0-1" || id == "grid-0-2"|| id == "grid-0-3" ) {
			if (sequence[numClick] == map[id]) {
				var c = document.getElementById(id);
				var ctx = c.getContext("2d");
				ctx.shadowBlur= 20;
				ctx.shadowColor="black";
				ctx.fillStyle ="rgba(0, 0, 0, 0.3)";
				pushRock();
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
			else {
				alert("you lost");
				lifeDown();
			}
		}
		else {
			alert("you lost");
			lifeDown();
		}
	}
	else {
		if(id == "grid-"+row+"-"+columnLeft || id == "grid-"+row+"-"+columnRight || id == "grid-"+rowUp+"-"+column) {
			if (sequence[numClick] == map[id]) {
				if(numClick + 1 < sequence.length) {
					var c = document.getElementById(id);
					var ctx = c.getContext("2d");
					ctx.shadowBlur = 20;
					ctx.shadowColor = "black";
					ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
					pushRock();
					ctx.fillRect(0, 0, 300, 300);
					idRecord = id;
					numClick++;
					row = idRecord.substring(5, 6);
					column = idRecord.substring(7, 8);
					row = parseInt(row);
					column = parseInt(column);
					rowUp = row + 1;
					columnLeft = column - 1;
					columnRight = column + 1;
				}
				else if (numClick + 1 == sequence.length) {
					if (row+1 == Math.sqrt(gridCount)-1){
						var c = document.getElementById(id);
						var ctx = c.getContext("2d");
						ctx.shadowBlur = 20;
						ctx.shadowColor = "black";
						ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
						pushRock();
						ctx.fillRect(0, 0, 300, 300);
						idRecord = id;
						numClick++;
						row = idRecord.substring(5, 6);
						column = idRecord.substring(7, 8);
						row = parseInt(row);
						column = parseInt(column);
						rowUp = row + 1;
						columnLeft = column - 1;
						columnRight = column + 1;
						alert("you won!!!");
					} else {
						alert("you lost");
						lifeDown();
					}

				} else {
					alert("you lost");
					lifeDown();
				}
			}
			else {
				alert("you lost");
				lifeDown();
			}
		}
		else {
			alert("you lost");
			lifeDown();
		}
	}
}


//instruction
function ins(){
	document.getElementById("instruction").style.display = "block";
}
function HomePage() {
    document.getElementById("instruction").style.display = "none";
    document.getElementById("leaderBoard").style.display = "none";
    document.getElementById("iconLeader").style.display = "block";
}
//sequence timer
function sequenceTimer(){
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
//life bar
function lifeBar() {
		document.getElementById("life").innerHTML = "Life:"+life;
}
function lifeDown(){
	life--;
	document.getElementById("life").innerHTML="Life:"+life;
}
//stone audio
function pushRock(){
	var p= document.getElementById("push-rock")
	p.play();
}
//game timer
function gameTimer() {
	var i = 30;
	var timer = setInterval(function(){
		if(i== -1){
			clearInterval(timer);
		}else{
			document.getElementById("timer").innerHTML = "Time: "+i;
			--i;
		}
	},1000);
}

//sequence timer
function sequenceTimer(){
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


//easter eggs

var fallObjects=new Array();

function newObject(url,height,width){
	fallObjects[fallObjects.length]=new Array(url,height,width);
}


var numObjs=20, waft=0, fallSpeed=15, wind=0;
newObject("egg1.png",38,50);
newObject("egg2.png",38,50);
newObject("egg3.png",38,50);
newObject("egg4.png",38,50);
newObject("egg5.png",28,50);

function winSize(){

	winWidth=(moz)?window.innerWidth:document.body.clientWidth;winHeight=(moz)?window.innerHeight:document.body.clientHeight;
}
function winOfy(){

	winOffset=(moz)?window.pageYOffset:document.body.scrollTop;
}

function fallObject(num,vari,nu){

	objects[num]=new Array(parseInt(Math.random()*(winWidth-waft)),-30,(parseInt(Math.random()*waft))*((Math.random()>0.5)?1:-1),0.02+Math.random()/20,0,1+parseInt(Math.random()*fallSpeed),vari,fallObjects[vari][1],fallObjects[vari][2]);
	
	if(nu==1){
		document.write('<img id="fO'+i+'" style="position:absolute; display:none" src="'+fallObjects[vari][0]+'">'); 
	}
}

function fall(){

	for(i=0;i<numObjs;i++){

		var fallingObject=document.getElementById('fO'+i);
		if((objects[i][1]>(winHeight-(objects[i][5]+objects[i][7])))||(objects[i][0]>(winWidth-(objects[i][2]+objects[i][8])))){
			fallObject(i,objects[i][6],0);
		}
		objects[i][0]+=wind;objects[i][1]+=objects[i][5];objects[i][4]+=objects[i][3];
		with(fallingObject.style){ 
			top=objects[i][1]+winOffset+"px";
			left=objects[i][0]+(objects[i][2]*Math.cos(objects[i][4]))+"px";
		}
	}
	
}

var objects=new Array(),winOffset=0,winHeight,winWidth,togvis,moz=(document.getElementById&&!document.all)?1:0;

winSize();

window.onscroll=winOfy;
window.onresize=winSize;

	for (i=0;i<numObjs;i++){

	fallObject(i,parseInt(Math.random()*fallObjects.length),1);
}


var t;
var OnOrOff = 1;

function showEggs(){
	for (i=0;i<numObjs;i++){

	var fallingObject=document.getElementById('fO'+i);
	fallingObject.style.display = "block"
}

     t = setInterval("fall()",30);

     OnOrOff--;
}

function stopEggs(){
		for (i=0;i<numObjs;i++){

	var fallingObject=document.getElementById('fO'+i);
	fallingObject.style.display = "none"
}

	clearInterval(t);

	OnOrOff++;

}
function eggs(){
	if(OnOrOff == 1){
		showEggs();
	} else{
		stopEggs();
	}
}

//leader board page
function leaderBoard(){
	document.getElementById("leaderBoard").style.display = "block";
	document.getElementById("iconLeader").style.display = "none";


}
