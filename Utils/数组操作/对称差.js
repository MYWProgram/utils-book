/**
 * 求两个数组的对称差；
 * @param { Array } pre
 * @param { Array } next
 * @return { Array } 结果数组。
 */
const test = (pre, next) => {
  let sA = new Set(pre), sB = new Set(next);
  return [...pre.filter(val => !sB.has(val)), ...next.filter(val => !sA.has(val))];
}
let arrA = [1, 2, 3, 4, 5], arrB = [3];
console.info(test(arrA, arrB));
