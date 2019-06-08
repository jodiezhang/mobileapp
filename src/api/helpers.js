import axios from 'axios';

const ERR_OK = 0;

// eslint-disable-next-line import/prefer-default-export
export function get(url) {
  // eslint-disable-next-line func-names
  return function (params) {
    return axios.get(url, {
      params,
    }).then((res) => {
      const { errno, data } = res.data;
      if (errno === ERR_OK) {
        return data;
      }
      return {
      };
    }).catch(() => {

    });
  };
}
