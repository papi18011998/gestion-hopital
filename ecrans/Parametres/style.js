import { StyleSheet } from "react-native";
import { PADDING } from './../../outils/constantes'
export const style = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    header:{
        elevation: 5,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center", 
        padding: 10
    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 80
    },
    userInfo:{
        marginLeft: 15
    },
    userName:{
        fontWeight: "bold",
        marginBottom: 5
    },
    userEmail:{
        marginBottom: 5
    }

});