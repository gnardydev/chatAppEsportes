import React from "react";
import { View, TextInput, TextInputProps,} from "react-native";
import { styles } from "./styles";
import { ButtonsInputMessage } from "../ButtonsInputMessage";
import { SendButton } from "../SendButton";

type Props = TextInputProps & {
    
}

export function SendMessageInput({...rest}: Props){
    return(

        <View  style={styles.container}>
            <TextInput style={styles.content}
            placeholder='escreva a sua mensagem...'
            {...rest} 
            />

            <SendButton/>
            <ButtonsInputMessage icon="emoji-happy" />
            <ButtonsInputMessage icon="image" />
            <ButtonsInputMessage icon="link" />
            <ButtonsInputMessage icon="dots-three-vertical" /*onPress={() => onPressSend()}*/ />

        </View>
    )
}
