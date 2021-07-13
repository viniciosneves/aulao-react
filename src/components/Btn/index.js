  
import React from 'react';

import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import fnStyles from './styles';

export default function Botao({pequeno = false, invertido = false, valor, acao, estilos, requesting}) {
  
  const estilosPadrao = fnStyles(pequeno, invertido);
  
  
  return <TouchableOpacity disabled={requesting} onPress={acao} style={[estilosPadrao.botao, estilos]}>
    <Text style={estilosPadrao.valor}>
      {valor}
      {requesting && <ActivityIndicator style={estilosPadrao.spinner}/>}
    </Text>
  </TouchableOpacity>


}