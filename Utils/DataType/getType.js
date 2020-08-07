/**
 * ? 判断任意数据类型。
 * @param { variable } type 需要进行判断的数据类型。
 * @return { String } 返回的值类型。
 */
export const getType = type => {
  return type === undefined ? 'Undefined' : type === null ? 'Null' : type.constructor.name;
};

// let target = [1, 2, 3];
// console.info(getType(target));
