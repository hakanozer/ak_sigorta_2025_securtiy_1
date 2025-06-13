import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../models/IUser'


export const userStore = async (user: IUser) => {
  const stUser = JSON.stringify(user)
  await AsyncStorage.setItem('user', stUser )
}

export const userGet = async () => {
  const stUser = await AsyncStorage.getItem('user')
  if (stUser) {
    try {
      const user = JSON.parse(stUser) as IUser
    return user
    }catch(error) {
      return null
    }
  }
  return null
}