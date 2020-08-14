/**
 * ? 求两个数组的对称差。
 * @param { Array } pre 目标数组。
 * @param { Array } next 目标数组。
 * @return { Array } 结果数组。
 */
export const getSubtraction = (pre, next) => {
  let sA = new Set(pre),
    sB = new Set(next);
  return [...pre.filter(val => !sB.has(val)), ...next.filter(val => !sA.has(val))];
};

let arrA = [1, 2, 3, 4, 5],
  arrB = [3];
console.info(getSubtraction(arrA, arrB));
