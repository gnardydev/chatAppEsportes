import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Header } from '../../Components/Header';
import { SecondHeader } from '../../Components/SecondHeader';

import { Message } from '../../Components/Message';

import { styles } from './styles';
import { SendMessageInput } from '../../Components/SendMessageInput';
import { SendButton } from '../../Components/SendButton';

export const FakeDialog = [{
    isYou: true,
    message: 'Olá, tudo Bem?'
    },
    {
    isYou: false,
    message: 'Olá, tudo e ai?'
    },
    {
    isYou: true,
    message: 'Na Paz!'
    },
    {
    isYou: false,
    message: 'bora Testar?'
    },
]

export function Chat(){

    const [openSendButton, setOpenSendButton] = useState(false);

    const [message, setMessage] = useState('');

    console.log(openSendButton)
    return(

        <View style={styles.container}>

            <StatusBar translucent />

            <Header/>

            <View style={styles.content}>

                <SecondHeader />

                <ScrollView contentContainerStyle={{ width: '100%', height: '120%', paddingTop: 20, paddingBottom: 20}}>

                    {FakeDialog.map((item, index) => <Message key={index} isYou={item.isYou} message={item.message}/>)}

                </ScrollView>

                <SendMessageInput onChangeText={(message) => setMessage(message)} />

                
            </View>

        </View>
    )
}