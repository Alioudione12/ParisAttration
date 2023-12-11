import {StyleSheet} from 'react-native';
import colors from '../../constantes/colors';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 4,
    },
    icon:{
        width:30,
        height:30,
        padding:4,
    },
    title:{
        fontSize: 12,
        fontWeight: '500',
        color:colors.textPrimary,
        marginHorizontal: 8,
    },
});
export default styles;
