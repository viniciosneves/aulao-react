import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, StatusBar, FlatList } from 'react-native'
import Frase from './Frase'
import axios from 'axios'

import estilos from './estilos'

const Frases = ({navigation}) => {

  const [lista, setLista] = useState([]) 

  useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {

      axios.get('http://localhost:3000/frases')
        .then(response => {
          setLista(response.data)
        })

    });

    return unsubscribe;

  }, [navigation]);


  return (
    <>
      <Text style={estilos.titulo}>Frases motivacionais</Text>
      <FlatList 
        keyExtractor={(item) => String(item.id)}
        data={lista}
        renderItem={({item}) => <Frase texto={item.texto} autor={item.autor} />}
      />
    </>
  )
}

export default Frases