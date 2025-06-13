import {useEffect} from 'react'
import { SafeAreaView, StyleSheet, View, StatusBar, Image } from 'react-native';
import { userGet } from '../utils/util';
import { useNavigation } from '@react-navigation/native'
import { jwtControl } from '../services/userService';


export default function Welcome() {

  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      
      userGet().then(user => {
        if (user) {
          jwtControl(user.token).then(res => {
            navigation.replace("AppTabs")
          }).catch(err => {
            navigation.replace("Login")
          })
        }else {
            navigation.replace("Login")
        }
      })

    }, 2000)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.mainView}>
        <Image resizeMode='contain' style={styles.logoImg} source={require('../assets/kia.png')}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    padding: 8,
  },
  logoImg: {
    width: 200,
  }
});