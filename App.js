import { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,

} from 'react-native';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      estudante: false,
      sexo: '',
      idade: '',
      limite: null,
      nome: '',
    }

    this.handleEnviar = this.handleEnviar.bind(this);
  }

  handleEnviar() {
    const missingFields = [];

    if (!this.state.nome.trim()) {
      missingFields.push('Nome');
    }
    if (!this.state.idade.toString().trim()) {
      missingFields.push('Idade');
    }
    if (!this.state.sexo) {
      missingFields.push('Sexo');
    }
    if (this.state.limite === null) {
      missingFields.push('Limite');
    }

    if (missingFields.length > 0) {
      Alert.alert(
        'Campos obrigatórios',
        `Por favor preencha: ${missingFields.join(', ')}`
      );
      return;
    }

    const estudanteTexto = this.state.estudante ? 'Sim' : 'Não';
    Alert.alert(
      'Dados do usuário',
      `Nome: ${this.state.nome}\nIdade: ${this.state.idade}\nSexo: ${this.state.sexo}\nLimite: R$ ${this.state.limite.toFixed(2)}\nEstudante: ${estudanteTexto}`
    );
  }

  render() {
    return (
      <View style={styles.container} >

        <View style={styles.areaLogin}>

          <Text style={styles.header} >
            BANCO REACT
          </Text>

          <Text style={styles.apresenta}>
            Seja bem-vindo(a) ao nosso <Text style={{ fontWeight: 'bold', backgroundColor: '#4b3bfe', color: '#d9d9d9' }}>banco</Text>, por favor preencha os campos abaixo:
          </Text>

          <TextInput style={styles.inputNome}
            placeholder="Digite seu nome"
            placeholderTextColor='#fefefe'
            value={this.state.nome}
            onChangeText={(texto) => this.setState({ nome: texto })}>
          </TextInput>

          <TextInput style={styles.inputIdade}
            placeholder="Digite sua idade"
            placeholderTextColor='#fefefe'
            value={this.state.idade}
            onChangeText={(texto) => this.setState({ idade: texto })}>
          </TextInput>

          <View style={styles.areaSexo} >
            <Text style={styles.inputSexo} >Selecione abaixo o seu sexo:</Text>
            <Picker style={{ width: 160 }}
              selectedValue={this.state.sexo}
              onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
            >
              <Picker.Item value="Masculino" label="Masculino" />
              <Picker.Item value="Feminino" label="Feminino" />
            </Picker>
          </View>

          <Text>
            Qual o seu limite?
          </Text>

          <View style={styles.areaLimite}>
            <Slider style={{ width: 280, height: 40 }}
              minimumValue={0}
              maximumValue={10000}
              value={this.state.limite ?? 0}
              onValueChange={(limite) => this.setState({ limite: limite })}
            />
            {this.state.limite !== null && (
              <Text style={styles.valorLimite} >
                {this.state.limite.toFixed(2)}
              </Text>
            )}
          </View>

          <Text style={styles.inputEstudante} >
            Você é estudante?
          </Text>

          <View style={styles.areaEstudante}>
            <Switch
              value={this.state.estudante}
              onValueChange={(valorSwitch) => this.setState({ estudante: valorSwitch })}
              thumbColor={(this.state.estudante) ? "#4b3bfe" : "#b80000"}
            />
          </View>
          <Text style={{ fontSize: 20, textAlign: 'flex-start', marginLeft: 55, transform: [{ translateY: -29 }] }} >
            {(this.state.estudante) ? "Estudante" : "Não é estudante"}
          </Text>

          <TouchableOpacity style={styles.botao} onPress={this.handleEnviar}>
            <View style={styles.areaBotao} >
              <Text style={styles.textoBotao} >Enviar</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fefefe',
  },
  areaLogin: {
    padding: 20,
    width: 320,
    height: 'auto',
    backgroundColor: '#d9d9d9',
    color: '#fefefe',
    borderWidth: 2,
    borderColor: '#9c9c9c',
    borderRadius: 10,
    boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.3)',
  },
  header: {
    fontSize: 35,
    backgroundColor: '#4b3bfe',
    color: '#d9d9d9',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  apresenta: {
    fontSize: 18,
    textAlign: 'center',
    color: '#111111'
  },
  inputNome: {
    height: 40,
    borderWidth: 2,
    borderColor: '#4b3bfe',
    backgroundColor: '#4b3bfe',
    color: '#fefefe',
    borderRadius: 5,
    width: 280,
    marginTop: 30,
    fontSize: 15,
    textAlign: 'center',
  },
  inputIdade: {
    height: 40,
    borderWidth: 2,
    borderColor: '#4b3bfe',
    backgroundColor: '#4b3bfe',
    color: '#fefefe',
    borderRadius: 5,
    width: 280,
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  areaSexo: {
    width: 280,
  },
  inputSexo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,

  },
  areaLimite: {
    textAlign: 'center',
    alignItems: 'center',
  },
  valorLimite: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#4b3bfe',
    width: 95,
    paddingHorizontal: 5,
    color: '#d9d9d9',
  },
  inputEstudante: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  areaEstudante: {
    alignItems: 'flex-start',
    transform: [{ translateY: 10 }]
  },
  botao:{
    width: 280,
    height: 45,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d9d9d9'
  }
})