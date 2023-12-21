import { StyleSheet } from "react-native";
import { COLORS } from './../../outils/constantes'

export const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#EEE"
    },
    input:{
        flex: 1,
        backgroundColor: "#FFF",
        padding: 10,
    },
    send:{
        color: "white",
        padding: 10,
        backgroundColor: COLORS.main
    }
})