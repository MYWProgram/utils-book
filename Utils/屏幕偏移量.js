/**
 * ? 获取屏幕各种偏移量。
 * @func getScrollTop，getScrollLeft 向下向右滚动距离；
 * @func getPageViewWidth，getPageViewHeight 屏幕可视区域宽高；
 */
const getScrollTop = () => {
  return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
};
const getScrollLeft = () => {
  return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
};

const getPageViewWidth = () => {
  // * BackCompat IE8 及以下怪异模式。
  ext = document.compatMode === "BackCompat" ? document.body : document.documentElement;
  return ext.clientWidth;
};
const getPageViewHeight = () => {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  return clientHeight;
};
