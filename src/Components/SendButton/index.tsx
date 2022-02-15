import React from "react";
import { TouchableOpacity, Alert, TouchableOpacityProps} from "react-native";
import { Feather } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {


}

export function SendButton({...rest}: Props){
    return(
        <TouchableOpacity{...rest}>
            <Feather name="send" size={24} color="#075E54"/> 
       </TouchableOpacity>  
   )    
}