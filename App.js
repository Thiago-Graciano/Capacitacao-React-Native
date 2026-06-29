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
          imgperfil: 'https://avatars.githubusercontent.com/u/197793946?v=4',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 0,
          seguindo: true,
        },
        {
          id: '2',
          nome: 'Maria',
          descricao: 'Muitos dias corridos',
          imgperfil: 'https://instagram.fldb7-1.fna.fbcdn.net/v/t51.82787-19/658962505_18059357834694239_2380663475074841586_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDc5LmMyIn0&_nc_ht=instagram.fldb7-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2gH7uF8AExu4Fg7m3MWf4k0Xx08mfUHG_RiBfMUd7ZA6vapXfFBQPk40U9VTDs3ytF0&_nc_ohc=oeVON_Ddgx0Q7kNvwHwbVfW&_nc_gid=MgeZKu_5vnp4nzYvLTKhYA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af_DGKjCMEwNxep8Tz5Fr87BdvdPLghR8TMPOzMHeRNIbg&oe=6A4825D0&_nc_sid=7a9f4b',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers: 0,
          seguindo: true,
        },
        {
          id: '3',
          nome: 'Marcos',
          descricao: 'Adoro comer enxofre',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 0,
          seguindo: false,
        },
        {
          id: '4',
          nome: 'Davy Jones',
          descricao: 'Videos de GTA VI todos os dias',
          imgperfil: 'https://static.wikia.nocookie.net/famosos/images/5/59/DAVYJONESRJ.png/revision/latest?cb=20231118212912&path-prefix=pt-br',
          imgPublicacao: 'https://preview.redd.it/what-kind-of-things-do-yall-want-the-gta-6-story-mode-to-be-v0-v7lxgrjy28je1.jpeg?auto=webp&s=7dce730096f19130aba514313a2120d45e61b012',
          likeada: false,
          likers: 0,
          seguindo: false,
        },
        {
          id: '5',
          nome: 'Peter',
          descricao: 'Videos diarios do Monte Apalaches',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil5.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32,
          seguindo: true,
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
          keyExtractor={ (item) => item.id }
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
    backgroundColor: '#fefefe',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,

    borderBottomWidth: 1,
    shadowColor: '#111111',
    elevation: 1,
  },
  logo: {

  },
  send: {
    width: 23,
    height: 23,
  }
})