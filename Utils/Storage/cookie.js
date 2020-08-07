/**
 * ? 在 cookie 中存储值。
 * @param { String } key 目标键名。
 * @param {*} value 目标值。
 * @param {*} expire 时效，单位天。
 */
export const cookieSet = (key, value, expire) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  if (typeof value === 'object') value = JSON.stringify(value);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};
/**
 * ? 从 cookie 中获取指定键名的值。
 * @param { String } key 目标键名。
 */
export const cookieGet = key => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split('; ');
  let cookieValue = '';
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=');
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};
/**
 * ? 从 cookie 中删除指定键名的目标。
 * @param { String } key 目标键名。
 */
export const cookieRemove = key => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  document.cookie = `${key}=;expires=${d.toUTCString()}`;
};

// cookieSet('person', { name: 'Mike' }, 100);
// console.info(cookieGet('person'));
// cookieRemove('person');
