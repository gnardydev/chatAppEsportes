import React from 'react';
import { View,Image } from 'react-native';

import { styles } from './styles';

type Props = { //como assim ja define o type?
    hasStatus?: boolean; //tipo boolean
}

export function ProfileIcon({hasStatus}: Props){ //passagem de parametro?
    return(
        <View>
        <View style={styles.container}>
        <Image style={styles.image} source={{uri:'https://randomuser.me/api/portraits/lego/3.jpg'}}/>
        </View>
        {hasStatus === true ? <View style={styles.status}/> //enteder!
        : //do hasStatus
        <></> //fragment
        }        
        </View>
    )
}