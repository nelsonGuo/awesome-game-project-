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
