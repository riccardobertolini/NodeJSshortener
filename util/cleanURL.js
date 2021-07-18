module.exports.cleanURL = (url) => {
  return url.replace(new RegExp('<[^>]*>', 'g'), '');
};
