import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constantes/colors';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:24,
    },
    mainImage:{
        width:'100%',
        height:height / 2,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    },
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    icon:{
        width:30,
        height:30,
        marginTop:10
    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'rgba(255,114,94,0.70)',
        margin:16,
        paddingHorizontal:8,

    },
    miniImage:{
        width:40,
        height:40,
        marginHorizontal: 4,
        marginVertical: 8,
        borderRadius: 10,
    },
    moreImages:{
        color:colors.colorTomato,
        fontWeight: 'bold',
        fontSize: 20,
    },
    moreImagesContainer:{
        position: 'absolute',
        backgroundColor:'rgba(15,44,67,0.80)',
        width: 40,
        height: 40,
        top: 8,
        left: 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical: 4,
        //backgroundColor:'rgba(15,44,67,0.50)',
        padding: 8,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color:colors.textPrimary,
        marginLeft: 10,
    },
    city:{
        fontSize: 14,
        color:colors.textSecondary,
        fontWeight: '500',
        marginTop: 8,
        marginLeft: 10,

    },
    price:{
        fontSize: 20,
        fontWeight: 'bold',
        color:colors.colorTomato,
    },
    map:{
        width:'100%', 
        height:200,
        borderRadius:10,
        marginTop:10,
    },
    mapButton:{
        margin: 10,
        marginBottom: 10,
    },
    });
export default styles;