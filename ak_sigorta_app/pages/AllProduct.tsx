import {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
import { Product } from '../models/IProducts';
import { products } from '../services/productService';


export default function AllProduct() {

  const [arrProduct, setArrProduct] = useState<Product[]>([])

  useEffect(() => {
    products().then(res => {
      const data = res.data
      const arr = data.products
      setArrProduct(arr)
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <FlatList 
          data={arrProduct}
          renderItem={({item, index}) => 
            <ProductItem item={item} />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
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