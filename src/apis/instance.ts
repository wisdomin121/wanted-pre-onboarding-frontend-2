import axios from 'axios'

const BASE_URL = 'https://api.github.com/repos'

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
})
