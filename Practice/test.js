let arr1 = [1, 3, 5, 7],
  arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let intersection = (pre, next) => {
  const s = new Set(next);
  return pre.filter(val => s.has(val));
}
console.info(intersection(arr1, arr2));
