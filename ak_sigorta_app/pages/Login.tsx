import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { IUserModel } from '../models/IUserModel';
import { userLogin } from '../services/userService';
import Toast from 'react-native-toast-message';
import { userStore } from '../utils/util';

const os = Platform.OS
const w = Dimensions.get("window").width
export default function Login() {

  const navigation = useNavigation()
  const [username, setUserName] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')

  const fncSend = () => {
    //setUserName("Ali")
    userLogin(username, password).then(res => {
      const dt = res.data
      userStore(dt).then(() => {
        navigation.replace("AppTabs")
      })
    }).catch(error => {
      Toast.show({
        type: 'error',
        text1: "Username or Password Fail!"
      })
    })
  }

  const sendObj: IUserModel = {
    title: 'App Title',
    name: 'Erkan Bilsin',
    jwt: 'token123'
  }
  const fncRegister = () => {
    navigation.navigate("Register", {item: sendObj} )
  }

  const nameTxt = (txt: string) => {
    setUserName(txt)
  }

  // Default call func
  const defultFnc = () => {
    console.log("Rest Api call")
  }
  //defultFnc()
  useEffect(() => {
    console.log("useEffect -- Rest Api call - 1")
  }, [])
 
  useEffect(() => {
    console.log("useEffect -- Rest Api call - 2")
  }, [])

  useEffect(() => {
    if (username !== "") {
      console.log("useEffect", username)
    }
  }, [username])

 


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.txtTitle}> User Login </Text>
        <TextInput defaultValue={username} onChangeText={ nameTxt } autoCapitalize='none' autoComplete='username' placeholder='Username' style={styles.txtInput} />
        <TextInput defaultValue={password} onChangeText={(txt) => setPassword(txt) } secureTextEntry autoComplete='password' placeholder='Password' style={styles.txtInput} />

        <View style={styles.btnView}>
          <TouchableOpacity onPress={fncSend} style={styles.btnSend}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={fncRegister} style={styles.btnSend}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
        {/* 
        <Text style={styles.txtTitle}>{username}</Text>
        { username.split("").map(item => <Text>{item}</Text> ) }
        */}
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
  },
  txtTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  txtInput: {
    borderWidth: 1,
    padding: 5,
    fontSize: 18,
    borderRadius: 5,
    borderColor: '#4287f5',
    color: '#1a4487',
    marginTop: 5,
    marginBottom: 5,
  },
  btnView: {
    justifyContent:'space-between',
    flexDirection: 'row',
  },
  btnSend: {
    borderWidth: 1,
    borderColor: '#4287f5',
    marginBottom: 5,
    padding: 5,
    width: 100,
    backgroundColor: '#4287f5',
    borderRadius: 5,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  }
});
