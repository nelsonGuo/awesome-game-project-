document.cookie="profile_viewer_uid=timeGame";

function gameTimer() {
    var i=30;
     var timer = setInterval(function(){
        if(i== -1){
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

function getTime(){
    document.getElementById("value").value = timeGame;
}