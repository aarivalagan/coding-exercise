function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //hash = new Map();
    var moment = 0; var inital = 0; var bulb_flag = false; var arr = [];
    for(var k=0; k<A.length; k++){
        //hash[A[k]] = A[k+1];
    //} 
        arr.push(A[k]);
        //if(A.indexOf(A[k]) === 0){
            //moment++;
        //}
        if(A.includes(A[k])){
            //if(A.includes(A[k-1]) || A.includes(A[k+1])){
            //moment++;}
            for(var j=1; j<A[k]; j++){
                if(arr.includes(j)){
                    bulb_flag =true;
                }
            }
            //arr.forEach(arr1 => { if(arr.includes(arr1)) {bulb_flag = true;} });
            if(bulb_flag == true){
                moment++;
            }
        }
    }
    return moment;
}



