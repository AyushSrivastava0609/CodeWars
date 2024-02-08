function warnTheSheep(queue) {
let index=queue.indexOf("wolf")
let pos=queue.pop()
let pos1=queue.length-(index)
if(pos=="wolf"){
  return 'Pls go away and stop eating my sheep'
}else{
  return `Oi! Sheep number ${pos1}! You are about to be eaten by a wolf!`
}
}
