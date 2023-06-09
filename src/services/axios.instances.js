import axios from 'axios'

// const API_BASE_URL = import.meta.env.VITE_API_EXPRESS_URL
const API_BASE_URL = 'http://localhost:5000'

const configBasic = {
  baseURL: API_BASE_URL,
  timeout: 9000000, // 15 minutes
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

const rget = async (endpoint) => {
  const config = { ...configBasic, headers: { ...configBasic.headers } }
  return await axios.create(config).get(endpoint)
}

export { rget }
