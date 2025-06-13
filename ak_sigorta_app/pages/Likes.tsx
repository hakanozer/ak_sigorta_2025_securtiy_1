import {useEffect, useState} from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { StateType } from '../useRedux/store';


export default function Likes() {

  // Redux Data Pull - > useSelector
  const likesArr = useSelector( (obj: StateType)  => obj.LikesReducer ) 

  useEffect(() => {
    console.log("Likes Call")
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <FlatList 
          data={likesArr}
          renderItem={({item, index}) => 
            <ProductItem item={item} />
          }
          keyExtractor={item => item.id.toString()}
        />
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