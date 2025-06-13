import {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Profile() {

  const navigation = useNavigation()
  useEffect(() => {
    
  }, [])

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.mainView}>
        
        
        <Button 
        title="Goto Map"
        onPress={() => navigation.navigate('UserMap') }
        />
        <Button title='Send' />
        
      </View>
      </ScrollView>
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