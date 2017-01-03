import fetch from 'isomorphic-fetch'

const url = 'https://api.github.com'

const api = {
  users: {
    async getProfile(user = 'juandc') {
      const response = await fetch(`${url}/users/${user}`)
      const data = await response.json()
      return data
    },
    async getRepos(user = 'juandc') {
      const response = await fetch(`${url}/user/${user}/repos`)
      const data = await response.json()
      return data
    },
  },
  repos: {
    async getRepo(user = 'juandc', repo = 'react-octocat') {
      const response = await fetch(`${url}/repos/${user}/${repo}`)
      const data = await response.json()
      return data
    },
  },
}

export default api
