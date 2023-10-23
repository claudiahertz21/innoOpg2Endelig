import React from 'react';
import { Text, View } from 'react-native';
import GlobalStyles from '../globalStyling/GlobalStyles';
//HTom skærm md titel
function HomeScreen(){

    return (
            <View style={GlobalStyles.container} >
                <View style={GlobalStyles.textContainer}>
                    <Text style={GlobalStyles.title}>HomeScreen</Text>
                </View>
            </View>
        )
    
}

//eksport af HomeScreen således denne kan importeres og benyttes i andre komponenter
export default HomeScreen