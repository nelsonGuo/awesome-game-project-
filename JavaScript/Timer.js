document.cookie="profile_viewer_uid=timerRank";

function gameTimer() {
    countTimer++;
    var i=30;
     var timer = setInterval(function(){
        if(i== -1||countTimer < lvl){
            clearInterval(timer);
        }else{
            document.getElementById("timer").innerHTML = "Time: "+i;
            --i;
            //lose();
        }
    },1000);
}

//sequence timer
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
//time for rank
function rankTime() {
       clock = setInterval(function(){
       timerRank++;
    },1000);
}

function getValue(){
    document.getElementById("value").value = timerRank;
    document.getElementById("levelValue").value = lvl;

}

