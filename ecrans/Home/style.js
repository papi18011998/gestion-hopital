import { StyleSheet } from "react-native";
import { PADDING, TEXT_SIZE } from "../../outils/constantes";

export const dashboardStyle = StyleSheet.create({
    headerStyle:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor:"#FFFFFF"
    },
    userImg:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    userName:{
        fontSize:16
    },
    scrollableList:{
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    scrollableItem:{
        flexDirection: "column",
        paddingHorizontal:15,
        paddingVertical:15,
        marginRight:15,
        backgroundColor:"#FFFFFF",
        elevation: 5,
    },
    topCardImg:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    mainText:{
        fontWeight:"bold",
        fontSize: 16
    },
    subText:{
        marginTop:30,
        fontSize: 10
    },
});