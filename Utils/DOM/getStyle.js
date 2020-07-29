/**
 * ? 获取页面上任意元素的样式属性值（兼容 IE8）.
 * @param { document.querySelector('.class || #id') } element 当前元素。
 * @param { String } attr 需要获取元素的属性值。
 */
const getStyle = (element, attr) => {
  return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr] || 0;
};
