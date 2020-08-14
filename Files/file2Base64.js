/**
 * ? 上传文件转 Base64 格式。
 * @param { Object | File } file 上传的文件对象。
 * @param { Array } format 接受的格式列表。
 * @param { Number } limit 大小限制。
 * @param { String } 格式错误提示。
 * @param { String } 大小超出限制提示。
 * @return { Promise<any> }
 */
export const file2Base64 = (file, format, limit, formatMsg, limitMsg) => {
  return new Promise((resolve, reject) => {
    const suffix = file.type.split('/')[1].toLowerCase();
    let isFormat = false;
    format.forEach(item => {
      if (suffix === item) {
        isFormat = true;
        return;
      }
    });
    !isFormat === true ? reject(formatMsg) : '';
    file.size > limit ? reject(limitMsg) : '';
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      const res = fileReader.result;
      resolve({ base64String: res, suffix: suffix });
      reject('文件异常');
    };
  });
};

// * 测试例子 HTML 中需要如下 id 的 input 和 button.
// const uploadDom = document.querySelector('#uploadFile');
// const uploadButton = document.querySelector('#uploadButton');
// const formatArr = ['jpg', 'jpeg', 'png', 'pdf'];
// const limit = 20 * 1024 * 1024;
// const formatMsg = '格式错误';
// const limitMsg = '大小超出限制';
// uploadButton.addEventListener('click', () => {
//   file2Base64(uploadDom.files[0], formatArr, limit, formatMsg, limitMsg)
//     .then(res => {
//       console.info(res);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// });
