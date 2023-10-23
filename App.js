import 'react-native-gesture-handler';
//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import InspirationScreen from './components/InspirationScreen';
import PostScreen from './components/PostScreen';
import ChatScreen from './components/ChatScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Card } from 'react-native-paper';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import GlobalStyles from './globalStyling/GlobalStyles';
//Der oprettes en drawernavigator (side menu)
const Drawer = createDrawerNavigator();




const firebaseConfig = {
  apiKey: "AIzaSyAZ022pw0MIUFVQ5MqjAyEHfbuHISDVylE",
  authDomain: "fir-39f82.firebaseapp.com",
  projectId: "fir-39f82",
  storageBucket: "fir-39f82.appspot.com",
  messagingSenderId: "87416489298",
  appId: "1:87416489298:web:ddd2a75199574d9867a68b",
  measurementId: "G-2CBF5T4VPQ"
};

//Start firebase op

export default function App() {
  const [user, setUser] = useState({ loggedIn: false });

  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log("Firebase On!");
    // ellers send besked om at firebase ikke er startet op
  } else {
    console.log("Firebase not on!");
  }
 
  const auth = getAuth();

  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        callback({loggedIn: true, user: user});
        console.log("You are logged in!");
      } else {
        callback({loggedIn: false});
      }
    });
  }

 //her oprettes en useEffect, der lytter efter om brugeren er logget ind eller ej
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  //her definieres en guestpage, som vises hvis brugeren ikke er logget ind
  const GuestPage = () => {
    return(
        <View style={GlobalStyles.container}>
          <Text style={GlobalStyles.paragraph}>
            Opret eller Login med din firebase Email
          </Text>
          
          <Card style={{padding:20, margin: 20}}>
            <SignUpForm />
          </Card>
          
          <Card style={{padding:20, margin: 20}}>
            <LoginForm />
          </Card>

        </View>
    )
  }
//I return()  oprettes først en NavigationContainer, som wrapper en Drawer.Navigator
//Drawer.Navigator wrapper tre screens, som får defineret rutenavne og referencer til de komponenter
//som skal fremvises i de enkelte screens
//Komponentern importeres fra "components" mappen.

const LoggedInPage = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name='Inspiration' component={InspirationScreen}/>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='Post' component={PostScreen}/>
        <Drawer.Screen name='Chat' component={ChatScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
//er brugeren logget ind, vises LoggedInPage, ellers vises GuestPage
return user.loggedIn ? <LoggedInPage /> : <GuestPage/> ;
}


