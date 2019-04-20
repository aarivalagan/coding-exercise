var decimalNumber = 32;
var binaryBit = solution(decimalNumber);
console.log(binaryBit);
function solution (decimalNumber){
	var binary=[], i=0, binary_bit=0;
  while(decimalNumber > 0){
  	binary[i] = (decimalNumber%2);
    decimalNumber = Math.floor(decimalNumber/2);
    i++;
  }
  console.log(binary);
  binary.reverse();
  console.log(binary);
  if(binary.includes(1,-4) ){
  	binary_bit = 1;
  }
  return binary_bit;
}
