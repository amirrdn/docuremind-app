import axios from 'axios'

import api from '@/config/api'

const instance = axios.create({
  baseURL: api.baseURL,
  timeout: api.timeout
})

instance.defaults.headers.common['Cache-Control'] = `no-cache`
instance.defaults.withCredentials = true

instance.interceptors.request.use(
  (config) => {
    return config
  },
  function (error) {
    return Promise.reject(error.response)
  }
)

export default instance
