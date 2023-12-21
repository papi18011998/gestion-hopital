import { StyleSheet } from "react-native";
import { COLORS, PADDING, TEXT_SIZE } from "../../outils/constantes";

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
    title:{
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal
    },
    title_space_between:{
        marginTop:15,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        flexDirection: "row",
        justifyContent:"space-between",
    
    },
    titleBold:{
        fontWeight:"bold"
    },
    link:{
        color: COLORS.main
    },
    doctorsContainer:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical
    },
    doctorCard:{
        flex: 1,
        flexDirection:"row",
        backgroundColor:"#FFFFFF",
        elevation:5,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginBottom:10,
        borderRadius: 10
    },
    doctorImg:{
        width: 80,
        height:80,
        borderRadius: 80,
        marginTop:15
    },
    doctorInfo:{
        flexDirection:"column",
        marginLeft: 15
    },
    doctorName:{
        fontWeight:"bold",
        fontSize: 16,
        marginBottom:15
    },
    doctorSpec:{
        color: "#FFFFFF",
        backgroundColor: COLORS.main,
        padding:5,
        paddingHorizontal: PADDING.horizontal,
        borderRadius:15,
        fontSize: 14,

    }
});