/**
 * ? 普通数组去重；
 * @param { Array } arr 测试数组。 
 */
const deWeight = arr => {
  return arr.filter((item, index, self) => self.indexOf(item) === index);
}
let arr = [1, 1, 3, 4, 5, 3, 4];
console.info(deWeight(arr));

/**
 * ? JSON Array 去重；
 * @param { Array } arr 需要去重的目标数组；
 * @param { String } flag 去重依据 key；
 * @return { JSON Array } 去重之后的 JSON Array。
 */
const arrDeduplication = (arr, flag) => {
  // * 保存数组中元素的对象。
  let hash = {};
  arr = arr.reduce((item, next) => {
    hash[next[flag]] ? '' : (hash[next[flag]] = true && item.push(next));
    return item;
  }, []);
  return arr;
};
var testArr = [
  {
    name: "ZYTX",
    age: "24",
    gender: "male"
  },
  {
    name: "ZYTA",
    age: "24",
    gender: "female"
  },
  {
    name: "ZDTX",
    age: "24",
    gender: "unknown"
  },
  {
    name: "ZYTX",
    age: "24",
    gender: "male"
  }
];
console.info(arrDeduplication(testArr, 'gender'));
