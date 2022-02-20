import React from 'react';
import { TextInput, StyleSheet, View, Button} from 'react-native';
import Colors from '../constants/colors';

function AddItem({ textInput, handleChangeText, handleOnPress}){
  return (
      <View>
        <TextInput
        blurOnSubmit={true}
        style={styles.input}
        value={textInput}
        onChangeText= {handleChangeText}
        placeholder='Nombre'
    />  
         <Button
            title="AGREGAR"
            onPress={handleOnPress}
            color={Colors.button}
            />
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  }
});

export default AddItem;