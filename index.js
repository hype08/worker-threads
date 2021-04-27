const glob = require("glob");
const imageProcess = require("./thread-img-scaler");

(async () => {
  await Promise.all(
    glob
      .sync("./images/*.jpeg")
      .filter((img) => img.indexOf("_sm") < 0)
      .map(imageProcess)
  );
})();
