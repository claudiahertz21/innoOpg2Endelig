import { StyleSheet} from "react-native";


const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    titleStyle:{
        width: '85%',
        textAlign:'center',
        fontSize:30,
        paddingRight:66
    },
    btn:{
        borderRadius:10
    },
    btn_txt:{
        color:'white',
        padding:10,
        textAlign:'center'
    },
    blue:{
        backgroundColor:'blue',
    },
    green:{
        backgroundColor:'green',
    },
    textContainer: {
        flex: 0.1,
        marginTop: 200,
        alignItems: 'center',
        height: 100,
    },
    title: {
        fontSize: 35,
    },
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent:"space-between",
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    buttonGallery: {
        fontSize: 15,
        color:"white",
        padding: 10,
        borderRadius:10,
        alignSelf: 'center',
    },
    button: {
        padding:5,
        alignSelf: 'flex-end'
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
    gallery:{
        flex: 0.4,
        paddingTop:20,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: 300
    }
})

export default GlobalStyles