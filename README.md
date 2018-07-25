# egg-influxdb

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-influxdb.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-influxdb
[travis-image]: https://img.shields.io/travis/eggjs/egg-influxdb.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-influxdb
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-influxdb.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-influxdb?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-influxdb.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-influxdb
[snyk-image]: https://snyk.io/test/npm/egg-influxdb/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-influxdb
[download-image]: https://img.shields.io/npm/dm/egg-influxdb.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-influxdb

<!--
Description here.
-->

## Install

```bash
$ npm i egg-influxdb --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.influxdb = {
  enable: true,
  package: 'egg-influxdb',
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
          fielda: influxdb.FieldType.FLOAT
        },
        tags: [
            'url','bs'
        ]
      }]
};
```

see [node-influx](https://node-influx.github.io/class/src/index.js~influxdb.html) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
