import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../../services/firebase'
import React, {useState} from 'react'
import styles from './style'

export default function Login({ navigation }) {
    

    let errorCustom;

    const [errorLogin, setErrorLogin] = useState(null) 
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function entrar() {
        if (email == "") {
            setErrorLogin("Informe seu e-mail.")
        } else if (senha == "") {
            setErrorLogin("Informe sua senha.")
        } else {
            setErrorLogin(null);
            logarUsuario();
        }
    }

    function logarUsuario() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
               navigation.navigate('Tabs')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode == 'auth/invalid-email') {
                    errorCustom = 'Endereço e-mail inválido'
                } else if(errorCode == 'auth/invalid-credential') {
                    errorCustom = 'E-mail ou senha incorreta'
                } else {
                    errorCustom = 'Não foi possível fazer login ,tente novamente!'
                }
                setErrorLogin(errorCustom);
            }
            );

            

    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo_pra_fazer.png')} />

            <Text style={styles.alert}>{errorLogin}</Text>

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                onChangeText={setSenha}
                secureTextEntry={true} 
            />

            <TouchableOpacity onPress={entrar} style={styles.button}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonCreate}
                onPress={() => navigation.navigate('CreateUser')}
            >
                <Text style={styles.buttonCreateText}>Criar Usuário</Text>
            </TouchableOpacity>
        </View>
    )
}