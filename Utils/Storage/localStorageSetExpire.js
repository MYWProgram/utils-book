/**
 * ? localStorage 存储时效性的值。
 * @param { String } key 存储值的键。
 * @param { Any } value 存储的值。
 * @param { Number } expire 时效，单位毫秒。
 */
const localStorageSetExpire = (key, value, expire) => {
  if (typeof value === 'object') value = JSON.stringify(value);
  localStorage.setItem(key, value);
  setTimeout(() => {
    localStorage.removeItem(key);
  }, expire);
};

localStorageSetExpire('person', { name: 'Mike' }, 5000);
