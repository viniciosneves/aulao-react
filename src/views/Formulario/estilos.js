import { StyleSheet } from 'react-native';
import { cores } from '../estilos';

export default StyleSheet.create({
  container: {
    padding: 24
  },
  titulo: {
    color: cores.escuro,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16
  },
  input: {
    height: 40,
    borderColor: cores.escuro,
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: cores.claro,
    marginTop: 12
  }
});