/**
 * Created by 宋与珩 on 2016-05-18.
 */
function checkSymbol3() {
    //step 1
    if(map["2grid-0-0"] != sequence[0] && map["2grid-0-1"] != sequence[0] && map["2grid-0-2"] != sequence[0]&& map["2grid-0-3"] != sequence[0]){
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
            if(map["2grid-2-3"] == sequence[2]){
                addImageToMap2(2,2,sequence[3]);
                addImageToMap2(2,1,sequence[4]);
                addImageToMap2(3,1,sequence[5]);
            }
            else if(map["2grid-1-2"] == sequence[2]) {
                var temp2 = Math.floor((Math.random() * 2));
                if (temp2 == 0) {
                    addImageToMap2(2,2, sequence[3]);
                    addImageToMap2(2,1, sequence[4]);
                    addImageToMap2(3,1, sequence[5]);
                } else if (temp2 == 1) {
                    addImageToMap2(1,1, sequence[3]);
                    addImageToMap2(2,1, sequence[4]);
                    addImageToMap2(3,1, sequence[5]);
                }
            }
        }
        if(map["2grid-0-2"] = sequence[1]){
            if(map["2grid-1-2"] != sequence[2] && map["2grid-0-1"] != sequence[2]){
                var temp3 = Math.floor((Math.random() * 2));
                if(temp3 == 0) {
                    addImageToMap2(1,2,sequence[2]);
                }else if(temp3 == 1) {
                    addImageToMap2(0,1,sequence[2]);
                }
                
            }
            if(map["2grid-1-2"] = sequence[2]){
                if(map["2grid-1-3"] != sequence[3] && map["2grid-1-1"] != sequence[3]&& map["2grid-2-2"] != sequence[3]){
                    var temp4 = getValue(3);
                    if(temp4== 0){
                        addImageToMap2(1,3,sequence[3]);
                    }else if(temp4 ==1) {
                        addImageToMap2(2,2, sequence[3]);
                    }
                    else if(temp4 ==2) {
                            addImageToMap2(1,1,sequence[3]);
                    }

                }
                if(map["2grid-1-3"] == sequence[3]){
                    addImageToMap2(2,3, sequence[4]);
                    addImageToMap2(3,3, sequence[5]);
                }
                else if(map["2grid-2-2"] == sequence[3]){
                    var temp5 = Math.floor((Math.random() * 2));
                    if(temp5 == 0) {
                        addImageToMap2(2,3,sequence[4]);
                        addImageToMap2(3,3,sequence[5]);
                    }else if(temp5 == 1) {
                        addImageToMap2(2,1,sequence[4]);
                        addImageToMap2(3,1,sequence[5]);

                    }
                }
                else if(map["2grid-1-1"] == sequence[3]){
                    addImageToMap2(2,1,sequence[4]);
                    addImageToMap2(3,1,sequence[5]);
                }
            }
            else if(map["2grid-0-1"] == sequence[2]){
                addImageToMap2(1,1,sequence[3]);
                addImageToMap2(2,1,sequence[4]);
                addImageToMap2(3,1,sequence[5]);
            }

        }




    }
    else if(map["2grid-0-2"] == sequence[0]){
        if(map["2grid-0-3"] != sequence[1] && map["2grid-1-2"] != sequence[1]&& map["2grid-0-1"] != sequence[1]){
            var temp6 = getValue(3);
            if(temp6== 0){
                addImageToMap2(0,3,sequence[1]);
            }else if(temp6 ==1) {
                addImageToMap2(1,2, sequence[1]);
            }
            else if(temp6 ==2) {
                addImageToMap2(0,1,sequence[1]);
            }
        }
        if(map["2grid-0-3"] == sequence[1]){
            addImageToMap2(1,3, sequence[2]);
            if(map["2grid-2-3"] != sequence[3] && map["2grid-1-2"] != sequence[3]){
                var temp7 = Math.floor((Math.random() * 2));
                if(temp7 == 0) {
                    addImageToMap2(2,3,sequence[3]);
                }else if(temp7 == 1) {
                    addImageToMap2(1,2,sequence[3]);
                }
            }
            addImageToMap2(2,2,sequence[4]);
            addImageToMap2(3,2,sequence[5]);

        }
        else if(map["2grid-1-2"] == sequence[1]){
            if(map["2grid-1-3"] != sequence[2] && map["2grid-2-2"] != sequence[2]&& map["2grid-1-1"] != sequence[2]){
                var temp8 = getValue(3);
                if(temp8== 0){
                    addImageToMap2(1,3,sequence[2]);
                }else if(temp8 ==1) {
                    addImageToMap2(2,2, sequence[2]);
                }
                else if(temp8 ==2) {
                    addImageToMap2(1,1,sequence[2]);
                }
            }
            if(map["2grid-1-3"] == sequence[2]){
                addImageToMap2(2,3,sequence[3]);
                addImageToMap2(2,2,sequence[4]);
                addImageToMap2(3,2,sequence[5]);
            }
            else if(map["2grid-2-2"] == sequence[2]){
                addImageToMap2(2,1,sequence[3]);
                addImageToMap2(2,0,sequence[4]);
                addImageToMap2(3,0,sequence[5]);
            }
            else if(map["2grid-1-1"] == sequence[2]){
                if(map["2grid-2-1"] != sequence[3] && map["2grid-1-0"] != sequence[3]){
                    var temp9 = Math.floor((Math.random() * 2));
                    if(temp9 == 0) {
                        addImageToMap2(2,1,sequence[3]);
                    }else if(temp9 == 1) {
                        addImageToMap2(1,0,sequence[3]);
                    }
                }
                if(map["2grid-2-1"] == sequence[3]){
                    var temp10 = Math.floor((Math.random() * 2));
                    if(temp10 == 0) {
                        addImageToMap2(2,2,sequence[4]);
                        addImageToMap2(3,2,sequence[5]);
                    }else if(temp10 == 1) {
                        addImageToMap2(2,0,sequence[4]);
                        addImageToMap2(3,0,sequence[5]);
                    }
                }
                else if(map["2grid-1-0"] == sequence[3]){
                    addImageToMap2(2,0,sequence[4]);
                    addImageToMap2(3,0,sequence[5]);
                }
            }


        }
        else if(map["2grid-0-1"] == sequence[1]){
            if(map["2grid-1-1"] != sequence[2] && map["2grid-0-0"] != sequence[2]){
                var temp11 = Math.floor((Math.random() * 2));
                if(temp11 == 0) {
                    addImageToMap2(1,1,sequence[2]);
                }else if(temp11 == 1) {
                    addImageToMap2(0,0,sequence[2]);
                }
            }
            if(map["2grid-1-1"] == sequence[2]){
                if(map["2grid-2-1"] != sequence[3] && map["2grid-1-0"] != sequence[3]&&map["2grid-1-2"] != sequence[3]){
                    var temp12 = Math.floor((Math.random() * 3));
                    if(temp12 == 0) {
                        addImageToMap2(2,1,sequence[3]);
                    }else if(temp12 == 1) {
                        addImageToMap2(1,0,sequence[3]);
                    }else if(temp12 == 2) {
                        addImageToMap2(1,2,sequence[3]);
                    }

                }
                if(map["2grid-2-1"] == sequence[3]){
                    var temp13 = Math.floor((Math.random() * 2));
                    if(temp13 == 0) {
                        addImageToMap2(2,2,sequence[4]);
                        addImageToMap2(3,2,sequence[5]);
                    }else if(temp13 == 1) {
                        addImageToMap2(2,0,sequence[4]);
                        addImageToMap2(3,0,sequence[5]);
                    }
                }
                else if(map["2grid-1-0"] == sequence[3]){
                    addImageToMap2(2,0,sequence[4]);
                    addImageToMap2(3,0,sequence[5]);
                }
                else if(map["2grid-1-2"] == sequence[3]){
                    addImageToMap2(2,2,sequence[4]);
                    addImageToMap2(3,2,sequence[5]);
                }
            }
            else if(map["2grid-0-0"] == sequence[2]){
                addImageToMap2(1,0,sequence[3]);
                addImageToMap2(2,0,sequence[4]);
                addImageToMap2(3,0,sequence[5]);
            }

        }



    }
    else if(map["2grid-0-0"] == sequence[0]){
        if(map["2grid-0-1"] != sequence[1] && map["2grid-1-0"] != sequence[1]){
            var temp14 = Math.floor((Math.random() * 2));
            if(temp14 == 0) {
                addImageToMap2(0,1,sequence[1]);
            }else if(temp14 == 1) {
                addImageToMap2(1,0,sequence[1]);
            }

        }
        if(map["2grid-1-0"] == sequence[1]){
            if(map["2grid-2-0"] != sequence[2] && map["2grid-1-1"] != sequence[2]){
                var temp15 = Math.floor((Math.random() * 2));
                if(temp15 == 0) {
                    addImageToMap2(2,0,sequence[2]);
                }else if(temp15 == 1) {
                    addImageToMap2(1,1,sequence[2]);
                }
            }
            if(map["2grid-2-0"] == sequence[2]){
                addImageToMap2(2,1,sequence[3]);
                addImageToMap2(2,2,sequence[4]);
                addImageToMap2(3,2,sequence[5]);
            }
            else if(map["2grid-1-1"] == sequence[2]) {
                var temp16 = Math.floor((Math.random() * 2));
                if (temp16 == 0) {
                    addImageToMap2(2,1, sequence[3]);
                    addImageToMap2(2,2, sequence[4]);
                    addImageToMap2(3,2, sequence[5]);
                } else if (temp16 == 1) {
                    addImageToMap2(1,2, sequence[3]);
                    addImageToMap2(2,2, sequence[4]);
                    addImageToMap2(3,2, sequence[5]);
                }
            }
        }
        if(map["2grid-0-1"] = sequence[1]){
            if(map["2grid-1-1"] != sequence[2] && map["2grid-0-2"] != sequence[2]){
                var temp17 = Math.floor((Math.random() * 2));
                if(temp17 == 0) {
                    addImageToMap2(1,1,sequence[2]);
                }else if(temp17 == 1) {
                    addImageToMap2(0,2,sequence[2]);
                }

            }
            if(map["2grid-1-1"] = sequence[2]){
                if(map["2grid-1-0"] != sequence[3] && map["2grid-1-2"] != sequence[3]&& map["2grid-2-1"] != sequence[3]){
                    var temp18 = getValue(3);
                    if(temp18== 0){
                        addImageToMap2(1,0,sequence[3]);
                    }else if(temp18 ==1) {
                        addImageToMap2(2,1, sequence[3]);
                    }
                    else if(temp18 ==2) {
                        addImageToMap2(1,2,sequence[3]);
                    }

                }
                if(map["2grid-1-0"] == sequence[3]){
                    addImageToMap2(2,0, sequence[4]);
                    addImageToMap2(3,0, sequence[5]);
                }
                else if(map["2grid-2-1"] == sequence[3]){
                    var temp19 = Math.floor((Math.random() * 2));
                    if(temp19 == 0) {
                        addImageToMap2(2,0,sequence[4]);
                        addImageToMap2(3,0,sequence[5]);
                    }else if(temp19 == 1) {
                        addImageToMap2(2,2,sequence[4]);
                        addImageToMap2(3,2,sequence[5]);

                    }
                }
                else if(map["2grid-1-2"] == sequence[3]){
                    addImageToMap2(2,2,sequence[4]);
                    addImageToMap2(3,2,sequence[5]);
                }
            }
            else if(map["2grid-0-2"] == sequence[2]){
                addImageToMap2(1,2,sequence[3]);
                addImageToMap2(2,2,sequence[4]);
                addImageToMap2(3,2,sequence[5]);
            }

        }




    }
    else if(map["2grid-0-1"] == sequence[0]){
        if(map["2grid-0-0"] != sequence[1] && map["2grid-1-1"] != sequence[1]&& map["2grid-0-2"] != sequence[1]){
            var temp20 = getValue(3);
            if(temp20== 0){
                addImageToMap2(0,0,sequence[1]);
            }else if(temp20 ==1) {
                addImageToMap2(1,1, sequence[1]);
            }
            else if(temp20 ==2) {
                addImageToMap2(0,2,sequence[1]);
            }
        }
        if(map["2grid-0-0"] == sequence[1]){
            addImageToMap2(1,0, sequence[2]);
            if(map["2grid-2-0"] != sequence[3] && map["2grid-1-1"] != sequence[3]){
                var temp21 = Math.floor((Math.random() * 2));
                if(temp21 == 0) {
                    addImageToMap2(2,0,sequence[3]);
                }else if(temp21 == 1) {
                    addImageToMap2(1,1,sequence[3]);
                }
            }
            addImageToMap2(2,1,sequence[4]);
            addImageToMap2(3,1,sequence[5]);

        }
        else if(map["2grid-1-1"] == sequence[1]){
            if(map["2grid-1-0"] != sequence[2] && map["2grid-2-1"] != sequence[2]&& map["2grid-1-2"] != sequence[2]){
                var temp22 = getValue(3);
                if(temp22== 0){
                    addImageToMap2(1,0,sequence[2]);
                }else if(temp22 ==1) {
                    addImageToMap2(2,1, sequence[2]);
                }
                else if(temp22 ==2) {
                    addImageToMap2(1,2,sequence[2]);
                }
            }
            if(map["2grid-1-0"] == sequence[2]){
                addImageToMap2(2,0,sequence[3]);
                addImageToMap2(2,1,sequence[4]);
                addImageToMap2(3,1,sequence[5]);
            }
            else if(map["2grid-2-1"] == sequence[2]){
                addImageToMap2(2,2,sequence[3]);
                addImageToMap2(2,3,sequence[4]);
                addImageToMap2(3,3,sequence[5]);
            }
            else if(map["2grid-1-2"] == sequence[2]){
                if(map["2grid-2-2"] != sequence[3] && map["2grid-1-3"] != sequence[3]){
                    var temp23 = Math.floor((Math.random() * 2));
                    if(temp23 == 0) {
                        addImageToMap2(2,2,sequence[3]);
                    }else if(temp23 == 1) {
                        addImageToMap2(1,3,sequence[3]);
                    }
                }
                if(map["2grid-2-2"] == sequence[3]){
                    var temp24 = Math.floor((Math.random() * 2));
                    if(temp24 == 0) {
                        addImageToMap2(2,1,sequence[4]);
                        addImageToMap2(3,1,sequence[5]);
                    }else if(temp24 == 1) {
                        addImageToMap2(2,3,sequence[4]);
                        addImageToMap2(3,3,sequence[5]);
                    }
                }
                else if(map["2grid-1-3"] == sequence[3]){
                    addImageToMap2(2,3,sequence[4]);
                    addImageToMap2(3,3,sequence[5]);
                }
            }


        }
        else if(map["2grid-0-2"] == sequence[1]){
            if(map["2grid-1-2"] != sequence[2] && map["2grid-0-3"] != sequence[2]){
                var temp25 = Math.floor((Math.random() * 2));
                if(temp25 == 0) {
                    addImageToMap2(1,2,sequence[2]);
                }else if(temp25 == 1) {
                    addImageToMap2(0,3,sequence[2]);
                }
            }
            if(map["2grid-1-2"] == sequence[2]){
                if(map["2grid-2-2"] != sequence[3] && map["2grid-1-3"] != sequence[3]&&map["2grid-1-1"] != sequence[3]){
                    var temp26 = Math.floor((Math.random() * 3));
                    if(temp26 == 0) {
                        addImageToMap2(2,2,sequence[3]);
                    }else if(temp26 == 1) {
                        addImageToMap2(1,3,sequence[3]);
                    }else if(temp26 == 2) {
                        addImageToMap2(1,1,sequence[3]);
                    }

                }
                if(map["2grid-2-2"] == sequence[3]){
                    var temp27 = Math.floor((Math.random() * 2));
                    if(temp27 == 0) {
                        addImageToMap2(2,1,sequence[4]);
                        addImageToMap2(3,1,sequence[5]);
                    }else if(temp27 == 1) {
                        addImageToMap2(2,2,sequence[4]);
                        addImageToMap2(3,3,sequence[5]);
                    }
                }
                else if(map["2grid-1-3"] == sequence[3]){
                    addImageToMap2(2,3,sequence[4]);
                    addImageToMap2(3,3,sequence[5]);
                }
                else if(map["2grid-1-1"] == sequence[3]){
                    addImageToMap2(2,1,sequence[4]);
                    addImageToMap2(3,1,sequence[5]);
                }
            }
            else if(map["2grid-0-3"] == sequence[2]){
                addImageToMap2(1,3,sequence[3]);
                addImageToMap2(2,3,sequence[4]);
                addImageToMap2(3,3,sequence[5]);
            }

        }



    }



}