function TreeConstructor(strArr) {
  // (child, parent) pairs
  var pairs = strArr.map(pair => pair.match(/\d+/g));
  var tree = {};

  // construct a tree
  for (var pair of pairs) {
    var child = pair[0];
    var parent = pair[1];
    // a node on a tree has its value as the key and the node itself as the value
    tree[child] = tree[child] || {parent: null, children: []};
    tree[parent] = tree[parent] || {parent: null, children: []};
    tree[child].parent = parent;
    tree[parent].children.push(child);
  }

  // a valid binary tree has only one root with no parent
  // and every node has <= 2 children
  if (Object.values(tree).every(node => node.children.length <= 2) &&
    Object.values(tree).filter(node => node.parent === null).length === 1) {
    return true;
  } else return false;
}
