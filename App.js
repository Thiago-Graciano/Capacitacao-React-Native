import { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button, 
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: 'A sua frase do dia irá aparecer aqui',
      img: require('./src/biscoito.png'),
    };
  
    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({ 
      textoFrase: ' " ' + this.frases[numeroAleatorio] + ' " ',
      img: require('./src/biscoitoAberto.png'),
     })

  }

  render(){
    return (
    <View style={ styles.container } >
      
      <Image 
        source={this.state.img}
        style={ styles.img }
      />

      <Text style={ styles.textoFrase }>{this.state.textoFrase}</Text>

      <TouchableOpacity style={ styles.botao } onPress={this.quebraBiscoito} >
        <View style={ styles.areaBotao } >
          <Text style={ styles.textoBotao } >Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    backgroundColor: '#4b3bfe',
    color: '#d9d9d9',
    padding: 5,
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    backgroundColor: '#4b3bfe',
    borderRadius: 25,
  },
  areaBotao:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d9d9d9'
  }

})
