
function finder() {
if(FC == false) {
    FC = true;
    document.getElementById("ach").innerHTML = "Congratulation! You have unlocked \"finder\".";
    achieve();
}
    eggs();
}



function loadachievement() {

    if(FC == false) {
        var S = document.getElementById("ach1");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,50,50);
    }else{
        var S = document.getElementById("ach1");
        var ctx = S.getContext("2d");
        ctx.clearRect(0,0,50,50);
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,50,50);
    }

    if(SC == false) {
        var S = document.getElementById("ach2");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,50,50);

    }else{
        var S = document.getElementById("ach2");
        var ctx = S.getContext("2d");
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,50,50);
    }

    if(LvlC == false ){
        var S = document.getElementById("ach3");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,50,50);

    }else{
        var S = document.getElementById("ach3");
        var ctx = S.getContext("2d");
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,50,50);

    }

    if(LifeC == false) {
        var S = document.getElementById("ach4");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,50,50);

    }else{
        var S = document.getElementById("ach4");
        var ctx = S.getContext("2d");
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,50,50);
    }

    if(TC == false) {
        var S = document.getElementById("ach5");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,50,50);

    }else {
        var S = document.getElementById("ach5");
        var ctx = S.getContext("2d");
        var img = document.getElementById("unlock");
        ctx.drawImage(img, 0, 0, 50, 50);
    }

}


function achievement(){

    document.getElementById("achievement").style.display = "block";
    document.getElementById("iconLeader").style.display = "none";
    document.getElementById("startPage").style.display = "none";
    loadachievement();
}
function achieve(){
    $(document).ready(function(){
        document.getElementById("ach").style.display = "block";
        $("#ach").fadeOut(2000);
    });

}