/**
 * ? 计算数组中元素出现的次数。
 * @param { Array } arr 测试数组。
 * @return { Object } 数组元素为 key，重复个数为值的键值对。
 */
export const getRepetitionTime = arr => {
  return arr.reduce((prev, next) => {
    prev[next] = prev[next] + 1 || 1;
    return prev;
  }, {});
};

let fruits = ['apple', 'orange', 'apple', 'orange', 'pear', 'orange'];
console.info(getRepetitionTime(fruits));
