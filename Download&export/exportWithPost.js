/**
 * ? 使用 post 请求方式的导出。
 * @param {*} url 接口地址。
 * @param {*} params 请求参数。
 * @param {*} fileName 文件名。
 */
export const exportExcel = (url, params, fileName) => {
  axios
    .post(`${baseUrl}${url}`, params, {
      headers: {
        // * 请求的数据类型为 form data 格式。
        'Content-Type': 'application/json'
      },
      // ! 设置响应的数据类型为一个包含二进制数据的 Blob 对象。
      responseType: 'blob'
    })
    .then(res => {
      const blob = new Blob([res.data], {type: 'application/vnd.ms-excel'});
      const linkNode = document.createElement('a');
      if (!fileName) fileName = '';
      linkNode.download = fileName;
      linkNode.style.display = 'none';
      // * 生成一个 Blob URL.
      linkNode.href = URL.createObjectURL(blob);
      document.body.appendChild(linkNode);
      linkNode.click();
      // * 释放 URL 对象。
      URL.revokeObjectURL(linkNode.href);
      document.body.removeChild(linkNode);
    })
    .catch(err => {
      console.error(err);
    });
};

export default exportExcel;
