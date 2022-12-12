import store from './components/redux/store'
import Home from "./screens/Home";

import { View, StyleSheet, Header } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

//Call home which calls everything else
export default function App() {

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Home />
      </Provider>
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
    fontFamily: 'Optima',
    fontSize: 30,
  },
  btn_title: {
    fontWeight: 'bold',
    fontFamily: 'Optima',
    fontSize: 20,
  },
  button: {
    backgroundColor: "beige",
    borderRadius: 25,
    padding: 10,
    alignItems: 'center'
  }
});