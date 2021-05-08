import axios from 'axios'

export default axios.create({
  baseURL: 'http://151.248.121.132:8920'
})

export const auth = axios.create({
  baseURL: 'http://151.248.121.132:8920/api/v1/auth'
})

export const ebay = axios.create({
  baseURL: 'http://151.248.121.132:8920/ebay'
})

export const payments = axios.create({
  baseURL: 'http://151.248.121.132:8920/api/v1/payments'
})

