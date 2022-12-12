import Sell from '../components/Sell';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

const Bookmark = () => {
  const bookmark = useSelector((state) => state.bookmark);

  useFocusEffect(
    useCallback(() => {
      console.log("item placed!");
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          bookmark.map((item) => (
            <Sell
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
    </View>
  )
}

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
  },

  activityIndicator: {
    // loading screen in middle
  },
})
