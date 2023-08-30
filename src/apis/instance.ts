import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

export const API = axios.create({
  baseURL: 'https://api.github.com/repos/',
  headers: {
    'Content-Type': 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    'Access-Control-Allow-Origin': '*',
  },
})

API.interceptors.response.use(
  function (response) {
    return response
  },

  async function (error) {
    const errorDataStatus = error.response.status

    if (errorDataStatus > 500) {
      navigate('/500')
    }
  }
)
