
import React, { useState } from 'react'


import { firebase } from '../../services/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from './style'

export default function CreateUser({navigation}) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorCreateUser, setErrorCreateUser] = useState(null);






    function entrar() {
        if (nome == "") {
            setErrorCreateUser("Informe seu nome.")
        } else if (email == "") {
            setErrorCreateUser("Informe seu e-mail.")
        } else if (senha == "") {
            setErrorCreateUser("Informe sua senha.")
        } else {
            setErrorCreateUser(null);
            criarUsuario();
        }
    }

    function criarUsuario() {
        const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert(`criado com sucesso`)
            navigation.navigate('Tabs')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorCreateUser(error.message);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.alert}>{errorCreateUser}</Text>

            <TextInput
                style={styles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={entrar}
            >
                <Text style={styles.textButton}>Criar usuário</Text>
            </TouchableOpacity>
        </View>
    )
}