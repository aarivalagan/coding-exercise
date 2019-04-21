var decimalNumber = 77;
var binaryBit = solution(decimalNumber);
console.log(binaryBit);
function solution (decimalNumber){
	var binary=[], i=0, binary_operations=0, binary_modified=[];
  while(decimalNumber > 0){
  	binary[i] = (decimalNumber%2);
    decimalNumber = Math.floor(decimalNumber/2);
    i++;
  }
  console.log(binary);
  binary = binary.reverse();
  console.log(binary);
  while(binary.every(zeroCheck)){
  	comBinaryOperation(binary);
  }
  function comBinaryOperation(binary){
  for(var j=0; j<binary.length; j++){
  	binary[binary.length-1] = (binary[binary.length-1] == 1) ? 0 : 1;
    binary_modified = binary.slice(j+1, binary.length);
    console.log(binary_modified);
    if(binary_modified.every(zeroCheck)){
    	binary[i] = (binary[i] == 1) ? 0 : 1;
    }
    binary_operations++;
    /*while (binary.every(zeroCheck)){
    	break;
    }*/
  }
  }
  /*if(binary.includes(1,-4) ){
  	binary_bit = 1;
  }*/
  console.log(binary);
  return binary_operations;
}
function zeroCheck(element){
	return element == 0;
}
