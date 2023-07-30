// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default {
  getUsers: async (userLogin) => {
    const response = axios.get(`https://api.github.com/search/users?q=${userLogin}`);
    return (await response).data;
  },
  getRepos: async (url) => {
    const response = axios.get(url);
    return (await response).data;
  },
};
