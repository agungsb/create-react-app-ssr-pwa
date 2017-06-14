import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

export default class ApiClient {
  constructor(req) {
    methods.forEach(method => {
      this[method] = (path, { params, data, headers, files, fields } = {}, isExternal = false) => new Promise((resolve, reject) => {
        let request;
        request = superagent[method](path);

        if (params) {
          request.query(params);
        }

        if (headers) {
          request.set(headers);
        }

        if (files) {
          files.forEach(file => request.attach(file.key, file.value));
        }

        if (fields) {
          fields.forEach(item => request.field(item.key, item.value));
        }

        if (data) {
          request.send(data);
        }
        request.end((err, { body } = {}) => (err ? reject(body || err) : resolve(body)));
      });
    });
  }
}
