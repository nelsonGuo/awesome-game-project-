//level 3 flow
function Level3(){
    map = voidSymbol;
    sequence = voidSymbol;
    numClick = 0;
    Restart2();
    document.getElementById("lvlUp").innerHTML="Level "+lvl;
    document.getElementById("grid-container").style.display = "none";
    document.getElementById("showLevel").style.display ="block";
    document.getElementById("showLevel").innerHTML="Level " + lvl;
    setTimeout(function(){
        document.getElementById("showLevel").style.display ="none";
        document.getElementById("lvlUp").innerHTML="Level"+lvl;
        document.getElementById("level1").style.display = "block";
        document.getElementById("sequence2").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        sequenceTimer();
    },2000);
    setTimeout(function () {
        document.getElementById("sequence2").style.display = "none";
        document.getElementById("level1").style.display = "none";
        document.getElementById("grid-container2").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        lifeBar();
        gameTimer();
    }, 13000);
    generateSymbol2();
    checkSymbol2();
}