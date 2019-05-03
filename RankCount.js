var ranks = [2,3,2,2,5,6];
var result = solution(ranks);
function solution(ranks) {
    // write your code in JavaScript (Node.js 8.9.4)
    //var currentIndex = 0; 
    var report_inter = 0; var arr = [];
    //ranks.forEach(rank => {if(rank == ranks.index(currentIndex)){
        //report_inter++;}
        //currentIndex++;
    //})
    for (var i=0; i<ranks.length;i++){
        for(var j=i; j<ranks.length; j++){
         //if(ranks.includes(ranks[j]+1) && ranks[i]==ranks[j]){
         if(i!=j && ranks[i] == ranks[j]){
            arr.push(ranks[i]);  
         }
         
             //report_inter++;}
          
        }
    }
    console.log(arr);
    for(var k=0; k<arr.length;k++){
        if(ranks.includes(arr[k]+1)){
            report_inter++;
            console.log(report_inter);
        }
    }
    return report_inter;
}

console.log(result);
