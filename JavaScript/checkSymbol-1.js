//check symbols function
function checkSymbol() {
    //step 1
    if(map["grid-0-0"] != sequence[0] && map["grid-0-1"] != sequence[0] && map["grid-0-2"] != sequence[0]){
        addImageToMap(0,getValue(3),sequence[0]);
    }
    if(map["grid-0-2"] == sequence[0]){
        if(map["grid-0-1"] != sequence[1] && map["grid-1-2"] != sequence[1]){
            var temp = Math.floor((Math.random() * 2));
            if(temp == 0) {
                addImageToMap(1,2,sequence[1]);
            }else if(temp == 1) {
                addImageToMap(0,1,sequence[1]);
            }
        }
        addImageToMap(1,1,sequence[2]);
        addImageToMap(2,1,sequence[3]);
    }else if (map["grid-0-0"] == sequence[0]){
        if (map["grid-0-1"] != sequence[1] && map["grid-1-0"] != sequence[1]) {
            var temp1 = Math.floor((Math.random() * 2));
            if(temp1 == 0) {
                addImageToMap(1,0,sequence[1]);
            }else if(temp1 == 1) {
                addImageToMap(0,1,sequence[1]);
            }
        }
        addImageToMap(1,1,sequence[2]);
        addImageToMap(2,1,sequence[3]);
    }else if (map["grid-0-1"] == sequence[0]) {
        if (map["grid-0-2"] != sequence[1] && map["grid-0-0"] != sequence[1] && map["grid-1-1"] != sequence[1]) {
            var temp2 = Math.floor((Math.random() * 3));
            if(temp2 == 0) {
                addImageToMap(0,2,sequence[1]);
            }else if(temp2 == 1) {
                addImageToMap(0,0,sequence[1]);
            }else if(temp2 == 2) {
                addImageToMap(1,1,sequence[1]);
            }
        }
        if(map["grid-0-2"] == sequence[1]) {
            addImageToMap(1,2,sequence[2]);
            addImageToMap(2,2,sequence[3]);
        }else if(map["grid-0-0"] == sequence[1]) {
            addImageToMap(1,0,sequence[2]);
            addImageToMap(2,0,sequence[3]);
        }else if(map["grid-1-1"]) {
            var temp3 = Math.floor((Math.random() * 2));
            if(temp3 == 0){
                addImageToMap(1,0,sequence[2]);
                addImageToMap(2,0,sequence[3]);
            }else if(temp3 == 1) {
                addImageToMap(1,2,sequence[2]);
                addImageToMap(2,2,sequence[3]);
            }
        }
    }
}
