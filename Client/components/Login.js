import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Text, View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons';
import Home from '../screens/Home';
import { saveUserID } from '../components/redux/reducer/userIDSlice';
import { useDispatch } from 'react-redux';

//navigate when pressed. Pull from database for comparison before navigation
export default function Login({ navigation }) {
  const { height, width } = Dimensions.get("window");
  const dispatch = useDispatch();

  const [Username, setuserName] = React.useState("");
  const [userPass, setuserPass] = React.useState("");

  const newUser = {
    id: '',
    username: Username,
    pass: userPass
  }

  const address = "https://quiet-oasis-96937.herokuapp.com/Marketusers/" + Username + "/" + userPass;

  const readUser = async () => {
    try {
      const response = await fetch(address);
      const json = await response.json();
      console.log(json)
      console.log(json.id)

      const iduser = json.id;
      console.log(iduser)

      newUser.id = iduser;

      if (newUser.id == "") {
        alert("Please Check your UserID and Password again");
      }
      else {
        navigation.navigate('Tabs');
      }
    } catch (error) {
      console.error(error);
    }

    // Save user ID in redux to be used in Upload.js and ProfileScreen.js
    dispatch(saveUserID(newUser.id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.bandTop}>
        {/* <Image source={require('../assets/KNIGHTS.png')} height={100} width={100}/> */}
      </View>
      <View style={styles.center}>
        <Text style={styles.firstHeading}>Username</Text>
        <TextInput style={styles.typeInput}
          placeholder="Name..."
          onChangeText={newText => { setuserName(newText) }}>
        </TextInput>

        <Text style={styles.heading}>Password</Text>
        <TextInput style={styles.typeInput}
          placeholder="Password..."
          onChangeText={newText => { setuserPass(newText) }}>
        </TextInput>

        <Text></Text>
        <TouchableOpacity onPress={() => {
          console.log(newUser.id);
          // readUser();
          if (Username == "") {
            alert("Please Complete All Fields Before Submitting");
          }
          else {
            readUser();
            console.log(newUser.id)
           
          }
        }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}> Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bandBottom}>
        {/* <Image source={require('../assets/KNIGHTS.png')} height={100} width={100}/> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 2,
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bandTop: {
    flex: 1,
    backgroundColor: 'black',
  },
  bandBottom: {
    flex: 1,
    backgroundColor: 'black',
  },
  firstHeading: {
    padding: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    padding: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  typeInput: {
    fontSize: 18,
    padding: 10,
    backgroundColor: 'beige',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    marginRight: 20,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});