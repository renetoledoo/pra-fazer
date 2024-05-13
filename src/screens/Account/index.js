import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { firebase } from '../../services/firebase'

import Estilo from '../Account/style'

export default function Account({ navigation }) {


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setFoto] = useState('');
  const auth = getAuth();
  const user = auth.currentUser;

  function logoff() {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigation.navigate('Login')
    }).catch((error) => {
      // An error happened.
    });
  }
  const dadosUser = user.providerData.map((index) => {
    return <Text style={Estilo.info}>E-mail: {index.email} </Text>
  })



  return (
    <View style={Estilo.container}>
      <Image style={Estilo.perfil} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' }}></Image>
      <Text style={Estilo.title}>Dados do usuários</Text>
      {dadosUser}


      <TouchableOpacity style={Estilo.button} onPress={logoff}>
        <Text style={Estilo.textButton}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}