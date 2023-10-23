import React from 'react';
import { Text, View } from 'react-native';
import GlobalStyles from "../globalStyling/GlobalStyles";

//ProfileScreen tager navigation med som argument
function ProfileScreen() {

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.textContainer}>
                <Text style={GlobalStyles.text}>ProfileScreen</Text>
            </View>
        </View>
    )
}

//Eksport af ProfileScreen, så denne kan importeres og benyttes i andre komponenter.
export default ProfileScreen