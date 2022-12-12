import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Text, View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons';
import Home from '../screens/Home';
import { saveUserID } from '../components/redux/reducer/userIDSlice';
import { useDispatch } from 'react-redux';

//navigate when pressed. Create a database instance with the data put in
export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [userName, setUserName] = React.useState("");
  const [userPass, setUserPass] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userMail, setUserMail] = React.useState("");

  const newUser = {
    id: '',
    name: userName,
    pass: userPass,
    phone: userPhone,
    email: userMail
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userid": newUser.id,
      "email": newUser.email,
      "name": newUser.name,
      "password": newUser.pass,
      "phonenum": newUser.phone
    })
  };

  const uploadUser = async () => {
    // Post Request to database
    try {
      const response = await fetch("https://quiet-oasis-96937.herokuapp.com/MarketUsers", requestOptions)
      const json = await response.json();
      const idItem = json.id;
      newUser.id = idItem;
      console.log("Response Body -> " + json + " NewItem.ID:  " + newUser.id + " JSON.stringify(json): " + JSON.stringify(json) + " iditem: " + idItem)
    }
    catch (error) {
      console.error(error);
    }

    // Save user ID in redux to be used in Upload.js and ProfileScreen.js
    dispatch(saveUserID(newUser.id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.bandTop}></View>
      <View style={styles.center}>
        <Text style={styles.firstHeading}>Username</Text>
        <TextInput style={styles.typeInput}
          placeholder="Name..."
          value={userName}
          onChangeText={(value) => setUserName(value.trim())}>
        </TextInput>
        <Text style={styles.heading}>Phone Number</Text>
        <TextInput style={styles.typeInput}
          keyboardType='numeric'
          placeholder="61617..."
          value={userPhone}
          onChangeText={(value) => setUserPhone(value.trim())} >
        </TextInput>
        <Text style={styles.heading}>Email</Text>
        <TextInput style={styles.typeInput}
          placeholder="Email..."
          value={userMail}
          onChangeText={(value) => setUserMail(value.trim())}>
        </TextInput>
        <Text style={styles.heading}>Password</Text>
        <TextInput style={styles.typeInput}
          placeholder="Password..."
          value={userPass}
          onChangeText={(value) => setUserPass(value.trim())}>
        </TextInput>
        <Text></Text>
        <TouchableOpacity onPress={() => {
          {
            if (userName == null || userName == "") {
              alert("Please Complete All Fields Before Submitting");
            }
            else if (userPass == null || userPass == "") {
              alert("Please Complete All Fields Before Submitting");
            }
            else if (userMail == null || userMail == "") {
              alert("Please Complete All Fields Before Submitting");
            }
            else if (userPhone == null || userPhone == "") {
              alert("Please Complete All Fields Before Submitting");
            }
            else {
              uploadUser();
            }
          }

          navigation.navigate('Tabs')
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bandBottom}></View>
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
  },

  bandTop: {
    flex: 0.5,
    backgroundColor: 'black',
  },

  bandBottom: {
    flex: 0.5,
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
