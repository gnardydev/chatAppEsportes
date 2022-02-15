import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        borderBottomColor: '#e5e5e5',
        borderBottomWidth:2,
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    contentText: {
        paddingLeft: 10
    },
    name: {
        fontWeight: 'bold',
        color: '#075E54'
    },
    status: {
        color: '#495057'
    }
})