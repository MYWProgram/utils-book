/**
 * ? 屏幕可视区域宽高。
 * @func getPageViewWidth 屏幕可视区域宽度；
 * @func getPageViewHeight 屏幕可视区域高度。
 */
const getPageViewWidth = () => {
  // * BackCompat IE8 及以下怪异模式。
  ext = document.compatMode === "BackCompat" ? document.body : document.documentElement;
  return ext.clientWidth;
};
const getPageViewHeight = () => {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
  } else {
    clientHeight = document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  return clientHeight;
};
