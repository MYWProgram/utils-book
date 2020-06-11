/**
 * * 数组元素为对象的数组去重。
 * @param { Array } arr 需要去重的目标数组；
 * @param { Object } hash 保存数组中元素的对象。
 * 
 */
var testArr = [
  {
    name: "ZYTX",
    age: "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    gender: "AAAAAA.doc"
  },
  {
    name: "ZYTA",
    age: "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    gender: "BBBBBB.doc"
  },
  {
    name: "ZDTX",
    age: "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    gender: "CCCCCC.doc"
  },
  {
    name: "ZYTX",
    age: "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    gender: "AAAAAA.doc"
  }
];
const arrDeduplication = arr => {
  let hash = {};
  arr = arr.reduce((item, next) => {
    hash[next.name] ? '' : (hash[next.name] = true && item.push(next));
    return item;
  }, []);
  return arr;
};
console.info(arrDeduplication(testArr));
