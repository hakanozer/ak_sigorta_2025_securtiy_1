import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Product } from '../models/IProducts';
import { SimpleLineIcons, Octicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../useRedux/store';
import { ILikeAction } from '../useRedux/LikesReducer';
import { LikesEnum } from '../useRedux/LikesEnum';

export default function ProductDetail( ) {

  // Redux Data Pull - > useSelector
  const likesArr = useSelector( (obj: StateType)  => obj.LikesReducer ) 
  const dispatch = useDispatch()

  const route = useRoute()
  const item = route.params.item as Product
  const navigation = useNavigation()
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    navigation.setOptions({title: item.title})
    const index = likesArr.findIndex(itm => itm.id == item.id)
    if (index > -1) {
      setIsLike(true)
    }
  }, [])

  const addLike = () => {
    
    if (!isLike) {
      const sendObj: ILikeAction = {
          type: LikesEnum.LIKE_ADD,
          payload: item
      }
     
      dispatch(sendObj)
    }else {
        const sendObj: ILikeAction = {
          type: LikesEnum.LIKE_REMOVE,
          payload: item
      }
      dispatch(sendObj)
    }
    setIsLike(!isLike)
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Image style={{width: '100%', height: 200,}} source={{uri: item.thumbnail}} />
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <TouchableOpacity onPress={addLike}>
          <Octicons name={isLike == true ? 'heart-fill' : 'heart'} size={24} color={'red'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainView: {
    padding: 8,
  }
});