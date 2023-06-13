const CONSTANTS = require('../constants');

const getOptions = (method, uri) => ({
    hostname: CONSTANTS.ML_ENDPOINT,
    path: encodeURI(uri),
    method,
    headers: {
      'content-type': 'application/json',
    },
  });

const getData = (uri) => new Promise((resolve, reject) => {
  const https = require('https');
  let data = '';
  const options = getOptions('GET', uri);

  const request = https.request(options, (response) => {
    response.setEncoding('utf8');

    if (response.statusCode < 200 || response.statusCode >= 300) {

      return reject(new Error(`Status Code: ${response.statusCode}`));
    }

    response.on('data', (chunk) => data += chunk);

    response.on('end', () => {
      try {
        data = JSON.parse(data);
      } catch(error) {
        return reject(error);
      }
      
      return resolve(data);
    });
    });
    
    request.on('error', (error) => reject(error));

    request.end();
});

const getPosts = (query) => getData('/sites/MLA/search?q=​'.concat(`=?${query}`));

const getItem = (id) => getData(`/items/${id}`);

const getCategoryPath = (id) => getData(`/categories/${id}`).then(({path_from_root}) => path_from_root);

module.exports = { getItem, getPosts, getCategoryPath };