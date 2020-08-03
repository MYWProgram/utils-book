import { formatNumber } from './format.js';
/**
 * ? 时间戳转为日期对象并格式化。
 * @param { Number } number 时间戳。
 * @param { String } format 格式化标志，'Y/M/D h:m:s' || 'h:m:s'。
 * @return { String } 格式化后的时间，2020/08/03 16:28:25 || 16:28:25。
 */
export const timestamp2Date = (number, format) => {
  const formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  const date = new Date(number * 1000);
  let returnArr = [];
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));
  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));
  for (let i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
};

// const stamp = 1596443305;
// console.info(timestamp2Date(stamp, 'Y/M/D h:m:s'));
// console.info(timestamp2Date(stamp, 'h:m:s'));
