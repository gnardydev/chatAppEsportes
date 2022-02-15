import React from "react";
import { View, Text, TouchableOpacity } from "react-native"; //bibliotecas padrao

import { FontAwesome } from '@expo/vector-icons'; //vector icon fonte

import { ProfileIcon } from "../ProfileIcon"; //vector profile

import { styles } from "./styles"; //import de styles padrao

export function Header(){
    return(
        <View style={styles.container}>

            <Text style={styles.LogoText}>
                LogoAqui
            </Text>

            { <ProfileIcon hasStatus={false}/> /*definicao de status da funcao */}

            <TouchableOpacity>
               <FontAwesome name="bell" size={20} color="#075E54" />
            </TouchableOpacity>
                
        </View>
    )
}