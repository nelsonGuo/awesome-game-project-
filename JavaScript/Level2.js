//level 2 flow
function Level2(){
    map = new Array();
    sequence = new Array();
    numClick = 0;
    Restart1();
    document.getElementById("grid-container").style.display = "none";
    document.getElementById("showLevel").style.display ="block";
    document.getElementById("showLevel").innerHTML="Level " + lvl;
    document.getElementById("level1").style.display = "none";
    document.getElementById("timer").style.display = "none";
    setTimeout(function(){
        document.getElementById("timer").style.display = "block";

        document.getElementById("showLevel").style.display ="none";
        document.getElementById("lvlUp").innerHTML="Level "+lvl;
        document.getElementById("level1").style.display = "block";
        document.getElementById("sequence1").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        sequenceTimer2();
    },2000);
    setTimeout(function () {
        
        document.getElementById("sequence1").style.display = "none";
        document.getElementById("level1").style.display = "none";
        document.getElementById("grid-container").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        gameTimer();
    }, 8000);
    generateSymbol();
    checkSymbol();
}