'use strict';

const mock = require('egg-mock');

describe('test/influxDB.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/influxDB-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, influxdb')
      .expect(200);
  });
});
