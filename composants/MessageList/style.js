import { StyleSheet } from "react-native";
import { PADDING } from './../../outils/constantes'
export const style = StyleSheet.create({
    messageContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        backgroundColor: "#FFFFFF",
        elevation: 5,
        marginTop: 5,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    messageImg:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15
    },
    messageInfo:{
        flexDirection: "column",
        flex: 1,
        paddingHorizontal: PADDING.horizontal
    },
    dateName:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:5
    },
    name:{
        fontWeight: "bold",
        marginRight:5
    }
});