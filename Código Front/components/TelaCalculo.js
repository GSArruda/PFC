import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,Picker} from 'react-native';

//import Tabs from 'react-native-tabs';
//TextInput utiliza-se do onChangeText e value como propriedades.
       

export default class TelaCalculo extends Component {
	constructor(props){
	    super(props);
	    this.state = {page:'second'};
    }
  render(){
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
		  		/>
		  		
		  		<TextInput
		  			style = {styles.inputs}
		  			placeholder='Altura*'
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
	}	
	


}); 
