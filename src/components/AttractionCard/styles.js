import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constantes/colors';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    card:{
        padding:4,

    },
    image:{
        width: (width - 96) / 2,
        height: 120,
        borderRadius: 10,
    },
    title:{
        fontSize:13,
        width: (width - 96) / 2,
        fontWeight:'800',
        color:colors.textPrimary,
        marginTop:12,
        marginLeft:6,

    },
    subtitle:{
        fontSize: 14,
        fontWeight: 'normal',
        color:colors.colorTomato,
        marginLeft:4,
        
        
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12,
        marginTop:4,
        width: (width - 96) / 2,
    },
    icon:{
        width:14,
        height:14,
 
    },
});
export default styles;
