module.exports.cleanURL = (url) => {
  const newURL = new URL(url);
  return newURL.origin + encodeURI(newURL.search);
};
