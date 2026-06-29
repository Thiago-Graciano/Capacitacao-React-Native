import { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Image,
  FlatList,

} from 'react-native';

import Lista from './src/Lista';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Thiago',
          descricao: 'Mais um dia de muitos bugs :)',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imagemPerfil: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 0,
        },
        {
          id: '2',
          nome: 'Maria',
          descricao: 'Muitos dias corridos',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imagemPerfil: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers: 0,
        },
        {
          id: '3',
          nome: 'Marcos',
          descricao: 'Adoro comer enxofre',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imagemPerfil: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 0,
        },
        {
          id: '4',
          nome: 'Davy Jones',
          descricao: 'Videos de GTA VI todos os dias',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil4.png',
          imagemPerfil: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 0,
        },
        {
          id: '5',
          nome: 'Peter',
          descricao: 'Videos diarios do Monte Apalaches',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil5.png',
          imagemPerfil: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32,
        },
      ],
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          showVerticalScrollIndicator={false}
          data={this.state.feed}
          renderItem={ ({item}) => <Lista data={item} /> }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 60,
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,

    borderBottomWidth: 1,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {

  },
  send: {
    width: 23,
    height: 23,
  }
})