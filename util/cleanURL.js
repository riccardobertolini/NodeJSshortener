module.exports.cleanURL = (url) => {
  const newURL = new URL(url.toString());
  return newURL.origin + encodeURI(newURL.search);
};
