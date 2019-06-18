
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
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
class App extends Component{
  constructor(){
  super();
  this.state={
   user: null 
  };
 this.handleAuth = this.handleAuth.bind(this);
 this.handleLogout = this.handleLogout.bind(this);
 this.renderLoginButton = this.renderLoginButton.bind(this);
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {

      this.setState({ user})
    });
  }

  renderLoginButton(){
    //usuario logeado
    if(this.state.user){

      return(
      <div align="center">
        <img src={this.state.user.photoURL} className="rounded mx-auto d-block" alt={this.state.user.displayName} />
        <div className="alert alert-success" role="alert" align="center"> Hola {this.state.user.displayName}!</div>
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
    
        <NavBar />
        <br/>
        {this.renderLoginButton()}
      
        <Route path='/agregar_estudiantes' component={Estudiantes} />
        <Route path='/agregar_administrativos' component={Administrativos} />
        <Route path='/agregar_maquinas' component={Maquinas} />
        <Route path='/agregar_docentes' component={Docentes} />
        <Route path='/agregar_externos' component={Externos} />
        <Route path='/' component={Inicio} />
        <Route path='/page404' component={Page404} />
          
          
        
         
        
      </div>
      </BrowserRouter>
      
      
    );
  }
}

export default App;
