const NodeCache = require("node-cache");
const { generateShortner } = require("./generateShortner");
const { cleanURL } = require("./cleanURL");

// Init values
let cache = null;
const expireTime = 60 * 60 * 3; // 24hrs

module.exports.getCache = (urlCode) => {
  if (!cache) {
    cache = new NodeCache();
  }
  const getCache = cache.get(urlCode);
  if (getCache === undefined) {
    return false;
  } else {
    return getCache;
  }
};

module.exports.updateCache = (url) => {
  if (!this.getCache(url)) {
    const shortner = generateShortner();
    const savedURL = cleanURL(url);

    cache.set(shortner, savedURL, expireTime);
    return shortner;
  } else {
    false;
  }
};
