import { StyleSheet,View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux'


// Import Login
import Welcome from './pages/Welcome';
import Login from './pages/Login'
import Register from './pages/Register'

// Import products
import AllProduct from './pages/AllProduct';
import ProductDetail from './pages/ProductDetail';

// Import likes
import Likes from './pages/Likes';

// Import profile
import Profile from './pages/Profile';
import UserMap from './pages/UserMap';

import { store } from './useRedux/store';


// Import headers
import CustomerHeader from './components/CustomerHeader';



const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator();

// Login Stack
const LoginStack = () =>
<Stack.Navigator initialRouteName='Welcome' >
  <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
  <Stack.Screen name='Login' component={Login} />
  <Stack.Screen name='Register' component={Register} />
</Stack.Navigator>

// Product Stack
const ProductStack = () =>
<Stack.Navigator>
  <Stack.Screen name='Product' component={AllProduct} 
    options={{
      headerShown: true,
      header: () => <CustomerHeader />
    }}
   />
  <Stack.Screen name='ProductDetail' component={ProductDetail} />
</Stack.Navigator>

// Likes Stack
const LikesStack = () =>
<Stack.Navigator>
  <Stack.Screen name='Likes' component={Likes} />
  <Stack.Screen name='ProductDetail' component={ProductDetail} />
</Stack.Navigator>

// Likes Stack
const ProfileStack = () =>
<Stack.Navigator>
  <Stack.Screen name='Profile' component={Profile} />
  <Stack.Screen name='UserMap' component={UserMap} />
</Stack.Navigator>

// App Tabs
const AppTabs = () => 
<Tab.Navigator
  activeColor='#a84c32'
  inactiveColor='#000000'
  barStyle={{ backgroundColor: '#d6d6d6', height: 100 }}
>
  <Tab.Screen 
    name='ProductStack'
    component={ProductStack}
    options={{
      title: 'Products',
      tabBarIcon: ({color, size} : any) => 
      <SimpleLineIcons name="basket" size={24} color={color} />
    }}
  />
  <Tab.Screen 
    name='LikesStack'
    component={LikesStack}
    options={{
      title: 'Likes',
      tabBarIcon: ({color, size} : any) => 
      <SimpleLineIcons name="heart" size={24} color={color} />
    }}
  />
  <Tab.Screen 
    name='ProfileStack'
    component={ProfileStack}
    options={{
      title: 'Profile',
      tabBarIcon: ({color, size} : any) => 
      <SimpleLineIcons name="user" size={24} color={color} />
    }}
  />

</Tab.Navigator>

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='LoginStack' component={LoginStack} options={{ headerShown: false }} />
          <Stack.Screen name='AppTabs' component={AppTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </Provider>
  );

}

const styles = StyleSheet.create({ });
