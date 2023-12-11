import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        padding:15,
        borderWidth:2,
        borderColor:colors.colorTomato,
    },
    text:{
        color:colors.textPrimary,
        fontSize:16,
        fontWeight:'600',
    }

});
export default styles;