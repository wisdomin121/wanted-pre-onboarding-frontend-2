import axios from 'axios'
import { BASE_URL } from 'data/const'
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

export const API = axios.create({
  baseURL: BASE_URL,
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
      navigate('/500')
    }
  }
)
