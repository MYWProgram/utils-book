/**
 * ? 向下向右滚动距离。
 * @func getScrollTop 向下滚动距离。
 * @func getScrollLeft 向右滚动距离。
 */
const getScrollTop = () => {
  return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
};
const getScrollLeft = () => {
  return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
};
