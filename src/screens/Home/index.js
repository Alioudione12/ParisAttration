import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View} from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";
import jsonData from '../../data/attractions.json'
import categories from '../../data/categories.json'

const TOUT = 'Tout';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('Tout')
  const [data, setData] = useState([])
  
//filtering data
  useEffect(()=>{
    setData(jsonData)
  },[])

//categories filtering

  useEffect(()=>{
    if(selectedCategory === TOUT){
      setData(jsonData)
    }
    else{
      const filteredData = jsonData?.filter(item => item?.categories?.includes(selectedCategory))
      setData(filteredData)
    }
  },[selectedCategory])


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        style={{flexGrow:1}}
        ListEmptyComponent={<Title text='OUF..! Aucune attraction trouvée' style={styles.emptyText}/> }
        ListHeaderComponent={(
        <>
        <View style={{margin:32}}>
          <Title style={{fontWeight:'normal'}} text='Bienvenue à paris'/>
          <Title text='Visitez en toute confiance'/>
          <Title text='Explorez les attractions a paris' style={styles.subtitle}/>
          </View>
          <Categories 
            selectedCategory={selectedCategory} 
            onCategoryPress={setSelectedCategory} 
            categories={[TOUT,...categories]}
          />
        </>
        )}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
          onPress={()=> navigation.navigate('AttrationDetail', {item})}
          key={item.id}
          style={index % 2 === 0 ? {marginRight: 12, marginLeft: 32}: {marginRight: 12}}
          title={item.name}
          subtitle={item.city}
          imageSrc={ item.images?.length ? item.images[0]: null}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default React.memo(Home) ;