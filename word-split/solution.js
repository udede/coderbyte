function WordSplit(strArr) { 

  let toCompare = strArr[0];
  let sequence = strArr[1].split(',');
  let answer = "";
  const valids = [];
  // Filter valid words
  sequence.forEach((w)=>{
    if (toCompare.includes(w)){
      valids.push(w);
    }
  });
  // Check valid words
  let stop = false;
  valids.every((wi,i)=>{
    valids.every((wj,j)=>{
      const currentToCompare = wi+wj;
      if (i !== j && (currentToCompare === toCompare)){
        answer = [wi,wj].join(',');
        stop = true;
        return false;
      }
      return true;
    });
    return !stop;
  });

  if (answer === ''){
    return 'not possible';
  }

  return answer;
}
