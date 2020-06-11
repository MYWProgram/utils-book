// * 取出对象（简单的无嵌套对象）中指定键值对并组成新对象。
let person = {
  name: "Mike",
  age: 24,
  lover: "Mary"
};
let pickKeyVal = (obj, arr) => arr.reduce((acc, cur) => (cur in obj && (acc[cur] = obj[cur]), acc), {});
console.info(pickKeyVal(person, ['name', 'age'])); // Output --> {name: "Mike", age: 24}
