/**
 * Created by 宋与珩 on 2016-05-19.
 */
/**
 * Created by 宋与珩 on 2016-05-17.
 */
function Level56(){
    

    map = voidSymbol;
    sequence = voidSymbol;

    numClick = 0;
    Restart2();
    document.getElementById("lvlUp").innerHTML="Level "+lvl;
    document.getElementById("grid-container2").style.display = "none";
        document.getElementById("level1").style.display = "block";
        document.getElementById("sequence3").style.display = "block";
        document.getElementById("game-header").style.display = "block";
        document.getElementById("top-bar").style.display = "block";
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