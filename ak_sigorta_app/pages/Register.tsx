import {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { IUserModel } from '../models/IUserModel';

export default function Register() {

  const [pullObj, setPullObj] = useState<IUserModel>()
  const navigation = useNavigation()
  const route = useRoute()
  useEffect(() => {
    try {
      const obj = route.params.item as IUserModel
      if (obj && obj.name) {
          console.log(obj.name)
          setPullObj(obj)
          navigation.setOptions({title: obj.title})
      }else {
        navigation.goBack()
        Alert.alert("Data Fail!")
      }
    }catch(error) {
      navigation.goBack()
      Alert.alert("Data Fail!")
    }
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        { pullObj &&
          <View>
            <Text> {pullObj.name} </Text>
            <Text> { pullObj.age && pullObj.age.toString()} </Text>
            <Text> { pullObj?.age?.toString() } </Text>
          </View>
        }
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