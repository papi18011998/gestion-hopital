import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

export const style = StyleSheet.create({
    container:{
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: "#FFF",
        marginTop:15,
        elevation: 5,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
    },
});