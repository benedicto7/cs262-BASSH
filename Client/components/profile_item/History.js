import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import HistorySell from '../HistorySell';
import Upload from '../../screens/Upload';
import { useSelector } from 'react-redux';

export default function History() {
  const history = useSelector((state) => state.history);

  if (history.length > 0) {
    return (
      <ScrollView style={styles.containerSellItem}>
        {
          history.map((item) => (
            <HistorySell
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              category={item.category}
              contact={item.contact}
            />
          ))
        }
      </ScrollView>
    )
  }

  else {
    return (
      <View style={styles.container}>
        <Text style={styles.nothing}>Oops! You are not selling anything.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerSellItem: {
    backgroundColor: "#121212",
    flex: 1,
  },

  container: {
    backgroundColor: "#121212",
    flex: 1,
    justifyContent: 'center'
  },

  nothing: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
