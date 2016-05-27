
function finder() {
if(FC == false) {
    FC = true;
    document.cookie="FC"+"="+FC+";";
    $.getScript("achievements.php");
    achieve();
}
    eggs();
}
function starter(){
    if(SC == 0) {
        SC = 1;
        document.cookie="SC"+"="+SC+";"
        $.getScript("achievements.php");
        achieve();
    }
}
function highLvl(){
    if(LvlC == 0) {
        LvlC = 1;
        document.cookie="LvlC"+"="+LvlC+";"
        $.getScript("achievements.php");
        achieve();
    }
}

function lifeKeeper(){
    if(LifeC == 0) {
        LifeC = 1;
        document.cookie="LifeC"+"="+LifeC+";"
        $.getScript("achievements.php");
        achieve();
    }
}
function timeKeeper(){
    if(TC == 0) {
        TC = 1;
        document.cookie="TC"+"="+TC+";"
        $.getScript("achievements.php");
        achieve();
    }
}


function loadachievement() {

    if(FC == 0) {
        var S = document.getElementById("ach1");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,80,80);
    }else{
        var S = document.getElementById("ach1");
        var ctx = S.getContext("2d");
        ctx.clearRect(0,0,80,80);
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,80,80);
    }

    if(SC == 0) {
        var S = document.getElementById("ach2");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,80,80);

    }else{
        var S = document.getElementById("ach2");
        var ctx = S.getContext("2d");
        ctx.clearRect(0,0,80,80);
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,80,80);
    }

    if(LvlC == 0 ){
        var S = document.getElementById("ach3");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,80,80);

    }else{
        var S = document.getElementById("ach3");
        var ctx = S.getContext("2d");
        ctx.clearRect(0,0,80,80);
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,80,80);

    }

    if(LifeC == 0) {
        var S = document.getElementById("ach4");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,80,80);

    }else{
        var S = document.getElementById("ach4");
        var ctx = S.getContext("2d");
        ctx.clearRect(0,0,80,80);
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,80,80);
    }

    if(TC == 0) {
        var S = document.getElementById("ach5");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,80,80);

    }else {
        var S = document.getElementById("ach5");
        var ctx = S.getContext("2d");
        ctx.clearRect(0,0,80,80);
        var img = document.getElementById("unlock");
        ctx.drawImage(img, 0, 0, 80, 80);
    }

}


function achievement(){
    document.getElementById("achievement").style.display = "block";
    document.getElementById("iconLeader").style.display = "none";
    document.getElementById("startPage").style.display = "none";
    loadachievement();
}


function achieve(){
        $("#ach").fadeIn(1000);
        setTimeout($("#ach").fadeOut(1000),4000);
}
