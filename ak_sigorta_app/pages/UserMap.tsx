import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Toast from 'react-native-toast-message';

export default function UserMap() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <MapView 
        style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: 41.0847699,
            longitude: 29.0490718,
            latitudeDelta: 0.0090,
            longitudeDelta: 0.0090,
          }}
        >
        <Marker 
          coordinate={{latitude: 41.0852808, longitude: 29.0477224}}
          title='İşletme-1'
          description='İşletme-1 Detail'
          onPress={(evt) => Toast.show({
            type: 'success',
            text1: 'İşletme-1'
          })}
        />
        <Marker 
          coordinate={{latitude: 41.0854808, longitude: 29.0497224}}
          title='İşletme-2'
          description='İşletme-2 Detail'
          onPress={(evt) =>  Toast.show({
              type: 'success',
              text1: 'İşletme-2'
            })
          }
        />
        </MapView>
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