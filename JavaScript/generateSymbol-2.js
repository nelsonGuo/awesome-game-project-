//generate random symbols for the sequence size 5
function generateSymbol2(){
		for(var i = 0;i < 5;i++){
			addImage2(i,getValue(5));
		}
		//generate random symbols for the map
		for(var i = 3; i>=0;i--) {
			for(var j = 3; j>=0;j--){
			addImageToMap2(i,j,getValue(5));
				gridCount++;
			}
		}
		
}