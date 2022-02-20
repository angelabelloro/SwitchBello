import React, {useState} from "react";
import { 
  View,
  Text,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import Colors from '../constants/colors';
import AddItem from '../components/addItem';
import EventItem from "../components/eventItem";

const EventScreen = ({ eventSelected, onEvent, goBack}) => {
  const [textInput, setTextInput] = useState('');
  const [itemList, setItemList] = useState([]); 
    
  const [itemSelected, setItemSelected] = useState({})

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    if(textInput.length>2){
    setTextInput('')
    setItemList([
      ...itemList,
      {
        value: textInput, 
        id: Math.random().toString(),
      },
    ])
  } else{
      Alert.alert('Ops,', 'debes ingresar una tarea minimo de 3 letras',[
      {text: 'Ok', onPress: () => console.log('cerro alerta de item')}
    ]);
  }
}
  
  const handleItemDelete = (item) =>{
    setItemList((itemList) =>{
      return itemList.filter(itemList=> itemList.id !== item)
    })
    console.log('borrado')
  }
  const handleItemSelected = () => onEvent(itemSelected)
  return (
      <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
      }}>
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={30}
          style={styles.screen}
    >
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Evento </Text>
      </View>
    <View>
      <Text style={styles.subtitle}>Por favor ingresa la actividad o el objeto que hace parte de tu evento</Text>
    </View>
    <AddItem
      textInput={textInput}
      handleOnPress={handleOnPress}
      handleChangeText={handleChangeText}
      />
      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <EventItem item={item} pressHandler={handleItemSelected} pressDelete={handleItemDelete} />

        )
        }
        numColumns={2}
        keyExtractor={item => item.id}
      /> 
      <View>
        <Button title = "VOLVER" onPress={goBack} color={Colors.button}/>
      </View>
  </View>
 
       </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    width:'100%',
    flex:1,
    padding:10,
    alignItems:'center',
    backgroundColor: Colors.header,
  },
  container:{
      flexDirection:'column',
  },
  subtitle:{
    padding: 10,
    fontSize: 18,
    textAlign: 'justify',
    color: Colors.font,
    fontFamily:'Abel',
  },
  title:{
    padding: 10,
    fontSize: 30,
    textAlign:'center',
    color:Colors.primary,
  }
});

export default EventScreen;