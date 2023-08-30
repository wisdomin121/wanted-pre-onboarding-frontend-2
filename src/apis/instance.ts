import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://api.github.com/repos/',
  headers: {
    'Content-Type': 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
})

API.interceptors.response.use(
  function (response) {
    return response
  },

  async function (error) {
    const errorDataStatus = error.response.status

    if (errorDataStatus > 500) {
      location.href = '/500'
    }
  }
)
