import React,{Component} from 'react';
import {Text,Button,View,AppRegistry,TouchableOpacity,Image} from 'react-native';
import Topo from './src/components/topo.js';

const Estilos = {
	
	principal:{
		backgroundColor:'#80ccff',
		flex:1,
		justifyContent:'space-between',
		alignItems:'center'
	},
	
	botao:{
		backgroundColor:'blue',
		paddingVertical:10,
		paddingHorizontal:50,
		borderColor:'black',
		borderWidth:1,
		borderRadius:8

	},
	
	botao1:{
		backgroundColor:'blue',
		paddingVertical:10,
		paddingHorizontal:50,
		borderColor:'black',
		borderWidth:1,
		borderRadius:8,
		paddingHorizontal:10

	},

	textoBotao:{
		color:'white',
		fontSize:16
		
	},



}; 


class app2 extends Component {
  render(){
	  return (

	  	<View style={Estilos.principal}>

	  		<Topo></Topo>

	  		<TouchableOpacity style={Estilos.botao1}>
	  			
	  			<Text style = {Estilos.textoBotao}>  Calcular carga térmica   </Text>
	  		</TouchableOpacity>
	  		
	  		<TouchableOpacity style={Estilos.botao}>
	  			
	  			<Text style = {Estilos.textoBotao}>  Relatórios   </Text>
	  		</TouchableOpacity>
	  		
	  		<TouchableOpacity style={Estilos.botao}>
	  			
	  			<Text style = {Estilos.textoBotao}>  Sobre nós   </Text>
	  		</TouchableOpacity>
	  		



	  		<TouchableOpacity>	
	  		</TouchableOpacity>

	    </View>
	    
	  );
	}
}

AppRegistry.registerComponent('app2',() => app2);