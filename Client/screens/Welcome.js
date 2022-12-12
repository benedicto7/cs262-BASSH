import { View, StyleSheet, Image, Button, Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';

/* sell, search, buy */

const Stack = createNativeStackNavigator();


//Choose between signup and login upon entering the app and navigate to the desired page
export default function Welcome({ navigation }) {

  const { height, width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/knight.png')} height={height} width={width} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.button}>
            <Text style={styles.btn_title}>Log In</Text>
          </View>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View style={styles.button}>
            <Text style={styles.btn_title}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <SignUp/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    // fontFamily: 'Optima',
    fontSize: 30,
  },
  btn_title: {
    fontWeight: 'bold',
    //fontFamily: 'Optima',
    fontSize: 20,
  },
  button: {
    backgroundColor: "beige",
    borderRadius: 25,
    padding: 10,
    alignItems: 'center'
  }
});