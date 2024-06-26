import request from '@/utils/request'
// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
//获取最新购物车
export const getCartAPI = () => {
  return request({
    url: '/member/cart'
  })
}
// 删除购物车
export const delCartAPI = (ids) => {
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCartAPI = (data) => {
  return request({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
// 获取订单详情接口
export const getCheckoutInfoAPI = () => {
  return request({
    url: '/member/order/pre'
  })
}
