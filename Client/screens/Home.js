import Tabs from './Tabs';
import Details from '../screens/Details';
import HistoryDetails from '../screens/HistoryDetails';
import Welcome from './Welcome';
import Login from '../components/Login';
import Header from '../shared/header';
import Help from './Help';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../components/SignUp';
import { LogBox } from 'react-native';

//Set this so cycle messages do not pop up during us
LogBox.ignoreLogs([
    'Require cycle:'
])

//Host all the main screens here.
export default function Home() {
    const Stack = createNativeStackNavigator();

    const detailStyle = () => ({
        headerTitleStyle: {
            color: "#e4000f",
        },
        headerStyle: {
            backgroundColor: "#121212",
        },
        headerTintColor: "#e4000f",
        title: "Details",
    })

    const helpStyle = () => ({
        headerTitleStyle: {
            color: "#e4000f",
        },
        headerStyle: {
            backgroundColor: "#121212",
        },
        headerTintColor: "#e4000f",
        title: "Help",
    })

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <StatusBar barStyle='light-content' hidden={true} />
                <Stack.Navigator>
                     <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{
                        headerTransparent: true,
                        headerBackImage: () => <Icon name={'arrowLeft'} />
                    }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{
                        headerTransparent: true,
                        headerBackImage: () => <Icon name={'arrowLeft'} />
                    }} /> 
                    <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
                    <Stack.Screen name="Help" component={Help} options={helpStyle}/>
                    <Stack.Screen name="Details" component={Details} options={detailStyle} />
                    <Stack.Screen name="HistoryDetails" component={HistoryDetails} options={detailStyle} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* <Image style={styles.logo_container}
        source={require('../assets/logo.png')}
        height={50}
        width={50}/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // marginTop: 20, // shows statusbar clearly
    },
})