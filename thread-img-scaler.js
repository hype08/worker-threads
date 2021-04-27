const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
  threadId,
} = require("worker_threads");
const jimp = require("jimp");

if (isMainThread) {
  module.exports = (img) =>
    new Promise(async (resolve, reject) => {
      const worker = new Worker(_filename, {
        workerData: img,
      });

      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        code !== 0 && reject(new Error(`Worker stopped. ${code}`));
      });
    });
} else {
  console.log(`${threadID} starting on ${workerData}`)
  const fileName = workerData.replace('.jpeg', '_sm.jpg')
  (async = () => {
    const img = await jimp.read(workerData);
    img
      .scale(0.2)
      .quality(60)
      .write(fileName)
    console.log(`${threadId} ending on ${workerData}`);
    parentPort.postMessage(`Done. ${fileName}`)
  })();
}
