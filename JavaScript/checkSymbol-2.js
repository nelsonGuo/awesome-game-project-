//check symbols function next level
function checkSymbol2() {
    //step 1
    if(map["2grid-0-0"] != sequence[0] && map["2grid-0-1"] != sequence[0] && map["2grid-0-2"] != sequence[0] && map["2grid-0-3"] != sequence[0]){
        addImageToMap2(0,getValue(4),sequence[0]);
    }
    if(map["2grid-0-3"] == sequence[0]){
        if(map["2grid-0-2"] != sequence[1] && map["2grid-1-3"] != sequence[1]){
            var temp = Math.floor((Math.random() * 2));
            if(temp == 0) {
                addImageToMap2(1,3,sequence[1]);
            }else if(temp == 1) {
                addImageToMap2(0,2,sequence[1]);
            }
        }
        if(map["2grid-1-3"] == sequence[1]){
            if(map["2grid-2-3"] != sequence[2] && map["2grid-1-2"] != sequence[2]){
                var temp1 = Math.floor((Math.random() * 2));
                if(temp1 == 0) {
                    addImageToMap2(2,3,sequence[2]);
                }else if(temp1 == 1) {
                    addImageToMap2(1,2,sequence[2]);
                }
            }
        }
        else if(map["2grid-0-2"] == sequence[1]){
            addImageToMap2(1,2,sequence[2]);  
        }
        addImageToMap2(2,2,sequence[3]);
        addImageToMap2(3,2,sequence[4]);
    }
    else if (map["2grid-0-0"] == sequence[0]){
        if (map["2grid-0-1"] != sequence[1] && map["2grid-1-0"] != sequence[1]) {
            var temp2 = Math.floor((Math.random() * 2));
            if(temp2 == 0) {
                addImageToMap2(1,0,sequence[1]);
            }else if(temp2 == 1) {
                addImageToMap2(0,1,sequence[1]);
            }
        }
        if (map["2grid-1-0"] == sequence[1]){
            if(map["2grid-2-0"] != sequence[2] && map["2grid-1-1"] != sequence[2]){
                var temp3 = Math.floor((Math.random() * 2));
                if (temp3 == 0){
                    addImageToMap2(2,0,sequence[2]);
                }
                else if(temp3 == 1){
                    addImageToMap2(1,1,sequence[2]);
                }
            }
        }
        else if(map["2grid-0-1"] == sequence[1]){
            addImageToMap2(1,1,sequence[2])
        }
        addImageToMap2(2,1,sequence[3]);
        addImageToMap2(3,1,sequence[4]);
    }
    else if (map["2grid-0-2"] == sequence[0]){
        if (map["2grid-0-3"] != sequence[1] && map["2grid-1-2"] != sequence[1] && map["2grid-0-1"] != sequence[1]){
            var temp4 = Math.floor((Math.random() * 3));
            if(temp4 == 0){
                addImageToMap2(0,3,sequence[1]);
            }else if(temp4 == 1){
                addImageToMap2(0,1,sequence[1]);
            }else if(temp4 == 2){
                addImageToMap2(1,2,sequence[1]);
            }
        }
        if(map["2grid-0-3"] == sequence[1]){
            addImageToMap2(1,3,sequence[2]);
            addImageToMap2(2,3,sequence[3]);
            addImageToMap2(3,3,sequence[4]);
        }
        else if(map["2grid-0-1"] == sequence[1]){
            addImageToMap2(1,1,sequence[2]);
            addImageToMap2(2,1,sequence[3]);
            addImageToMap2(3,1,sequence[4]);
        }
        else if(map["2grid-1-2"] == sequence[1]){
            if (map["2grid-1-3"] != sequence[2] && map["2grid-2-2"] != sequence[2] && map["2grid-1-1"] != sequence[2]){
                var temp5 = Math.floor((Math.random() * 3));
                if(temp5 == 0){
                    addImageToMap2(1,3,sequence[2]);
                    addImageToMap2(2,3,sequence[3]);
                    addImageToMap2(3,3,sequence[4]);
                }
                else if(temp5 == 1) {
                    addImageToMap2(1,1,sequence[2]);
                    addImageToMap2(2,1,sequence[3]);
                    addImageToMap2(3,1,sequence[4]);
                }
                else if(temp5 == 2){
                    addImageToMap2(2,2,sequence[2]);
                    var temp6 = Math.floor((Math.random() * 2));
                    if(temp6 == 0){
                        addImageToMap2(2,3,sequence[3]);
                        addImageToMap2(3,3,sequence[4]);
                    }
                    else if(temp6 == 1){
                        addImageToMap2(2,1,sequence[3]);
                        addImageToMap2(3,1,sequence[4]);
                    }
                }
            }
        }
    }
    else if (map["2grid-0-1"] == sequence[0]) {
        if (map["2grid-0-2"] != sequence[1] && map["2grid-0-0"] != sequence[1] && map["2grid-1-1"] != sequence[1]) {
            var temp7 = Math.floor((Math.random() * 3));
            if(temp7 == 0) {
                addImageToMap2(0,2,sequence[1]);
            }else if(temp7 == 1) {
                addImageToMap2(0,0,sequence[1]);
            }else if(temp7 == 2) {
                addImageToMap2(1,1,sequence[1]);
            }
        }
        if(map["2grid-0-2"] == sequence[1]) {
            addImageToMap2(1,2,sequence[2]);
            addImageToMap2(2,2,sequence[3]);
            addImageToMap2(3,2,sequence[4]);
        }else if(map["2grid-0-0"] == sequence[1]) {
            addImageToMap2(1,0,sequence[2]);
            addImageToMap2(2,0,sequence[3]);
            addImageToMap2(3,0,sequence[4]);
        }else if(map["2grid-1-1"] == sequence[1]) {
            if (map["2grid-1-2"] != sequence[2] && map["2grid-2-1"] != sequence[2] && map["2grid-1-0"] != sequence[2]){
                var temp8 = Math.floor((Math.random() * 3));
                if(temp8 == 0){
                    addImageToMap2(1,2,sequence[2]);
                    addImageToMap2(2,2,sequence[3]);
                    addImageToMap2(3,2,sequence[4]);
                }
                else if(temp8 == 1) {
                    addImageToMap2(1,0,sequence[2]);
                    addImageToMap2(2,0,sequence[3]);
                    addImageToMap2(3,0,sequence[4]);
                }
                else if(temp8 == 2){
                    addImageToMap2(2,1,sequence[2]);
                    var temp9 = Math.floor((Math.random() * 2));
                    if(temp9 == 0){
                        addImageToMap2(2,2,sequence[3]);
                        addImageToMap2(3,2,sequence[4]);
                    }
                    else if(temp9 == 1){
                        addImageToMap2(2,0,sequence[3]);
                        addImageToMap2(3,0,sequence[4]);
                    }
                }
            }
        }
    }
}
