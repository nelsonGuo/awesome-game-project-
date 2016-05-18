/**
 * Created by Victor Zhao on 2016/5/17 0017.
 */
//life bar
function lifeBar() {
    document.getElementById("life").innerHTML = "Life:"+life;
}
function lifeDown(){
    --life;
    document.getElementById("life").innerHTML="Life:"+life;

}
