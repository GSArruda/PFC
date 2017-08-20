import React from 'react';
import {Text,Button,View,AppRegistry,TouchableOpacity,Image} from 'react-native';


const Estilos = {
	
	principal:{
		backgroundColor:'#80ccff',
		flex:1,
		justifyContent:'space-between',
		alignItems:'center'
	},
	
	imagem:{
		
	},
	
	botao:{
		backgroundColor:'blue',
		paddingVertical:10,
		paddingHorizontal:50,
		borderColor:'black',
		borderWidth:1,
		borderRadius:8

	},
	
	textoBotao:{
		color:'white',
		fontSize:16
		
	}


	

	
}; 

const BotaoPressionado = () =>{
	
		alert("Olá,mundo!");
	

};

const App = () => {
  return (
  	<View style={Estilos.principal}>
  			
  		<Image source={require('./imgs/logodms.png')} style={Estilos.imagem}/>
  		
  		<TouchableOpacity style={Estilos.botao}>
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
};


AppRegistry.registerComponent('app2',() => App);