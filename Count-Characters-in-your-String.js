function count(string) {
  const charCount={};
  for(const char of string){
    if(charCount[char]){
      charCount[char]++
    }else{
      charCount[char]=1
    }
  }
  return charCount
}
