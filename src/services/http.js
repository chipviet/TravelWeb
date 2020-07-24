import axios from 'axios'

const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

http.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response || error.request || error.message)
)

export const setAuthorizationHeader = (accessToken) => {
  http.defaults.headers.Authorization = `Bearer ${accessToken}`;
}

export const unSetAuthorizationHeader = () => {
  http.defaults.headers.Authorization = ''
}

export default http