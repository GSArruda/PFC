import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router , Scene } from 'react-native-router-flux';

import TelaInicial from './src/components/TelaInicial.js';
import TelaCalculo from './src/components/TelaCalculo.js';
import TelaRelatorios from './src/components/TelaRelatorios.js';
import TelaSobreNos from './src/components/TelaSobreNos.js';


class app2 extends Component {
  render(){
	  return (

	  	<Router>
	  		<Scene key='main' navigationBarStyle={{backgroundColor:'#ADD8E6'}}>
		  		<Scene key='telainicial' component = {TelaInicial} hideNavBar={true} initial />
		  		<Scene key='telacalculo' component = {TelaCalculo} title='Calcular carga térmica' hideNavBar={false}/>
		  		<Scene key='telarelatorios' component = {TelaRelatorios} title='Relatórios' hideNavBar={false}/>
		  		<Scene key='telasobrenos' component = {TelaSobreNos} title='Sobre nós' hideNavBar={false}/>
	  		</Scene>

	  	</Router>
	  	
	  );
	}
}

AppRegistry.registerComponent('app2',() => app2);