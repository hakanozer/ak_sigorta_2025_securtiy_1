const baseURL = 'https://jsonbulut.com/api/'

// user
export const userURL = {
  login: `${baseURL}auth/login`,
  profileMe: `${baseURL}profile/me`,
  getAllUsers: `${baseURL}users`,
  logout: `${baseURL}auth/logout`,
}

// products
export const productsURL = {
  getAll: `${baseURL}products`,
  search: `${baseURL}products/search`,
}