import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { StateType } from '../useRedux/store';


export default function CustomerHeader() {

  const navigation = useNavigation()
    // Redux Data Pull - > useSelector
  const likesArr = useSelector( (obj: StateType)  => obj.LikesReducer ) 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text>Left</Text>
        <Text>{'Total: ' + likesArr.length}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LikesStack')}>
          <Text>Right</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  mainView: {
    padding: 8,
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});