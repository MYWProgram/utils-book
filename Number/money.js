/**
 * ? 千分位金钱格式化。
 * @param { Number } num 待格式化的金钱数字。
 * @return { String } 格式化之后的金钱数字。
 */
export const thousandsOfDivisions = num => {
  return String(num).indexOf('.') > -1 ? num.toLocaleString() : String(num).replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
};

// console.info(typeof thousandsOfDivisions(1000000000000000));
/**
 * ? 阿拉伯数字转为大写金额。
 * @param { String | Number } Num 待转换金额。
 * @return { String }
 */
export const num2ChineseMoney = Num => {
  // * 判断如果传递进来的不是字符串的话转换为字符。
  if (typeof Num === 'number') Num = new String(Num);
  // * 字符处理完毕后开始转换，采用前后两部分分别转换的方式。
  const part = String(Num).split('.');
  let newchar = '';
  // * 小数点前进行转化。
  for (let i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      // * 若数量超过拾亿单位，可以添加提示。
      console.info('超过十亿了');
      return '';
    }
    let tmpnewchar = '',
      perchar = part[0].charAt(i);
    switch (perchar) {
      case '0':
        tmpnewchar = '零' + tmpnewchar;
        break;
      case '1':
        tmpnewchar = '壹' + tmpnewchar;
        break;
      case '2':
        tmpnewchar = '贰' + tmpnewchar;
        break;
      case '3':
        tmpnewchar = '叁' + tmpnewchar;
        break;
      case '4':
        tmpnewchar = '肆' + tmpnewchar;
        break;
      case '5':
        tmpnewchar = '伍' + tmpnewchar;
        break;
      case '6':
        tmpnewchar = '陆' + tmpnewchar;
        break;
      case '7':
        tmpnewchar = '柒' + tmpnewchar;
        break;
      case '8':
        tmpnewchar = '捌' + tmpnewchar;
        break;
      case '9':
        tmpnewchar = '玖' + tmpnewchar;
        break;
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + '元';
        break;
      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + '拾';
        break;
      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + '佰';
        break;
      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + '仟';
        break;
      case 4:
        tmpnewchar = tmpnewchar + '万';
        break;
      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + '拾';
        break;
      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + '佰';
        break;
      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + '仟';
        break;
      case 8:
        tmpnewchar = tmpnewchar + '亿';
        break;
      case 9:
        tmpnewchar = tmpnewchar + '拾';
        break;
    }
    newchar = tmpnewchar + newchar;
  }
  // * 小数点之后进行转化。
  if (Num.indexOf('.') !== -1) {
    if (part[1].length > 2) {
      // * 自动截断小数点后两位。
      part[1] = part[1].substr(0, 2);
    }
    for (let i = 0; i < part[1].length; i++) {
      let tmpnewchar = '',
        perchar = part[1].charAt(i);
      switch (perchar) {
        case '0':
          tmpnewchar = '零' + tmpnewchar;
          break;
        case '1':
          tmpnewchar = '壹' + tmpnewchar;
          break;
        case '2':
          tmpnewchar = '贰' + tmpnewchar;
          break;
        case '3':
          tmpnewchar = '叁' + tmpnewchar;
          break;
        case '4':
          tmpnewchar = '肆' + tmpnewchar;
          break;
        case '5':
          tmpnewchar = '伍' + tmpnewchar;
          break;
        case '6':
          tmpnewchar = '陆' + tmpnewchar;
          break;
        case '7':
          tmpnewchar = '柒' + tmpnewchar;
          break;
        case '8':
          tmpnewchar = '捌' + tmpnewchar;
          break;
        case '9':
          tmpnewchar = '玖' + tmpnewchar;
          break;
      }
      if (i === 0) tmpnewchar = tmpnewchar + '角';
      if (i === 1) tmpnewchar = tmpnewchar + '分';
      newchar = newchar + tmpnewchar;
    }
  }
  // * 替换所有无用汉字。
  while (newchar.search('零零') != -1) newchar = newchar.replace('零零', '零');
  newchar = newchar.replace('零亿', '亿');
  newchar = newchar.replace('亿万', '亿');
  newchar = newchar.replace('零万', '万');
  newchar = newchar.replace('零元', '元');
  newchar = newchar.replace('零角', '');
  newchar = newchar.replace('零分', '');
  if (newchar.charAt(newchar.length - 1) === '元') {
    newchar = newchar + '整';
  }
  return newchar;
};

// console.info(num2ChineseMoney(123456780.22));
