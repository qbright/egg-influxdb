# egg-influxDB

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-influxDB.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-influxDB
[travis-image]: https://img.shields.io/travis/eggjs/egg-influxDB.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-influxDB
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-influxDB.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-influxDB?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-influxDB.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-influxDB
[snyk-image]: https://snyk.io/test/npm/egg-influxDB/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-influxDB
[download-image]: https://img.shields.io/npm/dm/egg-influxDB.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-influxDB

<!--
Description here.
-->

## Install

```bash
$ npm i egg-influxDB --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.influxdb = {
  enable: true,
  package: 'egg-influxDB',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.influxdb = {
   client: {
      host: '127.0.0.1',
      database: 'testdb',
      username: 'testuser',
      password: '123456',
      schema: [{
        measurement: 'testmeasurement',
        fields: {
          fielda: InfluxDB.FieldType.FLOAT
        },
        tags: [
            'url','bs'
        ]
      }]
};
```

see [node-influx](https://node-influx.github.io/class/src/index.js~InfluxDB.html) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
