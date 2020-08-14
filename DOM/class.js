/**
 * ? 判断元素是否包含某个 class.
 * @param { HTMLElement } el DOM 节点。
 * @param { String } className 类名。
 * @return { Boolean }
 */
export const hasClass = (el, className) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className);
};
/**
 * ? 为某个节点添加 class.
 * @param { HTMLElement } el DOM 节点。
 * @param { String } className 类名。
 */
export const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return;
  }
  // * 老办法。
  // let newClass = el.className.split(' ');
  // newClass.push(className);
  // el.className = newClass.join(' ');
  // * 新方法。
  el.classList.add(className);
};
/**
 * ? 从节点上删除 class.
 * @param { HTMLElement } el DOM 节点。
 * @param { String } className 类名。
 */
export const removeClass = (el, className) => {
  if (!hasClass(el, className)) {
    return;
  }
  // * 老办法。
  // let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
  // el.className = el.className.replace(reg, ' ');
  // * 新方法。
  el.classList.remove(className);
};
