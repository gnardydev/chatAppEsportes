import { Entypo } from '@expo/vector-icons';
import {TouchableOpacity, TouchableOpacityProps} from "react-native";
import React from "react";
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    icon?:React.ComponentProps<typeof Entypo>['name']
} //definicao do tipo da entypo, tipagem

export function ButtonsInputMessage({icon, ...rest}:Props){
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <Entypo name={icon} size={25} color="#075E54" />
        </TouchableOpacity> //caixa para texto escrita
    )
}
