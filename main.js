
function start(){
	document.getElementById("startPage").style.display = "none";
	document.getElementById("sequence1").style.display = "block";

	setTimeout(function ()
	{
		document.getElementById("sequence1").style.display = "none";
		document.getElementById("grid-container").style.display = "block";

	},5000);
}
function ins(){
	document.getElementById("instruction").style.display = "block";
}
function HomePage() {
    document.getElementById("instruction").style.display = "none";

}

//设置canvas 并插图
var S0=document.getElementById("position0");
var ctx0=S0.getContext("2d");
var img=new Image();
img.src="...";

ctx0.drawImage(img,10,10);


