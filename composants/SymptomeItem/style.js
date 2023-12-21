import { StyleSheet } from "react-native";
import {PADDING} from "../../outils/constantes"
export const style = StyleSheet.create({
    item:{
        marginRight:15,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#FFFFFF",
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        borderRadius: 10
    },
    itemImg:{
        width:30,
        height:30,
        marginRight:15
    }
});