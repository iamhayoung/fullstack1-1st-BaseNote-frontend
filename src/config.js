export const SERVER_MJ = 'http://192.168.219.103:8000';
export const SERVER_HY = 'http://192.168.0.158:8000';

export const PRODUCTS_LIST_API = `${SERVER_MJ}/product?volume=`;
export const LOGIN_API = `${SERVER_HY}/member/login`;
export const SIGNUP_API = `${SERVER_MJ}/member/signup`;
export const CART_API = `${SERVER_HY}/order/cart`;

export const ERROR_MESSAGES = {
  invalidToken: 'INVALID_TOKEN',
};

export const PURCHASE_MESSAGES = {
  complete: '주문이 완료되었습니다 🤩',
  naverPayComplete: '네이버 페이로 주문이 완료되었습니다 🤩',
  addCart: '상품을 장바구니에 담았습니다 🥳',
  addDailyKit: '상품을 데일리 키트에 담았습니다 😇',
};
