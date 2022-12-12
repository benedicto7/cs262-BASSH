import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Help from '../screens/Help';

export default function Header({ navigation }) {
  return (
		<View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <Text style={styles.title}>?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
  	padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
})