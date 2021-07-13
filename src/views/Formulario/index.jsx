import axios from 'axios'
import React, { useState } from 'react'
import { Text, SafeAreaView, StatusBar, TextInput, View, Alert } from 'react-native'
import Btn from '../../components/Btn'

import estilos from './estilos'

const Formulario = ({navigation}) => {

  const [texto, setTexto] = useState('')
  const [autor, setAutor] = useState('')

  const [requesting, setRequesting] = useState(true)

  const salvarFrase = () => {
    setRequesting(true)
    axios.post('http://localhost:3000/frases', {
      texto: texto,
      autor: autor
    })
      .then(() => {
        Alert.alert(
          "Parabéns",
          "Frase salva com sucesso!",
          [
            { text: "OK, obrigado.", onPress: () => {
              navigation.navigate('Frases')
              setTexto('')
              setAutor('')
              setRequesting(false)
            }}
          ]
        );
      })
  }

  return <>
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Nova Frase</Text>
      <View>
        <Text>Frase</Text>
        <TextInput value={texto} onChangeText={setTexto} style={estilos.input}/>
      </View>
      <View>
        <Text>Autor</Text>
        <TextInput value={autor} onChangeText={setAutor} style={estilos.input}/>
      </View>
      <View style={estilos.btnContainer}>
        <Btn valor="Salvar" acao={salvarFrase} />
      </View>
    </View>
  </>
}

export default Formulario