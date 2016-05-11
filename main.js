//设置canvas 并插图
var S0, ctx0, img0;
var S1, ctx1, img1;
var S2, ctx2, img2;
var S3, ctx3, img3;
var S4, ctx4, img4;

var map = new Array();

function start() {
	document.getElementById("startPage").style.display = "none";
	document.getElementById("sequence1").style.display = "block";

	setTimeout(function () {
		document.getElementById("sequence1").style.display = "none";
		document.getElementById("grid-container").style.display = "block";

	}, 5000);


	S0 = document.getElementById("position0");
	ctx0 = S0.getContext("2d");
	img0 = document.getElementById("symbol1");
	ctx0.drawImage(img0,5,5);

	S1 = document.getElementById("position1");
	ctx1 = S1.getContext("2d");
	img1 = document.getElementById("symbol2");
	ctx1.drawImage(img1, 5, 5);

	S2 = document.getElementById("position2");
	ctx2 = S2.getContext("2d");
	img2 = document.getElementById("symbol0");
	ctx2.drawImage(img2, 5, 5);

	S3 = document.getElementById("position3");
	ctx3 = S3.getContext("2d");
	img3 = document.getElementById("symbol1");
	ctx3.drawImage(img3, 5, 5);




}


function ins(){
	document.getElementById("instruction").style.display = "block";
}
function HomePage() {
    document.getElementById("instruction").style.display = "none";

}





