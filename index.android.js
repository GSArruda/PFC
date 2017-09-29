import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,Picker,AppRegistry,Button} from 'react-native';


export default class PFC extends Component {

  constructor(props){
      super(props);
      this.state = {page:'',resultado:'',largura: '',altura:''};
    }

  calcular(){
    console.log("Ives gay");
    const resultado = parseFloat(this.state.largura) * parseFloat(this.state.altura);
    const resultado2 = resultado.toString();
    this.setState({resultado : resultado2 });
    
  }

  atualizaValor(nome,numero){
    console.log(nome);
    if (nome == 'larg'){
      this.setState({ largura : numero })
    }else if (nome == 'alt'){
      this.setState({altura : numero})
    }
  }

  render() {
    var self = this;
    return (
      <View style = {styles.main}>
        <View style = {styles.sinalizador}>
            <Text style = { styles.obrigatorio }>* Campo obrigatório </Text>
        </View>

        <View style={styles.principal}>
          
          <TextInput
            style = {styles.inputs}
            placeholder='Nome da obra'
          />

          <TextInput
            style = {styles.inputs}
            placeholder='Largura*'
            value = {this.state.largura}
            onChangeText = {valorDoCampo => this.atualizaValor('larg',valorDoCampo)}
            
          />
          
          <TextInput
            style = {styles.inputs}
            placeholder='Altura*'
            value = {this.state.altura}
            onChangeText = {valorDoCampo => this.atualizaValor('alt',valorDoCampo)}
          />
          
          <TextInput
            style = {styles.inputs}
            placeholder='Volume*'
          />
          
          <TextInput
            style = {styles.inputs}
            placeholder='Área de piso'
          />
          
          <TextInput
            style = {styles.inputs}
            placeholder='Temperatura interna'
          />
          
          <Picker 
            prompt='Tipo de isolamento'
            mode = 'dropdown'
            style = {styles.inputs}
            selectedValue={this.state.tipoIsolamento}
          onValueChange={(itemValue, itemIndex) => this.setState({tipoIsolamento: itemValue})}
          >
            
            <Picker.Item label='Tipo de isolamento*' enabled = {false} />
            <Picker.Item label='Isolamento 1' value='isolamento1'/>
            <Picker.Item label='Isolamento 2' value='isolamento2'/>
          
          </Picker>
          
          <TextInput
            style = {styles.inputs}
            placeholder='Condutividade térmica*'
          />
          
          <TextInput
            style = {styles.inputs}
            placeholder='Espessura do isolamento*'
          />
          
          <TextInput
            style = {styles.inputs}
            placeholder='Largura*'
          />

          <Button title = 'Calcular' onPress = {() => this.calcular()} />

          <TextInput
            style = {styles.resultado}
            editable = {false}
            value = {this.state.resultado}

          />
          
          

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
  main:{
    backgroundColor:'#ADD8E6',
    flex:1
  },

  principal:{   
    alignItems:'flex-start',
    padding:10
  },

  inputs:{
    width:300
  },

  sinalizador:{
    alignItems:'flex-end'
  },

  obrigatorio:{
    fontWeight:'bold'
  }, 
  
  resultado:{
    fontSize:20,
    color:'black',
    width:150
  }


}); 

AppRegistry.registerComponent('PFC', () => PFC);
