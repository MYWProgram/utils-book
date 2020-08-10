/**
 * ? 千分位金钱格式化。
 * @param { Number } num 待格式化的金钱数字。
 * @return { String } 格式化之后的金钱数字。
 */
export const thousandsOfDivisions = num => {
  return String(num).indexOf('.') > -1 ? num.toLocaleString() : String(num).replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
};

// console.info(typeof thousandsOfDivisions(1000000000000000));
