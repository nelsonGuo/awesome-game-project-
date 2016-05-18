/**
 * Created by 宋与珩 on 2016-05-17.
 */
function Level34(){
    map = voidSymbol;
    sequence = voidSymbol;
    gridCount = 0;
    increaseGrids();

    for(var i = 3; i>=0;i--) {
        for(var j = 3; j>=0;j--){
            addImageToMap2(i,j,getValue(5));
            gridCount++;
        }
    }


    
}