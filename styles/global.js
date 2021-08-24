import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },

  container: {
    flex: 1,
    justifyContent: "space-around",
  },

  imageBackgound: {
    flex: 1,
    width: null,
    height: null,
  },

  homeimage: {
    
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  contentSort: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  locationHeader: {
    height: 300,
  },

  fitImage: {
    borderRadius: 20,
  },

  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  closeModal: {
    // backgroundColor: 'green',
    //marginTop: ,
  },
  closeModalContainer: {
    marginTop: 20,
    marginLeft: 20,
    //backgroundColor: 'green',
    height: 50,
    width: 50,
  },

  image2: {
    flex: 1,
    height: 400,
    resizeMode: "cover",
  },
  contentHeader: {
    backgroundColor: "black",
    height: 90,
    alignContent: "center",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  container2: {},
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 5,
    alignContent: "center",
    marginBottom: 5,
  },

  logo: {
    color: "white",
  },
  tinyLogo: {
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  logoVeiw: {
    alignItems: "center",
  },

  connectContainer: {
    height: 300,
    flex: 1,
    // backgroundColor: 'green',
  },
  connectContent: {
    flex: 1,
    // backgroundColor: 'blue',
  },

  connectItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 220,
  },
  white: {
    color: "white",
  },

  darkHeader: {
    backgroundColor: "black",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.5,
  },
  connectText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  eventContainer: {
    height: 300,
    flex: 1,
    // backgroundColor: 'green',
  },
  eventContent: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  },

  eventItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 220,
  },

  eventImage: {
    flex: 1,
    height: 300,
    resizeMode: "cover",
  },
  button: {
    // marginTop: 10,

    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    minWidth: 200,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 9,
  },
  signout: {
    // marginTop: 10,
    justifyContent: "flex-start",
    alignContent: "flex-end",
  },

  homeTop: {
    paddingLeft: 20,

    paddingTop: Platform.OS === "ios" ? 40 : 0,
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "flex-end",
  },
  homeTopHeading: {
    fontSize: 40,
    fontWeight: "900",
    color: "white",
    textTransform: "uppercase",
  },

  homeHeader: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  homeLocations: {
    fontSize: 30,
    fontWeight: "900",
    color: "black",
  },
  homeLocationsDetails: {
    color: "black",
    fontSize: 15,
  },
  locationWrap: {
    marginBottom: 10,
  },
  homewrap: {
    padding: 20,
  
  },

  directionButton: {
    flex: 0,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: 'center',
    borderRadius: 20,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    
    
  },
  locationwoleWrap: {
    backgroundColor: 'green',
  },
  givecontainer:{
    
  },
  imageWrap:{
   height: 300,
 },

 giveText:{
   marginTop:30,
   textAlign:'center',
   fontSize: 30,
   fontWeight:'700',

 },

 givePText:{
  textAlign:'justify',
  marginLeft:20,
  marginRight:20,
 
 },
 
 texthead: {
  color:'white',
  fontWeight: '700',
  fontSize: 40,
 },

 giveImage: {
  
  flex: 1,
  resizeMode: "cover",
  justifyContent: "flex-end",
},


});
