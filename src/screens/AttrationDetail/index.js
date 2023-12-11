import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, View} from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import InfoCard from "../../components/InfoCard";
import colors from "../../constantes/colors";
import Button from "../../components/Button";



const AttrationDetail= ({navigation, route}) => {
  const {item} = route?.params || {}; 
  const mainImage = item?.images.length ? item?.images[0]: null;    
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const OpeningHouse = `OUVRIR 
${item?.opening_time} - ${item?.closing_time}`;


  const coords ={
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  }


  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground style={styles.mainImage} imageStyle={{borderRadius:20}} source={{uri:mainImage}}>
            <View style={styles.header}>
              <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
                <Image style={styles.icon} source={require ('../../images/back.png')}/>
              </Pressable>

              <Pressable hitSlop={8}>
                <Image style={styles.icon} source={require ('../../images/share.png')}/>
              </Pressable>
            </View>

            <Pressable onPress={onGalleryNavigate} style={styles.footer}>
              {slicedImages?.map((image, index) => (
                <View key={image}>
                    <Image source={{ uri:image }} style={styles.miniImage} />
                    {diffImages > 0 && index === slicedImages?.length - 1 ? (
                        <View style={styles.moreImagesContainer}>
                            <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                        </View>
                    ) : null}
                </View>
              ))}
            </Pressable>
          </ImageBackground>
          <View style={styles.headerContainer}>
              <View style={{maxWidth:'80%'}}>
              <Title style={styles.title} text={item?.name}/>
                <Text style={styles.city}>{item.city}</Text>
              </View>
              <Title style={styles.price} text={item?.entry_price}/>
          </View>
          <View style={{maxWidth:'80%'}}>
            <InfoCard text={item.address} icon={require('../../images/location_circle.png')}/>
            <InfoCard
                text={OpeningHouse}
                icon={require('../../images/schedule.png')}/>
          </View>

          <MapView style={styles.map} initialRegion={coords}>
            <Marker
              coordinate={coords}
              title={item?.name}
              pinColor={colors.colorTomato}
              //provider={PROVIDER_GOOGLE}
              />
          </MapView>
      </ScrollView>
      <View style={styles.mapButton}>
        <Button onPress={()=>navigation.navigate('Map', {item})}>Afficher la carte en plein écran</Button>
      </View>
  </SafeAreaView>
  );
};
export default React.memo(AttrationDetail) ;