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
			}
		}
		for(var i = 0; i<3;i++) {
			for(var j = 0; j<3;j++){
			if (map["grid-"+i+"-"+j] == sequence[i]){
			}
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
		if (id == "grid-0-0" || id == "grid-0-1" || id == "grid-0-2") {
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
//easter egg part
(function () {
    "use strict";
    // this function is strict...
    // RequestAnimFrame: a browser API for getting smooth animations
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    var gravity = 0.3,
        canvas = null,
        ctx = null,
        eggs =  [],
        bg = null,
        Egg = function (x, bg, eggSettings) {
        this.vy = 0;
        this.vx = 0;
        this.vyAdjust = -13;
        this.width = eggSettings.width;
        this.height = eggSettings.height;
        this.x = x;
        this.y = eggSettings.top;
        this.imagex = eggSettings.bgimagex;
        this.imagey = eggSettings.bgimagey;
        this.bg = bg;
        this.bounceFactor = eggSettings.factor;
        //Function to draw it
        this.draw = function () {
            ctx.drawImage(this.bg,
                this.imagex, this.imagey,
                128, 128,
                this.x, this.y,
                this.width, this.height
            );
        };
        this.impact = function () {
            this.vy = this.vyAdjust;
        };
        this.move = function () {
            this.y += this.vy;
            this.vy += gravity;
            // Bounce the egg when it hits the bottom
            if ((this.y + this.height) > canvas.height - 10) {
                this.impact();
                this.vyAdjust = (this.vyAdjust * this.bounceFactor);
            }
        };
    };
    function clearCanvas() {
        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    function drawBackground() {
        // Draw the car onto the canvas
        ctx.drawImage(bg, 0, 0, 1000, 800);
    }
    function update() {
        var i  = eggs.length;
        clearCanvas();
        drawBackground();
        while (i--) {
            eggs[i].move();
            eggs[i].draw();
        }
    }
    function getRandomEggSettings(iEggTop) {
        var iImageRnd = Math.floor((Math.random() * 4) + 1),
            eggs = {
                1: {
                    /* egg1 */
                    bgimagex: 0,
                    bgimagey: 1205,
                    factor: 0.8,
                    height: 50,
                    top: iEggTop,
                    width: 50
                },
                2: {
                    /* egg2 */
                    bgimagex: 256,
                    bgimagey: 1205,
                    factor: 0.7,
                    top: iEggTop,
                    height: 50,
                    width: 50
                },
                3: {
                    /* egg3 */
                    bgimagex: 384,
                    bgimagey: 1205,
                    factor: 0.8,
                    top: -460,
                    width: 60,
                    height: 60
                },
                4: {
                    /* egg4 */
                    bgimagex: 128,
                    bgimagey: 1205,
                    factor: 0.8,
                    top: -460,
                    width: 60,
                    height: 60
                }
            };
        return eggs[iImageRnd];
    }
    function loop() {
        update();
        window.requestAnimFrame(loop);
    }
    function setUpEggs() {
        var iEggTop,
            egg = null,
            x = 0;
        while (x < 950) {
            iEggTop = (0 - Math.floor((Math.random() * 400) + 1));
            egg = getRandomEggSettings(iEggTop);
            eggs.push(new Egg(x, bg, egg));
            x += egg.width + 10;
        }
        loop();
    }
    function loadBackground() {
        // Load the background
        bg = new Image();
        bg.src = 'background.png';
        bg.onload = setUpEggs;
    }
    function init() {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        loadBackground();
    }
    document.addEventListener('click', function () {
          init();
    }, false);
}());
function showEggs(){
    document.getElementById("canvas").style.display = "block";
}
