/**
 * Created by 宋与珩 on 2016-05-17.
 */
function addImage(i,j) {
    var S = document.getElementById("position" + i);
    var ctx = S.getContext("2d");
    var img = document.getElementById("symbol" + j);
    ctx.drawImage(img,5,5);
    sequence[i] = j;
}
//add image to map
function addImageToMap(i,j,k) {
    var S = document.getElementById("grid-"+i+"-"+j);
    var ctx = S.getContext("2d");
    var img = document.getElementById("symbol" + k);
    ctx.drawImage(img,5,5);
    map["grid-"+i+"-"+j] = k;
}