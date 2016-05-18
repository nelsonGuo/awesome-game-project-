/**
 * Created by 宋与珩 on 2016-05-17.
 */
function increaseGrids() {


    document.getElementById("grid-container").style.display = "none";
    document.getElementById("grid-container2").style.display = "block";

    for (var i = 0; i < 4; i++) {
        addImage(i, getValue(5));
    }
    //generate random symbols for the map
    for (var i = 2; i >= 0; i--) {
        for (var j = 2; j >= 0; j--) {
            addImageToMap(i, j, getValue(5));
            gridCount++;
        }

    }
}