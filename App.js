import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [
      "A sorte favorece os corajosos.",
      "Acredite em si mesmo e tudo será possível.",
      "A felicidade está ao seu alcance.",
      "Seu futuro é tão brilhante quanto sua fé.",
      "Grandes coisas estão por vir.",
      "O sucesso é uma jornada, não um destino.",
      "A persistência é o caminho para as estrelas.",
      "Hoje é um bom dia para começar algo novo.",
      "A vida é uma aventura ousada ou nada.",
      "Cada dificuldade traz uma oportunidade.",
      "Seu coração sabe o caminho, siga-o com coragem.",
      "A gratidão transforma o que temos em suficiente.",
      "Você é mais forte do que pensa.",
      "A mudança começa quando você decide.",
      "Confie no processo e mantenha a fé.",
      "Pequenos passos levam a grandes jornadas.",
      "A alegria está nos momentos simples.",
      "Seja a mudança que você quer ver no mundo.",
      "A sorte é o encontro da preparação com a oportunidade.",
      "Sempre há algo novo para aprender."
    ];

    
  }

  quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)  

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img} />

        <Text style={styles.texto}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.botaoArea}>
            <Text style={styles.botaoTexto}>Abrir biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 250,
    width: 250,
  },
  texto: {
    fontSize: 25,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'

  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25

  },
  botaoArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'

  }
});

export default App;



