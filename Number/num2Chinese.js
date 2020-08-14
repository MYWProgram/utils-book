/**
 * ? 阿拉伯数字转为汉字表达。
 * @param { Number } num 待转换数字。
 * @return { String }
 */
export const num2Chinese = num => {
  const numTranslation = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'),
    unitTranslation = new Array('', '十', '百', '仟', '萬', '億', '点', ''),
    targetArr = String(num).replace(/(^0*)/g, '').split('.');
  let k = 0,
    result = '';
  for (let i = targetArr[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        result = unitTranslation[7] + result;
        break;
      case 4:
        if (!new RegExp('0{4}//d{' + (targetArr[0].length - i - 1) + '}$').test(targetArr[0])) result = unitTranslation[4] + result;
        break;
      case 8:
        result = unitTranslation[5] + result;
        unitTranslation[7] = unitTranslation[5];
        k = 0;
        break;
    }
    if (k % 4 === 2 && targetArr[0].charAt(i + 2) !== 0 && targetArr[0].charAt(i + 1) === 0) result = numTranslation[0] + result;
    if (targetArr[0].charAt(i) !== 0) result = numTranslation[targetArr[0].charAt(i)] + unitTranslation[k % 4] + result;
    k++;
  }
  if (targetArr.length > 1) {
    // * 如果有小数部分，加上。
    result += unitTranslation[6];
    for (let i = 0; i < targetArr[1].length; i++) result += numTranslation[targetArr[1].charAt(i)];
  }
  if (result == '一十') result = '十';
  if (result.match(/^一/) && result.length === 3) result = result.replace('一', '');
  return result;
};

// console.info(num2Chinese(1234.56));
