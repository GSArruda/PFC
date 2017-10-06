import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,Picker,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class TelaCalculo3 extends Component {

	constructor(props) {
		super(props);
		
		this.state = { fluidoRefrigerante:'', diferencialTEvaporacao:''   };
	}

	render(){
		return(
			<ScrollView style = {styles.main}>
		  		<View style = {styles.sinalizador}>
		  			<Text style = { styles.obrigatorio }>* Campo obrigatório </Text>
		  		</View>

		  		<View style={styles.principal}>

		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Número de pessoas'
		  			keyboardType = 'numeric'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Temperatura de congelamento do produto*'
		  			keyboardType = 'numeric'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Tempo de permanência das pessoas*'
		  			keyboardType = 'numeric'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Potência de iluminação'
		  			keyboardType = 'numeric'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Potência de motores (exceto evaporadores)'
		  			keyboardType = 'numeric'
		  		/>
		  		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Tempo de operação dos motores'
		  			keyboardType = 'numeric'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Fator de segurança'
		  			keyboardType = 'numeric'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Tempo de operação do compressor'
		  			keyboardType = 'numeric'
		  		/>		
		  		
		  		<Picker 
		  			style = {styles.inputs}
		  			selectedValue={this.state.fluidoRefrigerante}
	 			 	onValueChange={opcao => this.setState({fluidoRefrigerante: opcao})}
	 			 	>
		  			
		  			<Picker.Item value='' label = 'Fluído refrigerante'/>
		  			<Picker.Item label='R-134a' value='134a'/>
		  			<Picker.Item label='R-22' value='r22'/>
		  			<Picker.Item label='R-401A (MP39)' value='r401a'/>
		  			<Picker.Item label='R-401B (MP-66)' value='r401b'/>
		  			<Picker.Item label='R-402A (HP-80)' value='r402a'/>
		  			<Picker.Item label='R-402B (HP-81)' value='r402b'/>
		  			<Picker.Item label='R-404A (HP-62 ou FX-70)' value='r404a'/>
		  			<Picker.Item label='R-408A (FX-10)' value='r408a'/>
		  			<Picker.Item label='R-409A (FX-56)' value='r409a'/>
		  		
		  		</Picker>	

		  		<Picker 
		  			style = {styles.inputs}
		  			selectedValue={this.state.diferencialTEvaporacao}
	 			 	onValueChange={opcao => this.setState({diferencialTEvaporacao: opcao})}
	 			 	>
		  			
		  			<Picker.Item value='' label = 'Diferencial de temperatura de evaporação'/>
		  			<Picker.Item label='6' value='6'/>
		  			<Picker.Item label='8' value='8'/>
		  			<Picker.Item label='10' value='10'/>
		  			
		  		
		  		</Picker>	

		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Comprimento equivalente da linha de sucção'
		  			keyboardType = 'numeric'
		  		/>		

		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Comprimento equivalente da linha de líquido'
		  			keyboardType = 'numeric'
		  		/>		
		  		

		    </View>

		    <View style = {{alignItems:'center'}} >
			  	<TouchableOpacity 
			  		style = {styles.btnProx} 
			  		onPress = {() => {Actions.telaresultado();}} 
			  	>
			  		<Text style = {styles.textoBotao}>Calcular</Text>
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
		width:360
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
