import react, {useState} from "react";
import {View, Button, Text, TouchableWithoutFeedback, Keyboard, Platform, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native';
import Colors from "../constants/colors";

const ItemScreen = ({ onItem }) =>{

  const handleGoBack = () =>{
    Alert.alert('Proximamente estará habilitado')
  }
  return(
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        heyboardVerticalOffset={30}
        style={styles.screen}
        >
     <View>
        <Text style={styles.title}>Actividad </Text>
      </View>
       <View>
            <Text style={styles.subtitle}>Screen en construcción</Text>
            <View>
        <Button title = "VOLVER" onPress={handleGoBack} color={Colors.button}/>
      </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  screen: {
    width:'100%',
    flex:1,
    padding:10,
    alignItems:'center',
    backgroundColor: Colors.boxEvent,
    fontFamily:'Abel'
  },
  title:{
    padding: 10,
    fontSize: 30,
    textAlign:'center',
    color:Colors.primary,
  },
  subtitle:{
    padding: 10,
    fontSize: 18,
    textAlign: 'justify',
    color: Colors.font,
  }
})

export default ItemScreen;