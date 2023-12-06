import { StyleSheet, Dimensions} from "react-native";

const { width } = Dimensions.get('window');
const columnCount = 2; // You can adjust the number of columns



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
    },
    InspirationContainer: {
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
      PostContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      row: {
        flexDirection: 'row',
        height: 30,
        margin: 10,
        alignItems: 'center',
      },
      label: {
        fontWeight: 'bold',
        width: 100,
      },
      PostImageContainer: {
        alignItems: 'center',
      },
      PostImage: {
        width: 200,
        height: 200,
      },
      imageGallery: {
        marginTop: 20,
        alignItems: 'center',
      },
      selectedImage: {
        width: 100,
        height: 100,
        margin: 5,
      },
      searchBarContainerInspiration: {
        backgroundColor: 'white',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        paddingHorizontal: 10,
      },
    
      searchBarInputContainerInspiration: {
        backgroundColor: '#EDEDED',
      },
    
      inspirationContainer: {
        justifyContent: 'space-evenly',
      },
    
      imageContainerInspiration: {
        flex: 1,
        margin: 5,
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden',
      },
    
      imageInspiration: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
      },
})

export default GlobalStyles