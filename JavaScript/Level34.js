/**
 * Created by 宋与珩 on 2016-05-17.
 */
function Level34(){
    
    lvl++;
    timeGame=30;
    map = voidSymbol;
    sequence = voidSymbol;
    
    numClick = 0;
    
    document.getElementById("grid-container").style.display = "none";
 
    setTimeout(function () {
        document.getElementById("level1").style.display = "block";
        document.getElementById("sequence3").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
    }, 1000);
    sequenceTimer();
    
    
    setTimeout(function () {
        document.getElementById("sequence3").style.display = "none";
        document.getElementById("level1").style.display = "none";
        document.getElementById("grid-container2").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        lifeBar();
        gameTimer();
    }, 11000);
    generateSymbol3();
    checkSymbol3();
    
    
}