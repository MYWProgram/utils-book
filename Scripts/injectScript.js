/**
 * ? 动态创建 script 标签。
 * @param { String } src url 地址。
 */
export const injectScript = src => {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  // * 是否异步加载。
  s.async = true;
  s.src = src;
  const t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
};
