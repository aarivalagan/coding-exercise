var num = 630;
var hole_Count = hole(num);
console.log(hole_Count);
function hole(num){
var holeCount = 0, num_arr = 0;
	while(num>0){
  	num_arr = Math.floor(num%10);
  	num = Math.floor(num/10);
  	console.log("numbers",num, num_arr);
  	if(num_arr == 1 || num_arr == 2 || num_arr == 3 || num_arr == 5 || num_arr == 7){
  		holeCount += 0;
  	}
  	else if(num_arr == 0 || num_arr == 4 || num_arr == 6 || num_arr == 9){
  		holeCount += 1;
  	}
  	else{
  		holeCount += 2;
  	}
  	//return holeCount;
  }
	return holeCount;
}
