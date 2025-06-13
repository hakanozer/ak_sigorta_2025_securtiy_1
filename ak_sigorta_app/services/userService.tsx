import { IUser } from '../models/IUser'
import config from './config'

export const jwtControl = (jwt: string) => {
  const header = {
    Authorization: 'Bearer ' + jwt
  }
  return config.get('auth/me', {headers: header})
}

export const userLogin = (username: string, password: string) => {
  const sendObj = {
    username: username,
    password: password
  }
  return config.post<IUser>('auth/login', sendObj)
}