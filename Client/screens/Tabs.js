import Homepage from './Homepage';
import Profile from './Profile';
import Search from './Search';
import Bookmark from './Bookmark';
import Items from '../data/item';
import Help from './Help';
import Header from '../shared/header';

import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Upload from './Upload';

/*
TODO: make the header font bigger
TODO: dark and light mode
*/

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Navigate between the multiple pages of the app by pressing on the icons
export default function Tabs() {

  // Screen Options
  const screenStyle = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'ios-home' : 'ios-home';
      }
      else if (route.name === 'Search') {
        iconName = focused ? 'ios-search' : 'ios-search';
      }
      else if (route.name === 'Profile') {
        iconName = focused ? 'ios-person' : 'ios-person';
      }
      else if (route.name === 'Sell') {
        iconName = focused ? 'logo-usd' : 'logo-usd';
      }
      else if (route.name === "Bookmark") {
        iconName = focused ? "ios-bookmark" : "ios-bookmark";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerTitleAlign: 'center',
    shifting: true,
    // Dark mode
    tabBarStyle: {
      backgroundColor: "#121212",
      paddingBottom: "1%",
      paddingTop: "1%"
    },
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTitleStyle: {
      color: '#e4000f',

    },
    tabBarActiveTintColor: "#ffff33",
    tabBarInactiveTintColor: '#e4000f',

    // Light mode
    // tabBarStyle: {
    //   backgroundColor: "#FFFFF7",
    //   paddingBottom: "1%",
    //   paddingTop: "1%"
    // },
    // headerStyle: {
    //   backgroundColor: '#FFFFF7',
    // },
    // headerTitleStyle: {
    //   color: '#990000',
    // },
    // tabBarActiveTintColor: "#4267B2",
    // tabBarInactiveTintColor: '#990000',
  });

  // Home options
  const homepageStyle = () => ({
    headerTitle: "KnightMarket",
    headerTitleAlign: 'center'
  })

  const SellStyle = () => ({
    headerTitleStyle: {
      color: "#e4000f",
    },
    headerStyle: {
      backgroundColor: "#121212",
    },
    headerTintColor: "#e4000f",
    title: "Sell",
  })

  const searchStyle = () => ({
    headerShown: false,
  })

  return (
    <Tab.Navigator style={styles.container} screenOptions={screenStyle}>
      {/* List of tabs */}
      <Tab.Screen name="Home" component={Homepage} options={homepageStyle} />

      <Tab.Screen name="Sell" component={Upload} options={({ navigation }) => ({
        headerRight: () => (
          <Header navigation={navigation} />
        ), SellStyle,
        headerBackImage: () => <Icon name={'arrowLeft'} />
      })} />

      <Tab.Screen name="Search" component={Search} options={searchStyle} />

      <Tab.Screen name="Bookmark" component={Bookmark} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
  }
})