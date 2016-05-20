/**
 * Created by 宋与珩 on 2016-05-19.
 */
/**
 * Created by 宋与珩 on 2016-05-17.
 */
function Level2(){
    

    map = voidSymbol;
    sequence = voidSymbol;
    numClick = 0;
    Restart1();

    document.getElementById("grid-container").style.display = "none";

    document.getElementById("showLevel").style.display ="block";
    document.getElementById("showLevel").innerHTML="Level " + lvl;

    
    document.getElementById("level1").style.display = "none";

    setTimeout(function(){
        document.getElementById("showLevel").style.display ="none";
        document.getElementById("lvlUp").innerHTML="Level"+lvl;
        document.getElementById("level1").style.display = "block";
        document.getElementById("sequence1").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        sequenceTimer();

    },2000);







    setTimeout(function () {
        document.getElementById("sequence1").style.display = "none";
        document.getElementById("level1").style.display = "none";
        document.getElementById("grid-container").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
        lifeBar();
        gameTimer();
    }, 13000);

    generateSymbol();
    checkSymbol();
}