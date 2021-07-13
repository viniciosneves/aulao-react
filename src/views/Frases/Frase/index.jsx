import React from 'react'
import { Text, View } from 'react-native'
import estilo from './estilo'

const Frase = ({texto, autor}) => {
  return <View style={estilo.container}>
    <Text style={estilo.texto}>{texto}</Text>
    <Text style={estilo.autor}>{autor}</Text>
    <View style={estilo.divisor} />
  </View>
}

export default Frase