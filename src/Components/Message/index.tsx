import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

type props = { 
    message:string;
    isYou:boolean;
};


export function Message({message, isYou}:props){

    var background = isYou === false ? {backgroundColor: '#fff', marginLeft: '5%', marginBottom: '3%'} : {backgroundColor: '#075E54', marginLeft: '37%', marginBottom: '3%'};
    var text = isYou === false ? {color: '#075E54'} : {color: '#fff'};

    return(
        <View style={[styles.container, background]}>
            <Text style={[styles.message, text]}>
                {message}
            </Text>
        </View>
    )
}