import React from 'react';
import { Text, View} from 'react-native';
import GlobalStyles from '../globalStyling/GlobalStyles';


//Tom skærm med titel
function InspirationScreen() {

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.textContainer}>
                <Text style={GlobalStyles.text}>InpirationScreen</Text>
            </View>
        </View>
    )
    

}

export default InspirationScreen