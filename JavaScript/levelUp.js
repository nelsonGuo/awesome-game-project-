/**
 * Created by Victor Zhao on 2016/5/18 0018.
 */
function lvlUp() {

    lvl++;
    document.getElementById("levelUp").innerHTML="Level"+lvl;
    timeGame=10;

    setTimeout(function () {
        document.getElementById("grid-container").style.display = "none";
        document.getElementById("level1").style.display = "block";
        document.getElementById("startPage").style.display = "none";
        document.getElementById("sequence1").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
    }, 1000);
    sequenceTimer();

    timeGame=30;
    setTimeout(function () {
        document.getElementById("sequence1").style.display = "none";
        document.getElementById("level1").style.display = "none";
        document.getElementById("grid-container").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        lifeBar();
        gameTimer();
    }, 11000);
    
    
    generateSymbol();
    checkSymbol();
    
}