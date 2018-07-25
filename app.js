const Influx = require('influx');
const NanoDate = require('nano-date').default;


module.exports = app => {
  app.toNanoDate = toNanoDate;
  app.addSingleton('influxdb', createInstance)
}

function toNanoDate (timestamps) {
  return new NanoDate(timestamps).getTime()
}

function createInstance (config, app) {
//TOOD 检查

  const {logger} = app;


  const influxInstance = new Influx.InfluxDB(config);

  logger.info('influx inited!');

  return influxInstance;
}