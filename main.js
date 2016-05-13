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
		 gameTimer();
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
	var i = 5;
	var timer = setInterval(function(){
		if(i== -1){
			clearInterval(timer);
		}else{
			document.getElementById("timer").innerHTML = "Time: "+i;
			--i;
		}
	},1000);
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
    var gravity = 0.9,
        canvas = null,
        ctx = null,
        balls =  [],
        bg = null,
        Ball = function (x, bg, ballSettings) {
        this.vy = 0;
        this.vx = 0;
        this.vyAdjust = -13;
        this.width = ballSettings.width;
        this.height = ballSettings.height;
        this.x = x;
        this.y = ballSettings.top;
        this.imagex = ballSettings.bgimagex;
        this.imagey = ballSettings.bgimagey;
        this.bg = bg;
        this.bounceFactor = ballSettings.factor;
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
            // Bounce the ball when it hits the bottom
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
        var i  = balls.length;
        clearCanvas();
        drawBackground();
        while (i--) {
            balls[i].move();
            balls[i].draw();
        }
    }

    function getRandomBallSettings(iBallTop) {
        var iImageRnd = Math.floor((Math.random() * 4) + 1),
            balls = {
                1: {
                    /* basketball */
                    bgimagex: 0,
                    bgimagey: 1205,
                    factor: 0.8,
                    height: 50,
                    top: iBallTop,
                    width: 50
                },
                2: {
                    /* Medicen ball */
                    bgimagex: 256,
                    bgimagey: 1205,
                    factor: 0.7,
                    top: iBallTop,
                    height: 50,
                    width: 50
                },
                3: {
                    /* Football */
                    bgimagex: 384,
                    bgimagey: 1205,
                    factor: 0.8,
                    top: -460,
                    width: 60,
                    height: 60
                },
                4: {
                    /* Tennis */
                    bgimagex: 128,
                    bgimagey: 1205,
                    factor: 0.8,
                    top: -460,
                    width: 60,
                    height: 60
                }
            };
        return balls[iImageRnd];
    }

    function loop() {
        update();
        window.requestAnimFrame(loop);
    }

    function setUpBalls() {
        var iBallTop,
            ball = null,
            x = 0;
        while (x < 950) {
            iBallTop = (0 - Math.floor((Math.random() * 400) + 1));
            ball = getRandomBallSettings(iBallTop);
            balls.push(new Ball(x, bg, ball));
            x += ball.width + 10;
        }
        loop();
    }

    function loadBackground() {
        // Load the background
        bg = new Image();
        bg.src = 'background.png';
        bg.onload = setUpBalls;
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

