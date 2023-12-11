import {StyleSheet} from 'react-native';
import colors from '../../constantes/colors';

const styles = StyleSheet.create({
    item:{
        fontSize: 14,
        fontWeight: 'bold',
        color:colors.textPrimary,
        paddingVertical: 2,
    },
    selectedItem:{
        color:colors.textPrimary,
    },
    itemContainer:{
        marginBottom: 14,
        marginRight: 17,
    },
    selectedItemContainer:{
        borderBottomColor: colors.colorTomato,
        borderBottomWidth: 1,
    },
});
export default styles;