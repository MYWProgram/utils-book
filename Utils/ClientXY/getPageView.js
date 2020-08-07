/**
 * ? 获取屏幕可视区域宽度。
 * @return { Number } 可视区域宽度。
 */
export const getPageViewWidth = () => {
  // * BackCompat IE8 及以下怪异模式。
  const ext = document.compatMode === 'BackCompat' ? document.body : document.documentElement;
  return ext.clientWidth;
};
/**
 * ? 获取屏幕可视区域高度。
 */
export const getPageViewHeight = () => {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
};
