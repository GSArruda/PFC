import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,Picker,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class TelaCalculo2 extends Component {
	constructor(props) {
		super(props);
		
		this.state = { produto:'', densidadeArmazenagem:'' };
	}
	
	render(){
		return (
			<ScrollView style = {styles.main}>
		  		<View style = {styles.sinalizador}>
		  			<Text style = { styles.obrigatorio }>* Campo obrigatório </Text>
		  		</View>

		  		<View style={styles.principal}>
		  		
		  		<Picker 
		  			style = {styles.inputs}
		  			selectedValue={this.state.produto}
	 			 	onValueChange={opcao => this.setState({ produto : opcao })} 
	 			 	>
		  			
		  			<Picker.Item value='' label = 'Produto'/>
		  			<Picker.Item label='Outros' value='outros'/>
		  			<Picker.Item label='Abacate' value='abacate'/>
		  			<Picker.Item label='Abacaxi' value='abacaxi'/>
		  			<Picker.Item label='Abóbora' value='abobora'/>
		  			<Picker.Item label='Açaí(polpa)' value='acaiPolpa'/>
		  			<Picker.Item label='Acerola' value='acerola'/>
		  			<Picker.Item label='Açúcar cristalizado' value='acucarCristal'/>
		  			<Picker.Item label='Água/Gelo' value='agua'/>
		  			<Picker.Item label='Aipo(salsão)' value='aipo'/>
		  			<Picker.Item label='Aipo' value='salsao'/>
		  			<Picker.Item label='Alcachofra' value='alcachofra'/>
		  		
		  		</Picker>

		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Densidade de armazenagem*'
		  			editable = {false}
		  			value = {this.state.densidadeArmazenagem}
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Temperatura de congelamento do produto*'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Calor específico do produto não congelado*'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Calor específico do produto congelado'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Calor latente de congelamento'
		  		/>
		  		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Calor de respiração*'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Massa total do produto armazenado*'
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Massa de produto em movimento*'
		  		/>		
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Tempo de resfriamento/congelamento do produto*'
		  		/>		

		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Temperatura de entrada do produto*'
		  		/>		
		  		

		    </View>

		    <View style = {{alignItems:'center'}} >
			  	<TouchableOpacity 
			  		style = {styles.btnProx} 
			  		onPress = {() => {Actions.telacalculo3();}} 
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
		width:350
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
