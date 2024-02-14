function areYouPlayingBanjo(name) {
  let res=name[0].includes("R")
  let res1=name[0].includes("r")
  if(res==true||res1==true){
    return (name+" plays banjo")
  }else{
    return (name+" does not play banjo")
  }
}
