import { StyleSheet } from "react-native"

 const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 18
    },
    info: {
        marginBottom: 20,
        fontSize: 18
    },
    button: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#F60',
        borderColor: '#F60',
        borderRadius: 10,
        width: '70%'
    },

    textButton: {
        fontSize: 18,
        textAlign: 'center'
    },
    perfil: {
        width: 120,
        height: 150,
        borderRadius: 50
    }
})


export default styles;