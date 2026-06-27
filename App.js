import { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'Começar',
      ultimo: null
    };

    this.timer = null

    this.comecar = this.comecar.bind(this)
    this.limpar = this.limpar.bind(this)

  }

  comecar(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null

      this.setState({botao: 'Começar'})
    } else {
      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
    }, 100)

      this.setState({botao: 'Pausar'})
    } 
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'Começar'
    })
  }

  render(){
    return (
    <View style={ styles.container } >
      
      <Image  
        source={require('./src/cronometro.png')}
        style={ styles.cronometro }
      />

      <Text style={ styles.timer }> {this.state.numero.toFixed(1)} </Text>

      <View style={ styles.areaBotao }>

        <TouchableOpacity style={ styles.botao } onPress={this.comecar} >
          <Text style={styles.textoBotao}> {this.state.botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.botao } onPress={this.limpar} >
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaUltimo} >
        <Text style={styles.textoUltimo} >{this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(1) + "s" : ""} </Text>
      </View>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer:{
    marginTop: -160,
    color: '#fefefe',
    fontSize: 65,
    fontWeight: 'bold',
  },
  areaBotao:{
    flexDirection: 'row',
    marginTop: 70,
    height: 70
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    margin: 20,
    height: 66,
    borderRadius: 12
  },
  textoBotao:{
    color: '#00aeef',
    fontWeight: 'bold',
    fontSize: 25,
  },
  areaUltimo:{
    marginTop: 40,
  },
  textoUltimo:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fefefe'
  },
})
