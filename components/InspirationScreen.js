// ImageDisplayComponent.js
/*import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, FlatList, Dimensions, ScrollView } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getApps, initializeApp } from "firebase/app";
const { width } = Dimensions.get('window');
const columnCount = 2;


const firebaseConfigStorage = {
    apiKey: "AIzaSyCK6BHAOLDMY-8-CHT_LWQYbMLIkfPxHho",
    authDomain: "database-6fbce.firebaseapp.com",
    databaseURL: "https://database-6fbce-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "database-6fbce",
    storageBucket: "database-6fbce.appspot.com",
    messagingSenderId: "718630363488",
    appId: "1:718630363488:web:ee7efb7f65d1092d837e05"
  };
  

  // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
  // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
  
  //const dbStorage = firebaseAppStorage.database();

function InspirationComponent() {
    const firebaseAppStorage = initializeApp(firebaseConfigStorage, 'storage');

    const db = getDatabase(firebaseAppStorage);
  
  const [imagesArr, setImagesArr] = useState([]);

  useEffect(() => {
    // Fetch image URLs from Firebase Realtime Database
    const imagesRef = ref(db, 'Images');

    const handleData = (snapshot) => {
        const data = snapshot.val();
        console.log('Fetched data:', data);
        if (data) {
          const imageUrls = Object.values(data).map((item) => item.imageURI);
          console.log('Image URLs:', imageUrls); // Add this line
          setImagesArr(imageUrls.reverse());
        }
      };
      

    const unsubscribe = onValue(imagesRef, handleData);

    return () => {
      // Detach the listener using the unsubscribe function
      unsubscribe();
    };
  }, [db]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {imagesArr.length === 0 && <Text>No images found</Text>}
      {imagesArr.map((imageURI, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={{ uri: imageURI }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
  
}

export default InspirationComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
}); */
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getApps, initializeApp } from "firebase/app";


const { width } = Dimensions.get('window');
const columnCount = 2; // You can adjust the number of columns

const firebaseConfigStorage = {
    apiKey: "AIzaSyCK6BHAOLDMY-8-CHT_LWQYbMLIkfPxHho",
    authDomain: "database-6fbce.firebaseapp.com",
    databaseURL: "https://database-6fbce-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "database-6fbce",
    storageBucket: "database-6fbce.appspot.com",
    messagingSenderId: "718630363488",
    appId: "1:718630363488:web:ee7efb7f65d1092d837e05"
  };
  

  // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
  // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
  
  //const dbStorage = firebaseAppStorage.database();

function InspirationScreen() {
        // Initialize other firebase products here
const firebaseAppStorage = initializeApp(firebaseConfigStorage, 'storage');

  const db = getDatabase(firebaseAppStorage);

  const [imagesArr, setImagesArr] = useState([]);

  useEffect(() => {
    const imagesRef = ref(db, 'Images');

    const handleData = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const imageUrls = Object.values(data).map((item) => item.imageURI);
        setImagesArr(imageUrls.reverse());
      }
    };

    const unsubscribe = onValue(imagesRef, handleData);

    return () => {
      unsubscribe();
    };
  }, [db]);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={imagesArr}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={columnCount}
      contentContainerStyle={styles.container}
    />
  );
}

export default InspirationScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  imageContainer: {
    margin: 5,
    width: width / columnCount - 10, // Adjust spacing based on the number of columns
    height: width / columnCount, // Maintain aspect ratio
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
