import { headerWithToken } from '../token/tokenApis'

/*
  reqSuccessFunc: 請求成功 => 統一寫入表頭、檢測參數格式 ...etc
  resFailFunc:    統一處理 404 情況
*/

const createInterceptor = ({ request, moduleName }) => {
  request.interceptors.request.use(
    (config) => {
      return reqSuccessFunc(config, moduleName)
    },
    (error) => {
      return reqFailFunc(error, moduleName)
    }
  )

  request.interceptors.response.use(
    (response) => {
      return resSuccessFunc(response, moduleName)
    },
    (error) => {
      return resFailFunc(error, moduleName)
    }
  )
}

//* ******************************************************************************** * */

const reqSuccessFunc = async (config, moduleName) => {
  // 將 token 寫入表頭 ( 要注意那些 request 不需要 token 可判斷跳過  )
  config.headers = {
    ...await headerWithToken({ configHeader: config.headers })
  }

  return config
}

//* ******************************************************************************** * */

const reqFailFunc = (error, moduleName) => {
  return Promise.reject(error)
}

const resSuccessFunc = (response, moduleName) => {
  return response
}

const resFailFunc = (error, moduleName) => {
  return Promise.reject(error)
}

export default { createInterceptor }
