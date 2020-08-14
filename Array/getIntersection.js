/**
 * ? 求两个数组的交集。
 * @param { Array } pre 第一个目标数组。
 * @param { Array } next 第二个目标数组。
 * @return { Array } 交集结果数组。
 */
export const getIntersection = (pre, next) => {
  const s = new Set(next);
  return pre.filter(val => s.has(val));
};

// let arr1 = [1, 3, 5, 7],
//   arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.info(getIntersection(arr1, arr2));
