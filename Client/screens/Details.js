import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/*
TODO: Swipe horizontally to view more images
*/

//Move from the homepage to details of indiviaual item.
// This information is fetched from the database and displayed here
export default function Details({ route }) {
  const { id, name, price, description, image } = route.params;
  const [contact, setcontact] = React.useState("");


  const numID = id;
  const address = "https://quiet-oasis-96937.herokuapp.com/Marketusers/" + numID;

  const getUser = async () => {
    try {

        const response = await fetch(address);

        const json = await response.json();

        const cont = json.phonenum;
        setcontact(cont);
        console.log("this------------------------" + cont ,  contact);
    } catch (error) {
        console.error(error);
    } 
}

useFocusEffect(
  useCallback(() => {
    getUser();
  }, [])
);



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.details}>
            <Text style={styles.name}>{name}</Text>
            <Image source={{
          uri: image,
        }} style={styles.image}></Image>
            <Text style={styles.price}>${price}</Text>
          </View>
          <View style={styles.line} />
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.line} />
          <Text style={styles.contactTitle}>Seller Contact</Text>
          <Text style={styles.contact}>{contact}</Text>
          <TouchableOpacity style={styles.report} onPress={() => alert("Thank you for notifying us! We will take a look at the item ASAP!")}>
              <Icon name="flag-variant" size={40} style={{ color: "red" }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },

  report: {
    alignContent: "center",
    flex: 1,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
  },

  scrollView: {
    margin: 10,
  },

  line: {
    borderWidth: 0.5,
    borderColor: 'white',
    marginTop: 10,
    marginBottom: 10,
  },

  details: {
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginBottom: 2
  },

  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },

  price: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
  },

  descriptionTitle: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  description: {
    color: 'white',
    textAlign: 'justify',
    fontSize: 20,
    marginBottom: 5,
  },

  contactTitle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  contact: {
    color: 'white',
    textAlign: 'justify',
    fontSize: 20,
  },
})