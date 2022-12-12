import Lamp from '../components/search_item_category/Lamp';
import Chair from '../components/search_item_category/Chair';
import Desk from '../components/search_item_category/Desks';
import Electronics from '../components/search_item_category/Elec';
import LapComs from '../components/search_item_category/LapComs';
import Sofa from '../components/search_item_category/Sofa';
import Etc from '../components/search_item_category/Etc';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchBarIcon from 'react-native-vector-icons/MaterialIcons';

/*
TODO: change the header name of category to match it's respective name
TODO: output the search item filter
*/

//Appropriately use the search bar to search for an item
//Items with name similar to inserted text will be displayed
function SearchScreen({ navigation }) {
  const [categoryState, setCategoryState] = useState(true);
  const [search, setSearch] = useState("");

  const searchItem = (text) => {
    setSearch(text);
  }

  return (
    <View style={styles.container}>
      {/* SearchBar */}
      <View style={styles.searchSection}>
        <SearchBarIcon style={styles.searchIcon} name="search" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Search for an item!"
          underlineColorAndroid="transparent"
          value={search}
          onChangeText={(text) => searchItem(text)}
          onFocus={() => setCategoryState(false)}
          onBlur={() => setCategoryState(true)}
        />
      </View>
      {/* Category */}
      {
        categoryState ? (
          <View style={styles.IconsRawsContainer}>
            <View style={styles.buttonraw} >
              <TouchableOpacity style={styles.buttonView} onPress={() => { navigation.navigate('Lamp') }} >
                <Icon name="floor-lamp" size={50} color="white" />
                <Text style={styles.icontext}>Lamp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonView} onPress={() => { navigation.navigate('Chair') }}>
                <Icon name="chair-rolling" size={50} color="white" />
                <Text style={styles.icontext}>Chair</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonView} onPress={() => { navigation.navigate('Desk') }}>
                <Icon name="table-furniture" size={50} color="white" />
                <Text style={styles.icontext}>Desk</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonraw}>
              <TouchableOpacity style={styles.buttonView} onPress={() => { { navigation.navigate('Electronics') } }}>
                <Icon name="tablet-android" size={50} color="white" />
                <Text style={styles.icontext}>Electronics</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonView} onPress={() => { { navigation.navigate('LapComs') } }}>
                <Icon name="laptop" size={50} color="white" />
                <Text style={styles.icontext}>Laptop and Computer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonView} onPress={() => { navigation.navigate('Sofa') }}>
                <Icon name="sofa" size={50} color="white" />
                <Text style={styles.icontext}>Sofa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonraw}>
              <TouchableOpacity style={styles.buttonView} onPress={() => { navigation.navigate('Etc') }}>
                <Icon name="dots-horizontal-circle" size={50} color="white" />
                <Text style={styles.icontext}>Others</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) :
          <View>
            {/* TODO */}
          </View>
      }
    </View>
  );
}

const Stack = createNativeStackNavigator();

//Navigate to all the category pages without issue
export default function Search() {

  const searchPageHeader = ({ }) => ({
    headerTitle: 'Search',
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'

  })

  const LampHeader = ({ route }) => ({
    headerTitle: "Lamps",
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'
  })

  const ChairHeader = ({ route }) => ({
    headerTitle: "Chairs",
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'
  })

  const DeskHeader = ({ route }) => ({
    headerTitle: "Desks",
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'
  })


  const ElectronicsHeader = ({ route }) => ({
    headerTitle: "Electronics",
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'
  })

  const LapComsHeader = ({ route }) => ({
    headerTitle: "Laptop and Computer",
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'
  })

  const SofaHeader = ({ route }) => ({
    headerTitle: "Sofa",
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'
  })

  const EtcHeader = ({ route }) => ({
    headerTitle: "Others",
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'
  })

  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={searchPageHeader} />
      <Stack.Screen name="Lamp" component={Lamp} options={({ route }) => LampHeader({ route })} />
      <Stack.Screen name="Chair" component={Chair} options={({ route }) => ChairHeader({ route })} />
      <Stack.Screen name="Desk" component={Desk} options={({ route }) => DeskHeader({ route })} />
      <Stack.Screen name="Electronics" component={Electronics} options={({ route }) => ElectronicsHeader({ route })} />
      <Stack.Screen name="LapComs" component={LapComs} options={({ route }) => LapComsHeader({ route })} />
      <Stack.Screen name="Sofa" component={Sofa} options={({ route }) => SofaHeader({ route })} />
      <Stack.Screen name="Etc" component={Etc} options={({ route }) => EtcHeader({ route })} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    // flexDirection: 'column',
    // justifyContent: 'space-evenly',
    // alignItems: 'center'
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 10,
    height: 40,
  },

  searchIcon: {
    padding: 10,
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#f5f5f5',
    color: '#424242',
    borderRadius: 20,
  },

  IconsRawsContainer: {
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center'
  },

  buttonraw: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },

  buttonView: {
    width: '25%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  icontext: {
    justifyContent: 'center',
    color: 'white'
  },

  Iconsview: {
  }
})

{/* https://reactnative.dev/docs/image */ }
{/* https://www.prudentdevs.club/btns-imgs-in-react-native */ }