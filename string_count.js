var s = "we test coders. Give us a try? ."
//var s = "Forget CVs.. Save time . x x"
var result = solution(s);
function solution(s){
	var string_array = s.split("." || "?" || "!");
  var subString_length = [];
  console.log(string_array);
	//if(s.includes)
  //result = 1;
  string_array.forEach(str_array => {
  var res = str_array.split(" ");var counter = 0; console.log(res);
  for(var i=0; i<res.length; i++){ 
  	if(res[i] != ""){
    	counter++;
    }
  }
  subString_length.push(counter);
  //console.log(str_array);
  });
  console.log(subString_length);
  result = Math.max(...subString_length);
  return result;
}
console.log(result);
