import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Colors from './constants/colors';

import Header from './components/header';
import StartAppScreen from './screens/startAppScreen';
import EventScreen from './screens/eventScreen';
import ItemScreen from './screens/itemScreen';


export default function App() {

  const [eventSelected, setEventSelected]= useState();
  const [itemSelected, setItemSelected]= useState();

  const [Loaded] = useFonts({
    Abel: require('./assets/fonts/Abel-Regular.ttf')
  })
  if (!Loaded) return <AppLoading />

  const handleEventSelected = (event) => {
    setEventSelected(event);
  }

  const handleGoBack = () =>{
    setEventSelected(null)
    console.log('volver')
  }
  const handleItemSelected = (item) => {
    setItemSelected(item);
  }
  
  let content =<StartAppScreen onStartApp={handleEventSelected} onEvent={() => {}} />;
  
  if(eventSelected) {
    content = <EventScreen onEvent={handleItemSelected} eventSelected={eventSelected} goBack={handleGoBack} onItem={() =>{}} />
    if(itemSelected){
      content =<ItemScreen itemSelected={itemSelected}/>
    }
    if(eventSelected==null){
    content =<StartAppScreen />
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
       <Header title={'Planeador de Eventos'} />
       {content}
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.body,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
