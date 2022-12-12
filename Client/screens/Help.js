import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Help({ navigation }) {

  return (
    <View style={styles.container}>
      {/* Display the fields of the received movie object. */}
      <Text style={styles.title}>Uploading Images</Text>
      <Text style={styles.txt}>To upload images, you must convert them to links.
        A good free website you can use to do so is
        <Text style={{ color: '#00B4D8' }}
          onPress={() => Linking.openURL('https://imgbb.com')}> imgbb.com</Text>
        . You can paste this in the spot for uploading images and we will be able to process this and display your picture. Copy the image link ending in jpg and paste it in the space for image link
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  title: {
    margin: 30,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  txt: {
    margin: 25,
    marginTop: 0,
    padding: 10,
    fontSize: 18,
    color: 'white',
  },
})
