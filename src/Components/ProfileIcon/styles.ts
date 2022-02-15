import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 48, 
        height: 48,
        borderRadius: 26,
        backgroundColor: '#075E54',
        marginRight:5,
        borderWidth: 2,
        borderColor: '#075E54',
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
        width: 42, 
        height: 42,
        borderRadius: 20,
    },
    status: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#55a630',
        position: 'absolute',
        left: '69%',
        top: 30
    }
})