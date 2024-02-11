function fibonacci(n) {
         first=0;
         second=1;
        let result=[]
        for(let i=0;i<n;i++){
            if(i===0){
                result.push(0)
            }else if(i===1){
               result.push(1)
            }else{
                let sum=first+second;
                result.push(sum)
                first=second;
                second=sum;
}
   }
return result
}
