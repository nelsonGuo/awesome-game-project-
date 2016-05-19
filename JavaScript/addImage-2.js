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
function addImageToMap2(i,j,k) {
    var S = document.getElementById("2grid-"+i+"-"+j);
    var ctx = S.getContext("2d");
    var img = document.getElementById("symbol" + k);
    ctx.drawImage(img,5,5,150,150);
    map["2grid-"+i+"-"+j] = k;
}