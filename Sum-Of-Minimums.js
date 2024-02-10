function sumOfMinimums(arr) {
  let res=[]
  for(let i=0;i<arr.length;i++){
    res.push(Math.min(...arr[i]))
  }
  let sum=0
  for(let j=0;j<res.length;j++){
    sum+=res[j]
  }
  return sum
}
