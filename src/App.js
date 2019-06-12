
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Estudiantes from './components/estudiantes/Estudiantes';
import NavBar from './components/navBar/NavBar';
import Page404 from './components/page404/Page404';
import Maquinas from './components/maquinas/Maquinas';
import Administrativos from './components/administrativos/Administrativos';
import Docentes from './components/docentes/Docentes';
import Inicio from './components/inicio/Inicio';
import Externos from './components/externos/Externos';

class App extends Component{

  componentWillMount(){
    
  }

  render(){
    
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
      
        <Route path='/agregar_estudiantes' component={Estudiantes} />
        <Route path='/agregar_administrativos' component={Administrativos} />
        <Route path='/agregar_maquinas' component={Maquinas} />
        <Route path='/agregar_docentes' component={Docentes} />
        <Route path='/agregar_externos' component={Externos} />
        <Route path='/inicio' component={Inicio} />
        <Route path='/page404' component={Page404} />
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
