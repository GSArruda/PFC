import React, {Component} from 'react';
import {Image,View} from 'react-native';

class Topo extends Component{
	render(){
		return (
			<View>
				<Image source= {require('../../imgs/logodms.png')} style ={{width:350,height:100,resizeMode:'cover'}} />
			</View>
		);
	}
}

export default Topo;