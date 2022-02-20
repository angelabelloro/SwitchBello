import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Constants from 'expo-constants';
import Colors from '../constants/colors';

const Header = ({ title}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 100,
        paddingTop: Platform.OS ==='ios' ? 0 : Constants.statusBarHeight,
        backgroundColor:Colors.primary,
        justifyContent:'center',
},
    headerTitle: {
        textAlign: 'center',
        color: '#fff',
        fontFamily:'Abel',
        fontSize: 25,
    },

});
export default Header