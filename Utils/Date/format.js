/**
 * ? 日期时间位数处理方法。
 * @param { Number } n 需要在前面添加的数字。
 */
export const formatNumber = n => {
  n = n.toString();
  // * 传入 n 就在前面加上 n，否则就加 0.
  return n[1] ? n : '0' + n;
};
/**
 * ? 格式化时间对象输出某月某日。
 * @param { Object } date 时间对象。
 * @return { String } 'x月x日'格式字符串。
 */
export const formatTime = date => {
  if (!!date) {
    if (!(date instanceof Date)) date = new Date(date);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${month}月${day}日`;
  }
};

// console.info(formatTime(new Date()));
/**
 * ? 格式化时间对象返回年月日。
 * @param { Object } date 时间对象。
 * @return { String }  '年-月-日'格式字符串。
 */
export const formatDay = date => {
  if (!!date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return [year, month, day].map(formatNumber).join('-');
  }
};

// console.info(formatDay(new Date()));
/**
 * ? 格式化时间对象返回周几。
 * @param { Object } date 时间对象。
 * @return { String } 周几。
 */
export const formatWeek = date => {
  if (!!date) {
    let day = date.getDay();
    switch (day) {
      case 0:
        return '周日';
        break;
      case 1:
        return '周一';
        break;
      case 2:
        return '周二';
        break;
      case 3:
        return '周三';
        break;
      case 4:
        return '周四';
        break;
      case 5:
        return '周五';
        break;
      case 6:
        return '周六';
        break;
    }
  }
};

// console.info(formatWeek(new Date()));
/**
 * ? 格式化时间对象返回时分。
 * @param { Object } date 时间对象。
 * @return { String } '时:分'格式字符串。
 */
export const formatHour = date => {
  if (!!date) {
    var hour = new Date(date).getHours();
    var minute = new Date(date).getMinutes();
    return [hour, minute].map(formatNumber).join(':');
  }
};

// console.info(formatHour(new Date()));
