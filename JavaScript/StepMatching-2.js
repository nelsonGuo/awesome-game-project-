//step matching for 4*4
function stepMatching2(id) {
    if(numClick == 0) {
        if (id == "2grid-0-0" || id == "2grid-0-1" || id == "2grid-0-2"|| id == "2grid-0-3" ) {
            if (sequence[numClick] == map[id]) {
                var c = document.getElementById(id);
                c.style.opacity="0.5"; //darken the color of square when stepping on
                c.style.webkitBackdropFilter="brightness(50%)";
                pushRock();
                idRecord = id;
                numClick++;
                row = idRecord.substring(6,7);
                column = idRecord.substring(8,9);
                row = parseInt(row);
                column = parseInt(column);
                rowUp = row + 1;
                columnLeft = column - 1;
                columnRight = column + 1;
            }
            else {                         z = document.getElementById(id);
                z.style.border="1px red solid";//darken the color of square when stepping on
                lifeDown();
                lose();
                Restart2();
            }
        }
        else {                         z = document.getElementById(id);
            z.style.border="1px red solid";//darken the color of square when stepping on
            lifeDown();
            lose();
            Restart2();
        }
    }
    else {
        if(id == "2grid-"+row+"-"+columnLeft || id == "2grid-"+row+"-"+columnRight || id == "2grid-"+rowUp+"-"+column) {
            if (sequence[numClick] == map[id]) {
                if(numClick + 1 < sequence.length) {
                    var s = document.getElementById(id);
                    s.style.opacity="0.5";//darken the color of square when stepping on
                    s.style.webkitBackdropFilter="brightness(50%)";
                    pushRock();
                    idRecord = id;
                    numClick++;
                    row = idRecord.substring(6,7);
                    column = idRecord.substring(8,9);
                    row = parseInt(row);
                    column = parseInt(column);
                    rowUp = row + 1;
                    columnLeft = column - 1;
                    columnRight = column + 1;
                }
                else if (numClick + 1 == sequence.length) {
                    idRecord = id;
                    row = idRecord.substring(6,7);
                    row = parseInt(row);

                    if (row == 3){
                        var z = document.getElementById(id);
                        z.style.opacity="0.5";//darken the color of square when stepping on
                        pushRock();
                        numClick++;
                        column = idRecord.substring(8,9);
                        column = parseInt(column);
                        rowUp = row + 1;
                        columnLeft = column - 1;
                        columnRight = column + 1;
                        //alert("you won!!!");
                        lvl++;
                        if(lvl == 3) {
                            Level3();
                        }else if(lvl == 4){
                            Level4();
                        } else {
                            if(lvl == 15) {
                                highLvl();
                            }

                            if(lvl == 8 && life == 3) {
                                lifeKeeper();
                            }
                            
                            if(lvl == 10 && lifeKeeper < 200){
                                lifeKeeper ();
                            }
                            Level56();
                        }
                    } else {
                         z = document.getElementById(id);
                        z.style.border="1px red solid";//darken the color of square when stepping on
                        lifeDown();
                        lose();
                        Restart2();
                    }
                } else {
                    z = document.getElementById(id);
                    z.style.border="1px red solid";//darken the color of square when stepping on
                    lifeDown();
                    lose();
                    Restart2();
                }
            }
            else {
                z = document.getElementById(id);
                z.style.border="1px red solid";//darken the color of square when stepping on
                lifeDown();
                lose();
                Restart2();
            }
        }
        else {
            z = document.getElementById(id);
            z.style.border="1px red solid";//darken the color of square when stepping on
            lifeDown();
            lose();
            Restart2();
        }
    }
}