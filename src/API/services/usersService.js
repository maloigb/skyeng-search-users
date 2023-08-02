/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default {
  async getUsers(userLogin) {
    const response = await axios.get(`https://api.github.com/search/users?q=${userLogin}`);
    const userReposPromises = response.data.items.map(async (user) => {
      const repos = await axios.get(user.repos_url);
      return repos.data;
    });
    const userRepos = await Promise.allSettled(userReposPromises);
    let i = 0;
    const resultUsers = response.data.items.map((curUser) => {
      // eslint-disable-next-line no-param-reassign
      curUser.repos = userRepos[i].value;
      // eslint-disable-next-line no-param-reassign
      curUser.reposLength = userRepos[i].value?.length;
      i++;
      return curUser;
    });
    return resultUsers;
  },
};
