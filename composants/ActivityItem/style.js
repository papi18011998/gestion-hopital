import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
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