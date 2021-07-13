import React from 'react'
import { SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native'

import estilos from './estilos'

const TelaBase = ({ children }) => {
  return <>
    <SafeAreaView style={estilos.tela}>
      <StatusBar />
      <KeyboardAvoidingView style={estilos.keyboardview}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.telaBottom}/>
  </>
}

export default TelaBase