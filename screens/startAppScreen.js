import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
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
 } from "react-native";

 import Colors from "../constants/colors";
 import AddEvent from "../components/addEvent";
 import Event from "../components/event";

const StartAppScreen = ({ onStartApp }) => {
    const [textInput, setTextInput] = useState('');
    const [itemList, setItemList] = useState([]); 
    
    const [eventSelected, setEventSelected] = useState({})

  
    const handleChangeText = (text) => {
      setTextInput(text)
    }
  
    const handleOnPress = () => {
      if (textInput.length>2){
      setTextInput('')
      setItemList([
        ...itemList,
        {
          value: textInput,
          id: Math.random().toString(),
        },
      ])
    } else{
      Alert.alert('Ops,', 'debes ingresar un nombre con un minimo de 3 letras',[
        {text: 'Ok', onPress: () => console.log('cerro alerta de evento')}
      ]);
    }
    }
   /* const onPressEvent = (item) => () => {
      setEventSelected(item)
    }*/

    const handleEventSelected = () => onStartApp (eventSelected)
    
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
        <Text style={styles.subtitle}>Por favor ingresa el nombre de tu ocasión o evento</Text>
      </View>
      <AddEvent
        textInput={textInput}
        handleOnPress={handleOnPress}
        handleChangeText={handleChangeText}
        />
        <FlatList
          data={itemList}
          renderItem={({ item }) => (
            <Event item={item} pressHandler={handleEventSelected} />
          )
          }
          numColumns={2}
          keyExtractor={item => item.id}
        />
    </View>
         </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex:1,
      padding:10,
      alignItems:'center',
    },
    container:{
        flexDirection:'column',
    },
    item:{
      padding: 20,
      flex:1,
      marginHorizontal:5,
      marginVertical:5,
      fontSize: 40,
      backgroundColor: Colors.boxEvent,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    subtitle:{
      padding: 10,
      fontSize: 18,
      textAlign: 'justify',
      color: Colors.font,
      fontFamily: 'Abel',
      //backgroundColor: Colors.header,
    }
  });
  
 export default StartAppScreen;