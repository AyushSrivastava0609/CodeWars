function getMiddle(s)
{
  let index=Math.ceil(s.length/2)
  if(s.length%2==0){
    return s[index-1].concat(s[index])
  }else{
    return s[index-1]
  }
}
