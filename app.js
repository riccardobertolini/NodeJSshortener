const express = require("express");
const { getCache, updateCache } = require("./util/cacheUtils");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile("form.html", { root: __dirname + "/public" });
});

app.get("/url/:shortnerCode", function (req, res) {
  const { shortnerCode } = req.params;
  const result = getCache(shortnerCode);
  if (result) {
    res.redirect(result);
  } else {
    res.sendFile("form.html", { root: __dirname + "/public" });
  }
});

app.post("/api", function (req, res) {
  const result = updateCache(req.body.url);
  if (result) {
    res.send(`${req.protocol}://${req.get("host")}/url/${result}`);
  }
});

app.listen(port, () => console.log(`Server active on port: ${port}`));
