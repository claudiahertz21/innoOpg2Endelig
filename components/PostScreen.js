import React, {Fragment, useEffect, useRef, useState} from "react";
import {Camera} from "expo-camera";
import {Button, Image, Linking, Platform, ScrollView, Text, TouchableOpacity, View} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {StatusBar} from "expo-status-bar";
import GlobalStyles from '../globalStyling/GlobalStyles';

//Her oprettes en funcktion til at brugeren kan bruge kameraet

const PostScreen = ({navigation}) => {

//En del konstanter der senere skal bruges til funktionaliteten defineres globalt
    const cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);
    const [imagesArr, setImagesArr] = useState([]);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [loading,setLoading] = useState(false);

    //Følgende funktion skal bruges til at "loope" hver gang komponenten bliver kørt - kører en gang hver gang
    useEffect(() => {
        (async () => {
            //her inhentes tilladelse til kameraet
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                //Er tillaelse ikke givet, gives en besked om dette
                alert('Sorry, we need camera permissions to make this work!');
            }
            //Her inhentes tilladelse til at bruge galleriet
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    //Er tillaelse ikke givet, gives en besked om dette
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
            //Defineres i en state om der er givet tilladelse for at have styr på det
            setHasPermission(status === 'granted');
        })();
    }, []);

    //Hvis der ikke er givet tilladelse til kameraet, vises ingenting i et tomt view
    if (hasPermission === null) {
        return <View />;
    }

    //Hvis der er afvist tilladelse skrives dette og der bliver gjort mulighed for at ændre indstillingerne
    if (hasPermission === false) {
        return(
            <View style={GlobalStyles.gallery}>
                <Text>No access to camera</Text>
                <Button title={"Change settings"} onPress={() => Linking.openSettings()}/>
            </View>
        )
    }

    //Funktionen snap beskriver hvad der skal ske ved billede tagning
    const snap = async () => {
        if (!cameraRef.current) {
            return;
        }
        setLoading(true);
        //Bliver der taget et billede skal resultatet ventes på af en anden asynkron funktion - await
        const result = await cameraRef.current.takePictureAsync();

        //Biledet bliver "gemt" ved at lægge det i et array (først)
        setImagesArr((imagesArr) => [result].concat(imagesArr));
        setLoading(false);
    };

    //Nedenfor er koden der skal vise billederne taget med kameraet
    const CameraGallery = () => {
        return (
            <View style={GlobalStyles.gallery}>
                <Text style={GlobalStyles.buttonGallery}>Billeder taget: {imagesArr.length}</Text>
                <ScrollView horizontal={true} >
                    {
                        imagesArr.length > 0
                            ? imagesArr.map((image,index) => (
                                <TouchableOpacity key={index} style={{paddingHorizontal:10}} onPress={() => navigation.navigate('image',{image:image.uri}) } >
                                    <Image source={{ uri: image.uri }} style={{ width: 100, height: 200 }} />
                                </TouchableOpacity>
                            ))
                            : <Text style={{color:"yellow"}}> Ingen billeder taget </Text>
                    }
                </ScrollView>
            </View>
        )
    };

    //Brugere har også mulighed for at "Uploade" billeder fra galleri
    //Dette håndteres nedenfor
    const pickImage = async () => {

        //Vi bruger ImagePicker til at vælge et billede fra galleri der er indbygget i modulet expo-image-picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImagesArr((imagesArr) => [result].concat(imagesArr));
        }
    };

    //Her returneres det der skal vises på skærmen
    return (
        <Fragment>
            <StatusBar StatusBarStyle="dark-content" style={{fontcolor:"white"}} backgroundColor={'rgba(255,255,255,0.4)'} />
            <View style={GlobalStyles.container}>
                <Camera style={GlobalStyles.camera} type={type} ref={cameraRef}>
                    <View style={{flexDirection:"column",alignContent:"center",flex:1,padding:20}}>
                        <View style={GlobalStyles.buttonContainer}>
                            <TouchableOpacity
                                style={GlobalStyles.button}
                                onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                    );
                                }}>
                                <Text style={GlobalStyles.text}> Flip </Text>
                            </TouchableOpacity>

                            {/*Tag billede*/}
                            <TouchableOpacity
                                style={GlobalStyles.button}
                                onPress={snap}
                            >
                                {/*Hvis der er loading, vises dette, ellers vises "Tag billede"*/}
                                <Text style={GlobalStyles.text}>
                                    {loading ? "Loading..." :"Tag billede"}
                                </Text>
                            </TouchableOpacity>

                            {/*Vend Kameraet om*/}
                            <TouchableOpacity
                                style={GlobalStyles.button}
                                onPress={pickImage}
                            >
                                <Text style={GlobalStyles.text}> Galleri </Text>
                            </TouchableOpacity>
                        </View>
                        <CameraGallery/>
                    </View>
                </Camera>
            </View>
        </Fragment>
    );
};

export default PostScreen;