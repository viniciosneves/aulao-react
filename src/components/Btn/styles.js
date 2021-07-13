import { StyleSheet } from 'react-native';
import { cores } from '../../views/estilos';

export default (pequeno, invertido) => StyleSheet.create({
  botao: {
    maxWidth: '100%',
    width: '100%',
    paddingVertical: pequeno ? 3 : 18,
    paddingHorizontal: 20,
    backgroundColor: invertido ? cores.escuro : cores.cinza,
    shadowColor: invertido ? cores.cinza : cores.escuro,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderBottomEndRadius: 30
  },
  spinner: {
    marginLeft: 15
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: invertido ? cores.cinza : cores.escuro,
  }
});