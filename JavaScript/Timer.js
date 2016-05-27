//for php get the time value for rank
document.cookie="profile_viewer_uid=timerRank";
//game timer
function gameTimer() {
    countTimer++;
    var i=30;
     var timer = setInterval(function(){
        if(i== -1){
            clearInterval(timer);
            clearInterval(i);
            timeGame = 0;
            lose();
        }else if(countTimer < lvl) {
            clearInterval(timer);

         } else{
            document.getElementById("timer").innerHTML = "Time: "+i;
            --i;
            lose();
        }
    },1000);
}
//sequence timer 1
function sequenceTimer(){
    var i = 10;
    var timer = setInterval(function(){
        if(i== -1){
            clearInterval(timer);
        }else{
            document.getElementById("timer").innerHTML = "Time: "+i;
            --i;
        }
    },1000);
}
//sequence timer 2
function sequenceTimer2(){
    var i = 5;
    var timer = setInterval(function(){
        if(i== -1){
            clearInterval(timer);
        }else{
            document.getElementById("timer").innerHTML = "Time: "+i;
            --i;
        }
    },1000);
}
//time for rank
function rankTime() {
       clock = setInterval(function(){
       timerRank++;
    },1000);
}
//pass value for php
function passValue(){
    document.getElementById("value").value = timerRank;
    document.getElementById("levelValue").value = lvl;
}

