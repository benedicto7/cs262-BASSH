import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToBookmark, removeFromBookmark, checkItemInBookmark } from './redux/reducer/bookmarkSlice';


const Sell = (props) => {
  // Determines whether the description and details button is shown or not
  const [hide, setHide] = useState(true);

  // Determines how the icon should look like depending on if user bookmarked it or not
  const [bookmark, setBookmark] = useState("bookmark-outline");
  const [bookmarkState, setBookmarkState] = useState(false); // false = item not in bookmark

  const dispatch = useDispatch();

  // The item that user pressed
  const newItem = {
    id: props.id,
    name: props.name,
    price: props.price,
    description: props.description,
    category: props.category,
    image: props.image,
    contact: props.contact
  };

  const changeSize = () => {
    setHide(!hide);
  }

  const handleBookmark = () => {
    // todo: bookmark icon persist in bookmark screen
    if (!bookmarkState) {
      setBookmark("bookmark");
      setBookmarkState(true);

      // Add selected item into bookmark screen
      dispatch(addToBookmark(newItem));
    }
    else {
      setBookmark("bookmark-outline");
      setBookmarkState(false);

      // Remove selected item from bookmark screen
      dispatch(removeFromBookmark(newItem));
    }
  }

  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <TouchableOpacity activeOpacity={0.3} style={styles.Sell} onPress={() => changeSize()} >
        <View style={styles.container}>
          <View>
            <Image source={{
              uri: props.image,
            }} style={styles.image}></Image>
          </View>
          <View style={styles.information}>
            <View>
              <Text style={styles.title}>{props.name}</Text>
            </View>
            <View>
              <Text style={styles.title}>{props.contact}</Text>
            </View>
            <View style={styles.priceAndBookmark}>
              <View>
                <Text style={styles.price}>${props.price}</Text>
              </View>
              <View style={styles.pressBookmark}>
                <TouchableOpacity onPress={() => { handleBookmark() }}>
                  <Icon name={bookmark} size={60} style={styles.bookmark} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={hide ? styles.hide : styles.show}>
          <Text style={styles.description}>{props.description}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", newItem)
            }
            }>
            <Text style={styles.detail}>Details</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Sell;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#121212',
  },

  container: {
    flexDirection: 'row',
  },

  information: {
    width: "69%",
  },

  Sell: {
    backgroundColor: 'white',
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "2%",
    borderWidth: 1,
    borderRadius: 2,
    padding: "3%",
    borderColor: "grey",
  },

  image: {
    height: 100,
    width: 100,
    margin: "2%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: "-2%",
  },

  priceAndBookmark: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: "1%",
  },

  price: {
    fontWeight: 'normal',
    fontSize: 20,
    color: 'maroon',
  },

  pressBookmark: {
  },

  bookmark: {
    color: "gold",
  },

  hide: {
    display: 'none',
  },

  description: {
    fontSize: 20,
    marginTop: "2%",
  },

  detail: {
    width: "28%",
    fontSize: 20,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    marginTop: '1%',
    borderWidth: 1,
    borderColor: "grey",
    textAlign: 'center',
  },
});