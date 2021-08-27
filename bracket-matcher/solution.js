function BracketMatcher(str) {
  let open = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') open++;
    if (str[i] === ')') open--;
    if (open < 0) return 0;
  }

  return open ? 0 : 1;
}
