//add image to sequence2
function addImage2(i,j) {
    var S = document.getElementById("2position" + i);
    var ctx = S.getContext("2d");
    var img = document.getElementById("symbol" + j);
    ctx.drawImage(img, 0,0,140,140);
    sequence[i] = j;
}
//add image to map2
function addImageToMap2(i,j,k) {
    var S = document.getElementById("2grid-"+i+"-"+j);
    var ctx = S.getContext("2d");
    var img = document.getElementById("symbol" + k);
    ctx.drawImage(img,0,0,150,150);
    map["2grid-"+i+"-"+j] = k;
}