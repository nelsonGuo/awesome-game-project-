
function Level56(){
    

    map = voidSymbol;
    sequence = voidSymbol;

    numClick = 0;
    Restart2();
    document.getElementById("lvlUp").innerHTML="Level "+lvl;
    document.getElementById("grid-container2").style.display = "none";


    document.getElementById("showLevel").style.display ="block";
    document.getElementById("showLevel").innerHTML="Level " + lvl;

    setTimeout(function(){
        document.getElementById("showLevel").style.display ="none";
        document.getElementById("lvlUp").innerHTML="Level"+lvl;
        document.getElementById("level1").style.display = "block";
        document.getElementById("sequence3").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        sequenceTimer2();

    },2000);


    setTimeout(function () {
        document.getElementById("sequence3").style.display = "none";
        document.getElementById("level1").style.display = "none";
        document.getElementById("grid-container2").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        lifeBar();
        gameTimer();
    }, 8000);
    generateSymbol3();
    checkSymbol3();

}