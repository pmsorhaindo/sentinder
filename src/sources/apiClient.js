import isomorphicFetch from 'isomorphic-fetch';
import urlUtils from 'url';
import { TWEET_INDEX } from '../constants/Environment';

export const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export const defaultOptions = {
  // send cookies on same domain requests
  credentials: 'same-origin'
};

export class ApiClient {
  constructor({isClient, fetch = isomorphicFetch}) {
    this.port = 9200;
    this.fetch = (url, options = {headers: {}}) => {
      const config = {
        appProtocol: 'http'
      };

      const finalHeaders = Object.assign({},
        defaultHeaders,
        options.headers
      );

      const finalOptions = Object.assign({},
        defaultOptions,
        {
          headers: finalHeaders,
          mode: 'no-cors'
        },
        options
      );

      const urlOptions = {
        pathname: url,
        query: Object.assign({},
          options.query
        )
      };

      //if (!isClient) {
      urlOptions.protocol = config.appProtocol;
      urlOptions.host = `localhost:${this.port}`;
      //}
      console.dir(urlOptions);
      console.log(urlUtils.format(urlOptions), 'url!');

      return fetch(urlUtils.format(urlOptions), finalOptions);
    };
  }

  post(url, bodyObject) {
    return this.fetch(url, {
      method: 'post',
      body: JSON.stringify(bodyObject)
    });
  }

  fetchCards() {
    return this.fetch(TWEET_INDEX);
  }
}

export default new ApiClient({isClient: true});
