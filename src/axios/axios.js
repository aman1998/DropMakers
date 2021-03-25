import axios from 'axios'

export default axios.create({
  baseURL: 'http://151.248.121.132'
})

export const auth = axios.create({
  baseURL: 'http://151.248.121.132:8920/api/v1/auth'
})

export const activate = axios.create({
  baseURL: 'http://151.248.121.132:8920/api/v1/auth/users/activation'
})