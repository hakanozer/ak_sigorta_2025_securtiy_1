import { UnknownAction } from 'redux'
import { Product } from "../models/IProducts";
import { LikesEnum } from "../useRedux/LikesEnum";

export interface ILikeAction extends UnknownAction  {
  type: LikesEnum,
  payload: Product
}

export const LikesReducer = ( state: Product[] = [], action: ILikeAction ) => {
  switch(action.type) {
      case LikesEnum.LIKE_ADD: {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index == -1) {
          const newArr = Object.assign([], state)
          newArr.push(action.payload)
          return newArr
        }
        return state
      }
      case LikesEnum.LIKE_REMOVE: {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index > -1) {
          const newArr = Object.assign([], state)
          newArr.splice(index, 1)
          return newArr
        }
        return state
      }
      default:
        return state
  }
}