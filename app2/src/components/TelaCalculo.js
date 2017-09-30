import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,Picker,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class TelaCalculo extends Component {
	constructor(props){
	    super(props);
	    this.state = {tipoIsolamento:'',comprimento:'',altura: '',largura:'',volume:'',areaPiso:'',temperaturaExterna:'',frequencia:''};
    }

    calcularVolume(){
    	const resultadoVolume = parseFloat(this.state.altura) * parseFloat(this.state.largura) * parseFloat(this.state.comprimento);
    	resultadoVolume2 = resultadoVolume.toString();
    	this.setState({volume : resultadoVolume2});
    }

    calcularAreaPiso(){
    	const resultadoAreaPiso = parseFloat(this.state.altura) * parseFloat(this.state.largura);
    	resultadoAreaPiso2 = resultadoAreaPiso.toString();
    	this.setState({areaPiso : resultadoAreaPiso2});
    }

    atualizaValor(nome,numero){
	    if (nome == 'largura'){	      
	      this.setState({ largura : numero });
	      
	    }else if (nome == 'altura'){
	      this.setState({ altura : numero });
	      
	    }else if (nome == 'comprimento'){	     
	      this.setState({ comprimento : numero });

	    }
  	}



  render(){
	  return (
	  	<ScrollView style = {styles.main}>
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
		  			placeholder='Comprimento*'
		  			value = {this.state.comprimento}
		  			onChangeText = {valorDoCampo => this.atualizaValor('comprimento',valorDoCampo)}
		  			keyboardType = 'numeric'
		  		/>

		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Largura*'
		  			value = {this.state.largura}
		  			onChangeText = {valorDoCampo => this.atualizaValor('largura',valorDoCampo)}
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Altura*'
		  			value = {this.state.altura}
		  			onChangeText = {valorDoCampo => this.atualizaValor('altura',valorDoCampo)}
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Volume*'
		  			onChangeText = {() => this.calcularVolume()}
		  			value = { this.state.volume }
		  			editable = {false}


		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Área de piso'
		  			editable = {false}
		  			value = {this.state.areaPiso}
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Temperatura interna'
		  		/>
		  		
		  		<Picker 
		  			style = {styles.inputs}
		  			selectedValue={this.state.tipoIsolamento}
	 			 	onValueChange={opcao => this.setState({tipoIsolamento: opcao})}
	 			 	>
		  			
		  			<Picker.Item value='' label = 'Tipo de isolamento'/>
		  			<Picker.Item label='Poliestireno/Isopor' value='isopor'/>
		  			<Picker.Item label='Poliuretano' value='uretano'/>
		  			<Picker.Item label='Outros' value='outros'/>
		  		
		  		</Picker>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Condutividade térmica*'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Espessura do isolamento*'
		  		/>
		  		
		  		<Picker
		  			style = {styles.inputs}
		  			selectedValue={this.state.temperaturaExterna}
	 			 	onValueChange={opcao => this.setState({temperaturaExterna : opcao})}
		  		>
		  			
		  			<Picker.Item value = '' label = 'Temperatura externa' />
		  			<Picker.Item label='32' value='32'/>
		  			<Picker.Item label='35' value='35'/>
		  			<Picker.Item label='43' value='43'/>
		  			
		  		</Picker>	

		  		<Picker
		  			style = {styles.inputs}
		  			selectedValue={this.state.frequencia}
	 			 	onValueChange={opcao => this.setState({frequencia : opcao})}
		  		>
		  			
		  			<Picker.Item value='' label = 'Frequência'/>
		  			<Picker.Item label='50' value='50'/>
		  			<Picker.Item label='60' value='60'/>
		  			
		  				  			
		  		</Picker>		

		    </View>

		    <View style = {{alignItems:'center'}} >
			  	<TouchableOpacity 
			  		style = {styles.btnProx} 
			  		onPress = {() => {Actions.telacalculo2();}} 
			  	>
			  		<Text style = {styles.textoBotao}>Próximo</Text>
			  	</TouchableOpacity>
			</View>	
	   
	    </ScrollView>
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
		width:300,
		borderColor:'black',
		margin:2
	},

	sinalizador:{
		alignItems:'flex-end'
	},

	obrigatorio:{
		fontWeight:'bold'
	},

	btnProx:{
		backgroundColor:'#6495ED',
		borderColor:'black',
		borderWidth:1,
		borderRadius:8,
		paddingVertical:10,
		paddingHorizontal:50,
	},

	textoBotao:{
		fontWeight:'bold',
		fontSize:16
	}	
	


}); 
