/**
 * ? 日期对象转换为时间戳。
 * @param { Object } date 日期对象。
 * @param { Number } divisor 转换时间戳的基准。
 * @return { String | Number } 时间戳。
 */
const date2Timestamp = (date, divisor = 1000) => {
  if (typeof date === 'undefined') return;
  if (typeof date == 'number') return Math.floor(date / divisor);
  else if (typeof date == 'string') {
    let strs = date.split(/[^0-9]/);
    return Math.floor(
      +new Date(strs[0] || 0, (strs[1] || 0) - 1, strs[2] || 0, strs[3] || 0, strs[4] || 0, strs[5] || 0) / divisor
    );
  }
  // * 日期对象格式的转换方式。
  else if (Date.prototype.isPrototypeOf(date)) return Math.floor(+date / divisor);
};

console.info(date2Timestamp(new Date()));
