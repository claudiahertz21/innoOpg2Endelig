import React from 'react';
import { Text, View} from 'react-native';
import GlobalStyles from '../globalStyling/GlobalStyles';

//Tom skærm med titel
function ChatScreen(){

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.textContainer}>
                <Text style={GlobalStyles.text}>ChatScreen</Text>
            </View>
        </View>
    )
    
}

//eksport af HomeScreen således denne kan importeres og benyttes i andre komponenter
export default ChatScreen