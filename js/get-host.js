/**
 * @description 用正则获取 URL 中的 host，一定要用正则哦
 * @param {string} url 完整的url
 * @returns {string} 返回 url 中的 host
 */
const getHostName = (url) => {
  const regex1 = /^[A-Za-z]+:\/{2}/g;
  const regex2 = /[\w.]+/g;
  let host = url.replace(regex1, '').match(regex2)[0];
  return host;
};

// * ---------------- 实现的效果：
{
  console.log(getHostName(`https://help.github.com/cn/github`)); // => `help.github.com`
}
