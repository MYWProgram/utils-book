/**
 * ? 新开浏览器窗口。
 * @param { String } url 需要跳转的链接。
 * @param { String } windowName 新开浏览器的名称。
 * @param { Number } width 新开浏览器的宽度。
 * @param { Number } height 新开浏览器的高度。
 */
const openNewBrowser = (url, windowName, width, height) => {
  var x = parseInt(screen.width / 2.0) - width / 2.0;
  var y = parseInt(screen.height / 2.0) - height / 2.0;
  var isMSIE = navigator.appName == 'Microsoft Internet Explorer';
  if (isMSIE) {
    var p = 'resizable=1,location=no,scrollbars=no,width=';
    p = p + width;
    p = p + ',height=';
    p = p + height;
    p = p + ',left=';
    p = p + x;
    p = p + ',top=';
    p = p + y;
    window.open(url, windowName, p);
  } else {
    var win = window.open(
      url,
      'ZyiisPopup',
      'top=' +
        y +
        ',left=' +
        x +
        ',scrollbars=' +
        scrollbars +
        ',dialog=yes,modal=yes,width=' +
        width +
        ',height=' +
        height +
        ',resizable=no'
    );
    eval('try { win.resizeTo(width, height); } catch(e) { }');
    win.focus();
  }
};
