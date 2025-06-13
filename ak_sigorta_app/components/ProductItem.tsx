
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Product } from '../models/IProducts';
import { useNavigation } from '@react-navigation/native'


export default function ProductItem( props: {item: Product} ) {

  const navigation = useNavigation()


  return (
    <> 
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {item: props.item})} >
        <View style={styles.mainView}>
          <View>
            <Image style={styles.image} source={{ uri: props.item.thumbnail }} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.price}>{props.item.price}₺</Text>
          </View>
        </View>
          
        </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 17,
    textAlign: 'right',
  },
  price: {
    fontSize: 18,
    textAlign: 'right',
    color: 'red'
  }
});