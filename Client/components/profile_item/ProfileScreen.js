import React, { useState, useEffect, useCallback } from 'react';
import Settings from './Settings';
import History from './History';
import Likes from './Likes';
import SavedItems from './SavedItems';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Button, TouchableOpacity, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function ProfileScreen({ navigation }) {
  const [userID, setuserID] = React.useState("");
  const [userName, setuserName] = React.useState("");
  const [usercontact, setusercontact] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Set the user ID into the user info
  const id = useSelector((state) => state.userID);
  const [loading, setLoading] = React.useState(false);
  console.log(id[0]);
  // setuserID(id[0]);
  // id[0];
  const num = id[0];

  const address = "https://quiet-oasis-96937.herokuapp.com/Marketusers/" + num;
  console.log(address)

  const userInfo = {
    ID: '',
    contact: '',
    name: '',
  }

  const getUser = async () => {
    try {
      const response = await fetch(address);
      const json = await response.json();
      setuserName(json.name);
      setusercontact(json.phonenum);
      console.log(json + "----------aaaa-------")
      console.log(json.name)
      console.log(json.phonenum)
      userInfo.contact = json.phonenum;
      userInfo.name = json.name;

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }




const  updateContact = async () => {
  try {
    const response = await fetch( address, requestOptions2)
    const json = await response.json();
    console.log("works-------------")
    }
    catch (error) {
      console.error(error);
    }

}


const requestOptions2 = {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "phonenum": usercontact,
  })
};



  useFocusEffect(
    useCallback(() => {
      getUser();
    }, [])
  );

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };


  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <View style={styles.upPart}>
            <TouchableOpacity onPress={openImagePickerAsync}>
              <View>
                <Image source={{ uri: selectedImage.localUri }} style={styles.img} />
              </View>
            </TouchableOpacity>

            <View style={styles.upPartTextView}>
              <Text style={styles.upPartText}>Name: {userName}</Text>
              <Text style={styles.upPartText}>Phonenum: {usercontact}</Text>

            </View>

          </View>

          <View style={styles.itemsList}>

            {/* Touch Event */}
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <View style={styles.itemTabs}>
                <View style={styles.icons}><Ionicons name="settings" size={30} color="#0066ff" /></View>
                <Text style={styles.items} >
                  Setting{"\n"}
                  <Text style={styles.secondery}>Notification · Password · Help</Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('History')}>
              <View style={styles.itemTabs}>
                <View style={styles.icons}><Ionicons name="document-text" size={30} color="#a4de02" /></View>
                <Text style={styles.items} >
                  Sales History{"\n"}
                  <Text style={styles.secondery}>List of Your Sales</Text>
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>

        <View style={styles.upPart}>
          <TouchableOpacity onPress={openImagePickerAsync}>
            <View>
              <Image source={{ uri: 'https://waetag.com/wp-content/plugins/buddyboss-platform/bp-core/images/profile-avatar-buddyboss.png' }} style={styles.img} />
            </View>
          </TouchableOpacity>

          <View style={styles.upPartTextView}>
            <Text style={styles.upPartText}>Name: {userName} {userInfo.name}</Text>
            <Text style={styles.upPartText}>contact: {usercontact} {userInfo.contact}</Text>
          </View>
      <View style = {styles.TextInputAndButton}>
          <TextInput style={styles.typeInput}
            placeholder="Contact..."
            value={usercontact}
            onChangeText={(value) => setusercontact(value.trim())}>
          </TextInput>
          <TouchableOpacity onPress={() => 
        {
          if (usercontact == null) {
            alert("Please type your contact address")
         
          }
          else {
            updateContact();
          }
          
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Change</Text>

      </TouchableOpacity>
      </View>


        </View>

        <View style={styles.itemsList}>

          {/* Touch Event */}
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View style={styles.itemTabs}>
              <View style={styles.icons}><Ionicons name="settings" size={30} color="#0066ff" /></View>
              <Text style={styles.items} >
                Setting{"\n"}
                <Text style={styles.secondery}>Notification · Password · Help</Text>
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('History')}>

            <View style={styles.itemTabs}>
              <View style={styles.icons}><Ionicons name="document-text" size={30} color="#a4de02" /></View>
              <Text style={styles.items} >
                Sales History{"\n"}
                <Text style={styles.secondery}>List of Your Sales</Text>
              </Text>
            </View>
          </TouchableOpacity>


        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
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

  tasksWrapper: {
    paddingHorizontal: 20,
  },
  itemsList: {
    marginTop: 50,
  },
  items: {
    fontSize: 18,
    marginLeft: 10
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  img: {
    width: 130,
    height: 130,
    marginTop: 30,
    borderRadius: 100,
    justifyContent: 'center'
  },
  upPart: {
    // flexDirection: 'row',
    alignItems: 'center'
  },
  upPartTextView: {
    alignItems: "center",
    marginTop: 20,
    // marginBottom: 10
  },
  upPartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white"
  },
  itemTabs: {
    flexDirection: 'row',
    fontSize: 17,
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: "center"
  },
  icons: {
    justifyContent: "center"
  },
  secondery: {
    color: "grey",
    fontSize: 13
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
    fontSize: 10,
  },
  TextInputAndButton: {
    flexDirection: 'row',
    justifyContent: 'center'

  }
});