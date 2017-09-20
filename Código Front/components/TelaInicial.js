import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Topo from './topo.js';

export default class TelaInicial extends Component {
  render(){
	  return (

	  	<View style={styles.principal}>
	  		
	  		<Topo></Topo>


		  	<View style={styles.botoes}>

		  		
		  		<TouchableOpacity 
		  			style={styles.botao1}
		  			onPress = {() =>{Actions.telacalculo();}}
		  		>
		  			
		  			<Text style = {styles.textoBotao}>  Calcular carga térmica   </Text>
		  		</TouchableOpacity>
		  		
		  		<TouchableOpacity 
		  			style={styles.botao}
		  			onPress = {() => {Actions.telarelatorios();}}
		  		>
		  			
		  			<Text style = {styles.textoBotao}>  Relatórios   </Text>
		  		</TouchableOpacity>
		  		
		  		<TouchableOpacity 
		  			style={styles.botao}
		  			onPress={() => {Actions.telasobrenos();}}
		  		>		  			
		  			<Text style = {styles.textoBotao}>  Sobre nós   </Text>
		  		</TouchableOpacity>
		  		
		    </View>
	    </View>
	  );
	}
}

const styles = StyleSheet.create({
	
	principal:{
		backgroundColor:'#ADD8E6',
		flex:1,
		alignItems:'center'
	},
	
	botoes:{
		flex:1,
		justifyContent:'space-around'
		
	},
	
	botao:{
		backgroundColor:'#6495ED',
		paddingVertical:10,
		paddingHorizontal:50,
		borderColor:'black',
		borderWidth:1,
		borderRadius:8

	},
	
	botao1:{
		backgroundColor:'#6495ED',
		paddingVertical:10,
		paddingHorizontal:50,
		borderColor:'black',
		borderWidth:1,
		borderRadius:8,
		paddingHorizontal:10

	},

	textoBotao:{
		color:'black',
		fontSize:16
		
	}



}); 
