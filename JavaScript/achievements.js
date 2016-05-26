
function finder() {
if(FC == false) {
    FC = true;
    achieve();
}
    eggs();
}
function starter(){
    if(SC == false) {
        SC = true;
        achieve();
    }
}

function highLvl(){
    if(LvlC == false) {
        SC = true;
        achieve();
    }
}

function lifeKeeper(){
    if(LifeC == false) {
        SC = true;
        achieve();
    }
}

function loadachievement() {

    if(FC == false) {
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

    if(SC == false) {
        var S = document.getElementById("ach2");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,80,80);

    }else{
        var S = document.getElementById("ach2");
        var ctx = S.getContext("2d");
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,80,80);
    }

    if(LvlC == false ){
        var S = document.getElementById("ach3");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,80,80);

    }else{
        var S = document.getElementById("ach3");
        var ctx = S.getContext("2d");
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,80,80);

    }

    if(LifeC == false) {
        var S = document.getElementById("ach4");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,80,80);

    }else{
        var S = document.getElementById("ach4");
        var ctx = S.getContext("2d");
        var img = document.getElementById("unlock");
        ctx.drawImage(img,0,0,80,80);
    }

    if(TC == false) {
        var S = document.getElementById("ach5");
        var ctx = S.getContext("2d");
        var img = document.getElementById("locker");
        ctx.drawImage(img,0,0,80,80);

    }else {
        var S = document.getElementById("ach5");
        var ctx = S.getContext("2d");
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