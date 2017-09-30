import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router , Scene } from 'react-native-router-flux';

import TelaInicial from './src/components/TelaInicial.js';
import TelaCalculo from './src/components/TelaCalculo.js';
import TelaRelatorios from './src/components/TelaRelatorios.js';
import TelaSobreNos from './src/components/TelaSobreNos.js';
import TelaCalculo2 from './src/components/TelaCalculo2.js';
import TelaCalculo3 from './src/components/TelaCalculo3.js';
import TelaResultado from './src/components/TelaResultado.js';


class app2 extends Component {
  render(){
	  return (

	  	<Router>
	  		<Scene key='main' navigationBarStyle={{backgroundColor:'#ADD8E6'}}>
		  		<Scene key='telainicial' component = {TelaInicial} hideNavBar={true} initial />
		  		<Scene key='telacalculo' component = {TelaCalculo} title='Local de armazenagem' hideNavBar={false}/>
		  		<Scene key='telarelatorios' component = {TelaRelatorios} title='Relatórios' hideNavBar={false}/>
		  		<Scene key='telasobrenos' component = {TelaSobreNos} title='Sobre nós' hideNavBar={false}/>
		  		<Scene key='telacalculo2' component = {TelaCalculo2} title = 'Características do produto' hideNavBar={false}/>
		  		<Scene key='telacalculo3' component = {TelaCalculo3} title = 'Condições de armazenamento' hideNavBar={false}/>
		  		<Scene key='telaresultado' component = {TelaResultado} title = 'Resultados' hideNavBar={false}/>

	  		</Scene>

	  	</Router>
	  	
	  );
	}
}

AppRegistry.registerComponent('app2',() => app2);