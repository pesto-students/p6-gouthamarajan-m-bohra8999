/*
 Given an array arr{} of size N having distinct elements, 
 the task is to find the nextgreater element for each element of the array 
 in order of their appearance in the array.
 Next greater element of an element in the array is the nearest element on 
 the rightwhich is greater than the current element. 
 If there does not exist next greater of current element,
 then next greater element for current element is -1. 
 For example, next greaterof the last element is always -1
*/

function nextGreaterElement(arr) {
  let res = [];
  let stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const ele = arr[i];
    while (stack.length && stack[stack.length - 1] < ele) stack.pop();
    if (!stack.length) {
      res[i] = -1;
    } else {
      res[i] = stack[stack.length - 1];
    }
    stack.push(ele);
  }
  return res;
}

console.log(nextGreaterElement([6, 8, 0, 1, 3])); // [ 8, -1, 1, 3, -1 ]
// Time Complexity : O(N) Auxilliary Space : O(N)
