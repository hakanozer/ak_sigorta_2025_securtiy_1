import { IProducts } from '../models/IProducts'
import config from './config'

export const products = () => {
  return config.get<IProducts>('products')
}