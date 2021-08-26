function checkSubstring(str, l) {
  for (let i = 0; i < str.length; i++) {
    if (l.indexOf(str[i]) !== -1) {
      l = l.replace(str[i], '');
    }
  }
  return (l.length === 0);
}

function MinWindowSubstring(strArr) { 

    let s = strArr[0];
    let sArr = s.split("");
    let letters = strArr[1];
    
    let toReturn = null;
    
    sArr.forEach((x,i)=>{
      sArr.forEach((y,j)=>{
        let toCheck = s.substr(i, j-i+1);
        if (checkSubstring(toCheck, letters) && (toReturn === null || toCheck.length < toReturn.length)) {
          toReturn = toCheck;
        }
      });
    });
    
    return toReturn;
    
}
