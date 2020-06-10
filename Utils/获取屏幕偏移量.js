/**
 * * 获取屏幕各种偏移量。
 * @func { getClientX, getClientY } 可视区域横纵坐标获取。
 * @func { getScrollTop, getScrollLeft } 向上向左卷曲值的获取。
 * @func { getPageX, getPageY } 向上向左卷曲值的获取。
 * @param { evt } window.event 和事件参数对象e的兼容。
 */
const evt = {
  getEvent: function(evt) {
    return window.event || evt;
  },
  getClientX: function(evt) {
    return this.getEvent(evt).clientX;
  },
  getClientY: function(evt) {
    return this.getEvent(evt).clientY;
  },
  getScrollTop: function() {
    return (
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      0
    );
  },
  getScrollLeft: function() {
    return (
      window.pageXOffset ||
      document.body.scrollLeft ||
      document.documentElement.scrollLeft ||
      0
    );
  },
  getPageX: function() {
    return this.getEvent(evt).pageX
      ? this.getEvent(evt).pageX
      : this.getClientX(evt) + this.getScrollLeft();
  },
  getPageY: function() {
    return this.getEvent(evt).pageY
      ? this.getEvent(evt).pageY
      : this.getClientY(evt) + this.getScrollTop();
  }
};
