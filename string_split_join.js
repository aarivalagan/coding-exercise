var abc = "123_456", i=0;
var abc_string = abc.split("");
var abc_new = [];
console.log(abc_string);
abc_string.forEach((ab) => {console.log(ab);if(ab != "_"){
abc_new[i] = ab; i++; 
}});
var def = abc_new.join('');
console.log(def);
