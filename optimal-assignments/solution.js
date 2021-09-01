
function costMatch(matchAssignment, machineCosts) {
  return matchAssignment.reduce((acc, cur, idx) => acc + machineCosts[idx][cur], 0);
}

function* generateMatches(items) {
  if (items.length === 1) {
    yield items;
    return;
  }

  for (let match of generateMatches(items.slice(1))) {
    for (let i = 0; i <= match.length; i ++) {
      yield match.slice(0, i).concat([items[0]]).concat(match.slice(i));
    }
  }
}

function OptimalAssignments(strArr) { 
    const machineCosts = strArr.map(line => line.replace(/^\(|\)$/g, ''))
    .map(line => line.split(/,/)
    .map(i => parseInt(i, 10)));
    let bestMatchCost = Number.MAX_SAFE_INTEGER;
    let bestMatchAssignments = undefined;

    for (var match of generateMatches(machineCosts.map((_, i) => i))) {
        const cost = costMatch(match, machineCosts);
        if (cost < bestMatchCost) {
            bestMatchCost = cost;
            bestMatchAssignments = match.slice(0);
        }
    }

    return bestMatchAssignments.map((t, i) => `(${i+1}-${t+1})`).join('');

}    
