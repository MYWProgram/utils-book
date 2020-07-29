/**
 * ? 取出对象（简单的无嵌套对象）中指定键值对并组成新对象。
 * @param {*} obj 目标对象。
 * @param {*} arr 存放需要取出键值对的键值数组。
 * @return { Object } 所需键值对存放的对象。
 */
let getKeyVal = (obj, arr) => arr.reduce((acc, cur) => (cur in obj && (acc[cur] = obj[cur]), acc), {});
let person = {
  name: 'Mike',
  age: 24,
  lover: 'Mary'
};
console.info(getKeyVal(person, ['name', 'age']));
