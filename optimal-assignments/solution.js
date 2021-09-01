
function getCost(m, mCosts) {
  return m.reduce(
    (acc, cur, idx) => acc + mCosts[idx][cur], 0);
}

function* getMatches(els) {
  if (els.length === 1) {
    yield els;
    return;
  }

  for (let m of getMatches(els.slice(1))) {
    for (let i = 0; i <= m.length; i ++) {
      yield m.slice(0, i)
      .concat([els[0]])
      .concat(m.slice(i));
    }
  }
}

function OptimalAssignments(strArr) { 
    const mCosts = strArr.map(line => line.replace(/^\(|\)$/g, ''))
    .map(line => line.split(/,/)
    .map(i => parseInt(i, 10)));
    let bestCost = Number.MAX_SAFE_INTEGER;
    let bestM = undefined;

    for (var m of getMatches(mCosts.map((_, i) => i))) {
        const cost = getCost(m, mCosts);
        if (cost < bestCost) {
            bestCost = cost;
            bestM = m.slice(0);
        }
    }

    return bestM.map((t, i) => `(${i+1}-${t+1})`).join('');
}   
