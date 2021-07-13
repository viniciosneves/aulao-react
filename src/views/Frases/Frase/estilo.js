import { StyleSheet } from 'react-native'
import { cores } from '../../estilos'

export default StyleSheet.create({
  container: {
    padding: 24
  },
  texto: {
    color: cores.primaria,
    fontWeight: 'bold',
    fontSize: 16
  },
  autor: {
    color: cores.escuro,
    fontSize: 16,
    marginTop: 4
  },
  divisor: {
    borderBottomWidth: 3,
    borderBottomColor: cores.cinza,
    marginTop: 12,
  }
})