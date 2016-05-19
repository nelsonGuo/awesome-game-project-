/**
 * Created by 宋与珩 on 2016-05-19.
 */
function generateSymbol3(){
    for(var i = 0;i < 6;i++){
        addImage3(i,getValue(5));
    }
    //generate random symbols for the map
    for(var i = 3; i>=0;i--) {
        for(var j = 3; j>=0;j--){
            addImageToMap2(i,j,getValue(5));
        }
    }

}