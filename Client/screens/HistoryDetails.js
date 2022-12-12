import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Button, Alert } from "react-native";
import { useDispatch } from 'react-redux';
import { removeFromSalesHistory } from '../components/redux/reducer/historySlice';
import { useNavigation } from '@react-navigation/native';

// The item displayed in sales history
// Item can be deleted from the service from here
export default function Details({ route }) {
  const { id, name, price, description, category, image, contact } = route.params;
  const dispatch = useDispatch();

  const newItem = {
    id: id,
    name: name,
    price: price,
    description: description,
    category: category,
    image: image,
    contact: contact
  };

  const requestOptions = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  };
  const text = JSON.stringify(newItem.id);

  const address = "https://quiet-oasis-96937.herokuapp.com/useritem/" + text;

  const navigation = useNavigation();

  const deleteItem = async () => { // pass userid as parameter
    try {
      const response = await fetch(address, requestOptions);
      const responseData = await response.text();

      console.log("Successfully deleted from database.");

      // Remove item in Sales History from redux
      dispatch(removeFromSalesHistory(newItem));
      Alert.alert(
        "Alert",
        "Item successfully removed",
        [
          { text: "OK", onPress: () => navigation.navigate("History") }
        ]
      );
    }
    catch (error) {
      console.error(error);
    }
  }

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
          <Text style={styles.descriptionTitle}>Desciption</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.line} />
          <Text style={styles.contactTitle}>Seller Contact</Text>
          <Text style={styles.contact}>{contact} </Text>
          <View style={styles.line} />
          <View style={styles.button}>
            <Button title="Remove Item" color='white' onPress={() => deleteItem()} />
          </View>
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

  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 15,
    width: "50%",
    alignSelf: 'center',
    marginTop: 5,
  }
})