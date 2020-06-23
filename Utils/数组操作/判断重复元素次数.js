/**
 * ? 查找数组中重复元素的个数；
 * @param { Array } arr 测试数组；
 * @return { Object } 数组元素为 key，重复个数为值的键值对。
 */
const getWord = arr => {
  return arr.reduce((prev, next) => {
    prev[next] = prev[next] + 1 || 1;
    return prev;
  }, {})
}
let fruits = ["apple", "orange", "apple", "orange", "pear", "orange"];
console.info(getWord(fruits));
