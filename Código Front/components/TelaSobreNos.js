import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default class TelaSobreNos extends Component {
  render(){
	  return (
	  	<View style={styles.principal}>
	  		<Text style = {styles.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	  		Nullam efficitur magna in mauris vulputate tempor. Aliquam sollicitudin ipsum justo, a consequat felis pellentesque ac.
	  		Fusce et dui eu lacus posuere.</Text>
	    </View>
	    
	  );
	}
}

const styles = StyleSheet.create({
	
	principal:{
		backgroundColor:'#ADD8E6',
		flex:1,
		
	},

	texto:{
		fontSize:20,
		fontWeight:'bold'
	}
	


}); 
