import React, {Component} from 'react';
import {Image,View,StyleSheet} from 'react-native';


const logo = require('../../imgs/logodms.png');

export default class Topo extends Component{
	render(){
		return (
			<View>
				<Image source= {logo} style ={styles.imagemLogo} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imagemLogo:{
		marginTop:1,
		width:350,
		height:110,
		resizeMode:'contain'
	}

});