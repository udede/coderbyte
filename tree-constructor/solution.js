function TreeConstructor(strArr) {
  const pairs = strArr.map(pair => pair.match(/\d+/g));
  let tree = {};

  pairs.forEach((p)=>{
    const child = p[0];
    const parent = p[1];
    tree[child] = tree[child] || {parent: null, children: []};
    tree[parent] = tree[parent] || {parent: null, children: []};
    tree[child].parent = parent;
    tree[parent].children.push(child);
  });

  if (Object.values(tree).every(node => node.children.length <= 2) &&
    Object.values(tree).filter(node => node.parent === null).length === 1) {
    return true;
  } else return false;
}
