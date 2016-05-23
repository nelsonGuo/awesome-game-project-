//add image to sequence
function addImage(i,j) {
    var S = document.getElementById("position" + i);
    var ctx = S.getContext("2d");
    var img = document.getElementById("symbol" + j);
    ctx.drawImage(img,0,0,165,165);
    sequence[i] = j;
}
//add image to map
function addImageToMap(i,j,k) {
    var S = document.getElementById("grid-"+i+"-"+j);
    var ctx = S.getContext("2d");
    var img = document.getElementById("symbol" + k);
    ctx.drawImage(img,0,0,200,200);
    map["grid-"+i+"-"+j] = k;
}
