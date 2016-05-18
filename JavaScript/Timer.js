/**
 * Created by 宋与珩 on 2016-05-17.
 */
function gameTimer() {
    var i = 30;
    var timer = setInterval(function(){
        if(i== -1){
            clearInterval(timer);
        }else{
            document.getElementById("timer").innerHTML = "Time: "+i;
            --i;
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