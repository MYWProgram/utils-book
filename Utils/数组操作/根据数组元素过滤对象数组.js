/**
 * ? 根据给定数组元素对应 JSON Array 中的 key 进行过滤。
 * @param { JSON Array } targetObj 目标对象数组。
 * @param { Array } targetArr 判断依据数组。
 * @param { String } key 需要进行判断的键名。
 * @return { JSON Array } 过滤后的 JSON Array.
 */
const filterValSet = (targetObj, targetArr, key) => {
  let s = new Set(targetArr);
  return targetObj.filter(item => s.has(item[key]));
};
const filterVal = (targetObj, targetArr, key) => {
  let s = new Set(targetArr);
  // * 使用 Set 结构的 has()
  return targetObj.filter(item => s.has(item[key]));
  // * 使用数组 indexOf()
  // return targetObj.filter(item => targetArr.indexOf(item[key]) > -1);
  // * 使用数组 includes()
  // return targetObj.filter(item => targetArr.includes(item[key]));
};
let object = [
    {
      key: 1,
      val: 'a'
    },
    {
      key: 2,
      val: 'b'
    },
    {
      key: 3,
      val: 'c'
    },
    {
      key: 4,
      val: 'd'
    },
    {
      key: 5,
      val: 'e'
    }
  ],
  arr = [1, 3, 5];
console.info(filterVal(object, arr, 'key'));
