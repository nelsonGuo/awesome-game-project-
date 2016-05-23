//life reduce
function lifeDown(){
    --life;
    lifeClear();
}
//life shapes
function lifeShape(){
    var S = document.getElementById("lifeTotem");
    var ctx = S.getContext("2d");
    var img = document.getElementById("lifeCross");
    ctx.drawImage(img,0,0,34,60);
    ctx.drawImage(img,34,0,34,60);
    ctx.drawImage(img,68,0,34,60);
}
//life clear
function lifeClear(){
    var S = document.getElementById("lifeTotem");
    var ctx = S.getContext("2d");
    switch (life){
        case 0:ctx.clearRect(0,0,34,60);
        case 1:ctx.clearRect(34,0,34,60);
        case 2:ctx.clearRect(68,0,34,60);
    }
}