/**
 * ? 获取向下滚动的距离。
 * @return { Number } 向下滚动的值。
 */
export const getScrollTop = () => {
  return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
};
/**
 * ? 获取向右滚动的距离。
 * @return { Number } 向下滚动的值。
 */
export const getScrollLeft = () => {
  return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
};
