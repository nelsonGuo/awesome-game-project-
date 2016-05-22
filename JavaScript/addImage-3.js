//add image to sequence3
function addImage3(i,j) {
    var S = document.getElementById("3position" + i);
    var ctx = S.getContext("2d");
    var img = document.getElementById("symbol" + j);
    ctx.drawImage(img,0,0,150,150);
    sequence[i] = j;
}
//add image to map
function addImageToMap2(i,j,k) {
    var S = document.getElementById("2grid-"+i+"-"+j);
    var ctx = S.getContext("2d");
    var img = document.getElementById("symbol" + k);
    ctx.drawImage(img,0,0,150,150);
    map["2grid-"+i+"-"+j] = k;
}