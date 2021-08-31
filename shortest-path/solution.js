function Counter(cons, at, to, path) {
    let min = '-1';
    for (let i = 0; i < cons.length; i++) {
        if (cons[i].indexOf(at) != -1) {
            if (cons[i].indexOf(to) != -1) {
                return path + '-' + to;
            } else {
                const next = cons[i].replace('-', '').replace(at, '');

                if (path.indexOf(next) == -1) {
                    const sp = Counter(cons, cons[i].replace(at, '').replace('-', ''), to, path + '-' + next);
                    if (sp != '-1') {
                        if (min == '-1') {
                            min = sp;
                        } else if (sp.length < min.length) {
                            min = sp;
                        }
                    }
                }
            }
        }
    }
    return min;
}

function ShortestPath(strArr) {

    const nodes = [];
    let cons = [];

    const from = strArr[1];
    let to = '';
    let N = strArr.shift();

    while (N--) {
        to = strArr[0];
        nodes.push(strArr.shift());
    }
    cons = strArr;

    return Counter(cons, from, to, from);

}
