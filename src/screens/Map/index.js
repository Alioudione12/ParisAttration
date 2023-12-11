import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import colors from '../../constantes/colors';


const Map = ({navigation, route}) => {
    const { item} = route?.params || {};

    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    };

    const onBack = () => {
        navigation.goBack();
    };


    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={coords }>
                <Marker coordinate={coords } title={item?.name} pinColor={colors.colorTomato}/>
            </MapView>
            <View style={styles.header}>
            <TouchableOpacity onPress={onBack}>
            <Image source={require('../../images/back.png')} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.title}>{`${item?.name}, ${item?.city}`}</Text>
            </View>
        </View>
    );
};
export default React.memo(Map) ;
