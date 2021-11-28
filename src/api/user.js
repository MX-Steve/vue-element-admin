import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/users/v1/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/users/v1/userinfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/users/v1/logout',
    method: 'post'
  })
}
