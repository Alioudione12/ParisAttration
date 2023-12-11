import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constantes/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    map:{
        width:'100%',
        height:'100%',
    },
    header:{
        position:'absolute',
        top:40,
        flex:1,
        flexDirection:'row',
        width:width - 110,
        padding:8,
        margin:24,
        alignItems:'center',
    },
    title:{
        fontSize:18,
        color:colors.textPrimary,
        borderRadius:20,
        marginRight:16,
    },
    back:{
        width:30,
        height:30,
        marginRight:20,
    },


});
export default styles;
