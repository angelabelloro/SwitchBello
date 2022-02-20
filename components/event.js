import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Colors from '../constants/colors'
import {Entypo} from '@expo/vector-icons';

export default function Event({ pressHandler, item }) {
  return (
    <TouchableOpacity style={styles.itemBox} onPress={() => pressHandler(item.id)}>
      <Text style={styles.fontItem}>{item.value}</Text>
      <Entypo name="chevron-thin-right" size={24} color={Colors.primary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemBox: {
    padding: 20,
    flex:1,
    marginHorizontal:5,
    marginVertical:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    borderRadius: 1,
    borderRadius: 10,
    backgroundColor: Colors.boxEvent,
  },
  fontItem:{
    fontSize: 40,
    color: Colors.font,
    fontFamily: 'Abel'
  }
});