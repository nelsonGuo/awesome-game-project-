//instruction page1
function ins(){
	document.getElementById("instruction").style.display = "block";
	document.getElementById("ins1").style.display = "block";
	document.getElementById("ins2").style.display = "none";
	document.getElementById("ins3").style.display = "none";
	document.getElementById("startPage").style.display = "none";
}
//instruction page2
function ins2() {
	document.getElementById("ins1").style.display = "none";
	document.getElementById("ins2").style.display = "block";
}
//instruction page3
function ins3(){
	document.getElementById("ins2").style.display = "none";
	document.getElementById("ins3").style.display = "block";
}
//leader board page
function leaderBoard(){
	document.getElementById("leaderBoard").style.display = "block";
	document.getElementById("iconLeader").style.display = "none";
	document.getElementById("startPage").style.display = "none";
}
//start page
function HomePage() {
    document.getElementById("instruction").style.display = "none";
    document.getElementById("leaderBoard").style.display = "none";
    document.getElementById("iconLeader").style.display = "block";
    document.getElementById("startPage").style.display = "block";
    document.getElementById("ins1").style.display = "none";
    document.getElementById("ins2").style.display = "none";
    document.getElementById("ins3").style.display = "none";
	document.getElementById("music1").style.display = "none";
	document.getElementById("achievement").style.display = "none";
}

function HomePage2() {

	life = 3;
	timeGame = 30;
	gridCount = 0;
	lvl=1;
	countTimer=0;
	timerRank =0;
	map = new Array();
	sequence = new Array();
	numClick = 0;
	clock = 0;
	quite = false;

	Restart1();
	passValue();
	
	$("form").submit();
	document.getElementById("quit").style.display = "none";

	document.getElementById("timer").style.display = "none";
	document.getElementById("game-header").style.display = "none";
	document.getElementById("grid-container").style.display = "none";
	document.getElementById("grid-container2").style.display = "none";
	document.getElementById("iconLeader").style.display = "block";
	document.getElementById("startPage").style.display = "block";
	closePopup();
}
//music volume
function changeV(){
	var hh = document.getElementById("music2").value;
	document.getElementById("music").volume=hh/10;
}
function changeV1(){
	var hh = document.getElementById("music3").value;
	document.getElementById("push-rock").volume=hh/10;
	document.getElementById("shake-rock").volume=hh/10;
}
//music volume page
function music(){
	document.getElementById("music1").style.display = "block";
	document.getElementById("startPage").style.display = "none";

}
