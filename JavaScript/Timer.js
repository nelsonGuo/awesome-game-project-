document.cookie="profile_viewer_uid=timeGame";

function gameTimer() {
    var timer = setInterval(function(){
        if(timeGame== -1){
            clearInterval(timer);
        }else{
            document.getElementById("timer").innerHTML = "Time: "+timeGame;
            --timeGame;
            lose();
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