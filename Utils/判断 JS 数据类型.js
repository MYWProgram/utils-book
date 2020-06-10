/**
 * * 判断任意数据类型。
 * @param { variable } type 需要进行判断的数据类型。
 */
const getType = type => {
  console.info(
    type === undefined
      ? "Undefined"
      : type === null
      ? "Null"
      : type.constructor.name
  );
};
