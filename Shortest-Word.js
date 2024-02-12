function findShort(s){
  let string=s.split(' ')
  let res=string.map(word => {
    return word.length
  })
  return Math.min(...res)
}
