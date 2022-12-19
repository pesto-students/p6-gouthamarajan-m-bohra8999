/*
 Given an expression string x.
 Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
*/
function checkParenthesis(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const parenthesis = str[i];
    const isPush = ['(', '[', '{'].includes(parenthesis);
    if (isPush) {
      stack.push(parenthesis);
    } else {
      stack.pop();
    }
  }
  return !stack.length;
}

console.log(checkParenthesis(''));
