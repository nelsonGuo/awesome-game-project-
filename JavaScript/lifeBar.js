//life show
function lifeBar() {
    document.getElementById("life").innerHTML = "Life:"+life;
}
//life reduce
function lifeDown(){
    --life;
    document.getElementById("life").innerHTML="Life:"+life;

}
