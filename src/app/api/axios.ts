import axios, { AxiosError, AxiosInstance } from 'axios'
import { destroyCookie, parseCookies } from 'nookies'

export const axiosInstance = (ctx = undefined): AxiosInstance => {
  const url = process.env.NEXT_PUBLIC_BASE_URL
  const cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${cookies['user_token']}`,
    },
  })

  api.interceptors.request.use(async (config) => {
    try {
      if (cookies.token_user) {
        config.headers.Authorization = `Bearer ${cookies['user_token']}`
      }
    } catch (error) {
      console.error('Error:', error)
    }

    return config
  })
  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response) {
        const status = error.response.status
        if (status === 401 || status === 403) {
          destroyCookie(null, cookies['user_token'])
        }
      }
      return Promise.reject(error)
    }
  )
  return api
}
