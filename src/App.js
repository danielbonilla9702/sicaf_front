
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Estudiantes from './components/estudiantes/Estudiantes';
import NavBar from './components/navBar/NavBar';
import Page404 from './components/page404/Page404';
import Maquinas from './components/maquinas/Maquinas';
import Administrativos from './components/administrativos/Administrativos';
import Docentes from './components/docentes/Docentes';
import Inicio from './components/inicio/Inicio';
import Externos from './components/externos/Externos';


import * as firebase from "firebase/firebase";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDAO8hd86mmNBqWy8TkeStFZrgq4n35WNM",
    authDomain: "sicaf-49911.firebaseapp.com",
    databaseURL: "https://sicaf-49911.firebaseio.com",
    projectId: "sicaf-49911",
    storageBucket: "sicaf-49911.appspot.com",
    messagingSenderId: "558849811362",
    appId: "1:558849811362:web:5e1b766cad91229e"
  };
if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

let firestore = firebase.firestore();

class Redirigir extends Component{
  render(){
    return(
      <Redirect to=""/>
    )
  }
}

class Cargando extends Component{
  render(){
    return(
      <div className="mt-5" align="center">
      <div className="spinner-border text-success" role="status">
  <span className="sr-only">Cargando...</span>
</div>
</div>
    )
  }
}

class App extends Component{
  constructor(){
  super();
  this.state={
   user: null ,
   mostrar: false,
   loading: true
  };
 this.handleAuth = this.handleAuth.bind(this);
 this.handleLogout = this.handleLogout.bind(this);
 this.renderLoginButton = this.renderLoginButton.bind(this);
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {

      this.setState({ user})
      if(user)
        this.setState({mostrar: true, loading: false})
      else{
        this.setState({mostrar: false, loading: false})
      }
      
    });
  }

  renderLoginButton(){
   
    if(this.state.user){
        //usuario logeado
      return(
        
      <div align="center">
       {/* <div className="mt--10">{!this.state.mostrar?
          <NavBar /> 
          :null}
          </div> */}
        <img width="150px" height="150px" src={this.state.user.photoURL} className="rounded mx-auto d-block md-2" alt={this.state.user.displayName} />
        <div className="alert alert-success mx-auto " role="alert" align="center"> Hola {this.state.user.displayName}!</div>
        <button className="btn btn-success"onClick={this.handleLogout}>Cerrar sesión</button>
        
      </div>
      
      )
     
    }else {
      //usuario no logeado
      return(
        <div align="center"> <button className="btn btn-success" onClick={this.handleAuth}>Ingresa con tu cuenta de Google</button></div>
     
      );
    }

  }

 

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`))

  }

  handleLogout(){

    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha cerrado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  
  render(){
    
    return (
      <BrowserRouter>
      <div className="App">
        {this.state.mostrar?
          <NavBar /> 
          :null}
        
        <br/>
        {this.renderLoginButton()}
      
        <Route path='/agregar_estudiantes' component={this.state.mostrar ? Estudiantes : (this.state.loading ? Cargando : Redirigir)} />
        <Route path='/agregar_administrativos' component={this.state.mostrar ? Administrativos : (this.state.loading ? Cargando : Redirigir)} />
        <Route path='/agregar_maquinas' component={this.state.mostrar ? Maquinas : (this.state.loading ? Cargando : Redirigir)} />
        <Route path='/agregar_docentes' component={this.state.mostrar ? Docentes : (this.state.loading ? Cargando : Redirigir)} />
        <Route path='/agregar_externos' component={this.state.mostrar ? Externos : (this.state.loading ? Cargando : Redirigir)} />
        <Route path='/' component={Inicio} />
        <Route path='/page404' component={this.state.mostrar ? Page404 : (this.state.loading ? Cargando : Redirigir)} />
          
          
        
         
        
      </div>
      </BrowserRouter>
      
      
    );
  }
}

export default App;
