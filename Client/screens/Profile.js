import Settings from '../components/profile_item/Settings';
import History from '../components/profile_item/History';
import Likes from '../components/profile_item/Likes';
import SavedItems from '../components/profile_item/SavedItems';
import ProfileScreen from '../components/profile_item/ProfileScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile." component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{
        headerTransparent: true,
        headerBackImage: () => <Icon name={'arrowLeft'} />
      }} />
      <Stack.Screen name="History" component={History} options={{
        headerTransparent: false, 
        headerStyle: {
          backgroundColor: 'black',
        },
        headerBackImage: () => <Icon name={'arrowLeft'} />
      }} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Saved Items" component={SavedItems} />
    </Stack.Navigator>
  );
}
