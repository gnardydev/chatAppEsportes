import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

import { styles } from "./styles";
import { ProfileIcon } from "../ProfileIcon";


export function SecondHeader(){
    return(
        <View style={styles.container}>

            <TouchableOpacity>
                <MaterialIcons name="keyboard-arrow-left" size={30} color="#075E54" />
            </TouchableOpacity>

            <ProfileIcon hasStatus />

            <View style={styles.contentText}>

                <Text style={styles.name}>
                Name
                </Text>

                <Text style={styles.status}>
                1 Minuto atrás
                </Text>

            </View>

        </View>
    )
}
