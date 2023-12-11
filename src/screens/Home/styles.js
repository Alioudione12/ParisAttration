import {StyleSheet} from 'react-native';
import colors from '../../constantes/colors';

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    subtitle:{
        fontSize:18,
        color:colors.textPrimary,
        marginTop:20,
    },
    row:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    emptyText:{
        textAlign:'center',
        marginTop:40,
        fontSize:12,
        color:colors.colorTomato,
    },

    backContainer:{
        position:'absolute',
        marginHorizontal:20,

    },
    backIcon:{
        width:30,
        height:30,
        marginBottom:10,
    },
    logo:{
        width:60,
        height:40,
        alignSelf:'center',
    },
});
export default styles;