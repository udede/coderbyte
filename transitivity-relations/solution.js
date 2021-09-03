function TransitivityRelations(strArr) { 
  let arr = [];
  let res = [];
  for (let i=0; i<strArr.length; i++) {
    arr.push(strArr[i].replace("(","").replace(")","").split(","));  // [ [ 1, 1, 1 ], [ 0, 1, 1 ], [ 0, 1, 1 ] ]
  }
  
  for (let j in arr) {
    for (let k in arr[j]) {
        arr[j][k] = Number(arr[j][k]); // converts to numbers
    }
  }
  
  for (let l in arr)
    for (let m in arr[0])
      if (arr[l][m] === 1)
        for (let o = 0; o < arr[0].length; o++) { 
          if(arr[m][o] === 1 && (arr[l][o] === 0 && l != o)) {
            res.push("(" + l + "," + o + ")");
            arr[l][o] = 1;
          }
        }
  return res.length === 0 ? "transitive" : res.sort().join("-");
}
