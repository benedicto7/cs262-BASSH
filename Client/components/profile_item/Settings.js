import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, TouchableOpacity, Button, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const createTwoButtonAlert = () =>
    Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const aboutInfo = () =>
    Alert.alert('KNIGHT MARKET', 'This is an app where you can view items, speak with sellers and negotiate prices for items you want to buy')

  const helpInfo = () =>
    Alert.alert('For help:', 'Email bee6@calvin.edu')

  return (
    <View style={styles.container}>
      <View style={styles.item}>

        <TouchableOpacity>
          <View style={styles.itemTabs12}>
            <View style={styles.icons}><Ionicons name="reorder-four-outline" size={30} color="#f9c70c" /></View>
            <Text style={styles.items} >
              Notification{"\n"}
              <Text style={styles.secondery}>On · Off</Text>
            </Text>
            <Switch style={{ marginLeft: 112 }}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.itemTabs}>
            <View style={styles.icons}><Ionicons name="shield-sharp" size={30} color="#8a00c2" /></View>
            <Text style={styles.items} >
              Security {"\n"}
              <Text style={styles.secondery}>Password · Fingerprint</Text>
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={aboutInfo}>
          <View style={styles.itemTabs}>
            <View style={styles.icons}><Icon name="ios-information-circle" size={30} color="#949494" /></View>
            <Text style={styles.items} >
              About {"\n"}
              <Text style={styles.secondery}>Learn more</Text>
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={helpInfo}>
          <View style={styles.itemTabs}>
            <View style={styles.icons}><Ionicons name="ios-help-circle" size={30} color="#0066ff" /></View>
            <Text style={styles.items} >
              Help {"\n"}
              <Text style={styles.secondery}>Support</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
        <View>
          <Text style={{ width: 60, textAlign: 'center', color: 'white' }}>Danger Zone</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
      </View>

      <View style={styles.danger}>
        <TouchableOpacity onPress={createTwoButtonAlert}>
          <View style={styles.itemTabs}>
            <View style={styles.icons}><Ionicons name="warning" size={30} color="#c30010" /></View>
            <Text style={styles.items} >
              Delete Account {"\n"}
              <Text style={styles.secondery}>Account Withdrawal</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>




    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  danger: {
    paddingHorizontal: 20,
    paddingTop: 20

  },
  item: {
    paddingHorizontal: 20,
    paddingTop: 60
  },
  itemTabs12: {
    flexDirection: 'row',
    fontSize: 16,
    padding: 12,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: "center"
  },
  itemTabs: {
    flexDirection: 'row',
    fontSize: 16,
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: "center"
  },
  icons: {
    justifyContent: "center"
  },
  items: {
    fontSize: 17,
    marginLeft: 10
  },
  secondery: {
    color: "grey",
    fontSize: 13
  }
});

export default Settings;
