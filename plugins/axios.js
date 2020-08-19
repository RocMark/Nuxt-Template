import Vue from 'vue'
import axios from 'axios'
// import store from '@/store/store' // ? 待測

/*
  ** File OverLook
  ** Create Axios Instance
  ** Add Interceptor to Axios Instance
  ** InterCeptor Modify Headers | Error Handling

  ** Usage in Vuex
  * this.$request.get(url)
*/

export default function ({ $axios, redirect }, inject) {
  // * Create Axios Instance
  const request = $axios.create({
    baseURL: process.env.NUXT_ENV_BASE_API_URL || '',
    headers: { }
  })

  // ? Link Interceptor to Axios Instance
  createInterceptor({ request, requestName: 'requestName' })
  inject('request', request)

  const testRequest = $axios.create({
    baseURL: process.env.NUXT_ENV_TEST_API_URL || '',
    headers: { }
  })
  createInterceptor({ request: testRequest, requestName: 'testRequest' })
  inject('testRequest', testRequest)

  //* ShowCase CORS
  const mockRequest = $axios.create({
    baseURL: 'http://localhost:3015/api',
    headers: { }
  })
  createInterceptor({ request: mockRequest, requestName: 'mockRequest' })
  inject('mockRequest', mockRequest)
}

const createInterceptor = ({ request, requestName = '' }) => {
  //* Request  */
  request.onRequest((config) => { reqSuccessFunc(config) })
  request.onRequestError((response) => { resSuccessFunc(response) })

  //* Response  */
  request.onResponse((response) => { resSuccessFunc(response) })
  request.onResponseError((error) => { resFailFunc(error) })

  //*  */
  request.onError((error) => {
    const statusCode = parseInt(error.response && error.response.status)
    // if (statusCode === 400) { redirect('/400') }
  })
}

//* ******************************************************************************** * */

// * Request Success Add token to Header
const reqSuccessFunc = async (config) => {
  // 將 token 寫入表頭 ( 要注意那些 request 不需要 token 可判斷跳過  )
  config.headers = {
    ...await headerWithToken({ configHeader: config.headers })
  }
  console.log('\x1B[36m%s\x1B[0m', '=test====reqSuccessFunc==Header=', config.headers)
  return config
}

//* ******************************************************************************** * */

const headerWithToken = async ({ configHeader }) => {
  let token = localStorage.getItem('token') || ''
  const tokenNotExist = !token

  if (tokenNotExist) {
    token = await fetchNewTokens()
  }

  return {
    ...configHeader,
    Authorization: `Bearer ${token}`
  }
}

// ! 待補上 async RefreshToken API
const fetchNewTokens = () => {
  return 'testTokenHeader'
}

//* ******************************************************************************** * */

// ! 可在此做統一的 API 錯誤處理
const resFailFunc = (error) => {
  console.log('\x1B[36m%s\x1B[0m', '=test====resFailFunc===')
  return Promise.reject(error)
}

//* ******************************************************************************** * */
// 下列兩個較少使用
const reqFailFunc = (error) => {
  console.log('\x1B[36m%s\x1B[0m', '=test====reqFailFunc===')
  return Promise.reject(error)
}

const resSuccessFunc = (response) => {
  console.log('\x1B[36m%s\x1B[0m', '=test====resSuccessFunc===')
  return response
}

Vue.prototype.$axios = axios
