import axios from 'axios'
import {Message} from 'element-ui'
import store from '../store'
import router from '../router/index'
import {getToken, removeToken, getUsername} from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://10.120.193.105:9090', // api的生产base_url
  baseURL: 'http://10.122.22.176:9090', // api的测试base_url
  timeout: 10000               // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (getToken()) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // config.headers['username'] = getUsername()
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // if (response.data) {
    //   switch (response.data.status) {
    //     case 201: {
    //       Message({
    //         message: response.data.msg,
    //         type: 'success',
    //         center: true
    //       })
    //       break
    //     }// 登录成功
    //     case 400: {
    //       Message({
    //         message: response.data.msg,
    //         type: 'error',
    //         center: true
    //       })
    //       break
    //     }// 退出失败
    //     case 402: {
    //       Message({
    //         message: response.data.msg,
    //         type: 'error',
    //         center: true,
    //         duration: 0
    //       })
    //       break
    //     }// 用户名密码错误
    //     case 403: {
    //       Message({
    //         message: response.data.msg,
    //         type: 'warning',
    //         center: true
    //       })
    //       break
    //     }// 没有权限
    //     case 415: {
    //       Message({
    //         message: response.data.msg,
    //         type: 'error',
    //         center: true
    //       })
    //       break
    //     }// 服务器参数错误
    //     // router.push('/')
    //   }
    // }
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          removeToken()
          console.log(router.currentRoute.fullPath === '/aboutus')
          if (router.currentRoute.fullPath !== '/aboutus' && router.currentRoute.fullPath !== '/faq' && router.currentRoute.fullPath !== '/Permissions') {
            router.replace({
              path: 'login',
              query: {redirect: router.currentRoute.fullPath}
            })
          }
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  })

// response => response.data,
// response => {
// /**
// * code为非20000是抛错 可结合自己业务进行修改
// */
//   const res = response.data
//   if (res.ret !== 0) {
//     Message({
//       message: res.data,
//       type: 'error',
//       duration: 5 * 1000
//     })
//
//
//     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//     if (res.ret === 50008 || res.ret === 50012 || res.ret === 50014) {
//       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//         confirmButtonText: '重新登录',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         new Promise(resolve => {
//           store.commit('user/SET_TOKEN', '')
//           removeToken()
//           resolve()
//         }).then(() => {
//           location.reload()// 为了重新实例化vue-router对象 避免bug
//         })
//       })
//     }
//     return Promise.reject('error')
//   } else {
//     return response.data
//   }
// },
// response => {
//   return response
// },
// error => {
//   console.log('err' + error)// for debug
//   Message({
//     message: error.message,
//     type: 'error',
//     duration: 5 * 1000
//   })
//   return Promise.reject(error)
// }

export default service
