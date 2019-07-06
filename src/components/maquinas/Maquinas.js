import React, { Component } from "react";

import "./Maquinas.css";


import List from "../list/List";
import "bootstrap/dist/css/bootstrap.min.css";

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

class Maquinas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      codigo: "",
      tiempo: "",      
      activa: "",
      maquinas: []
    };
  }

  componentWillMount() {
   

    let refMaquinas=firestore.collection("maquinas")

    refMaquinas.onSnapshot((snapshot) => {
      let maquinas=[]
      snapshot.forEach((doc)=>{
        maquinas.push(doc.data())
      })
      this.setState({
        maquinas: maquinas,
        todosMaquinas: maquinas
      })
    }, err => {
      alert(err)
    })
  }

  agregarMaquinas() {
    firestore.collection('maquinas').doc(this.state.codigo)
    .set({
      nombre: this.state.nombre,
      codigo: this.state.codigo,
      tiempo: this.state.tiempo,
      activa: this.state.activa
    })
  }

  limpiarFormulario(){
    document.getElementById("formMaq").reset();
  }

  filtrar(text){
    let maquinas = this.state.todosMaquinas

    let result = maquinas.filter((maquina) => {
      return maquina.codigo.includes(text)
    })

    this.setState({maquinas: result})

  }

  render() {
    return (
      <div>
       
        
        <div className="container-fluid ">
        
          <div className="row">
            <div className="col-6">
              <form id="formMaq" className="mt-5">
              <label> Agregar Máquinas</label>
                <div className="form-group">
                  <input
                    onChange = {(text) => {
                      this.setState({nombre: text.target.value})
                    }}
                    type="text"
                    className="form-control"
                    id="nombre" required pattern="[A-Za-z ]+"
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group">
                  <input
                   onChange = {(text) => {
                      this.setState({codigo: text.target.value})
                    }}
                    type="number"
                    className="form-control"
                    id="codigo"
                    placeholder="Código" required
                  />
                  <small id="idHelp" className="form-text text-muted">
                    CC ó TI.
                  </small>
                </div>
                <div className="form-group">
                  <input
                   onChange = {(text) => {
                      this.setState({tiempo: text.target.value})
                    }}
                    type="text"
                    className="form-control"
                    id="tiempo"
                    placeholder="Tiempo de uso en meses"
                  />
                  </div>
          
                <label>En funcionamiento</label>
                <div className="form-group form-check ">
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({activa: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="activa"
                      id="si"
                      value="si"
                    />
                    <label className="form-check-label" for="si">
                      Si
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({activa: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="activa"
                      id="no"
                      value="no"
                    />
                    <label className="form-check-label" for="no">
                      No
                    </label>
                  </div>
                </div>
               
              </form>

              <button
                  className="btn btn-success"
                  onClick={() => {
                    this.agregarMaquinas();
                    this.limpiarFormulario();
                  }}
                >
                  Agregar
                </button>

            </div>
            <div className="col-6">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Codigo"
                aria-label="Buscar"
                onChange = {(event) => {
                  this.filtrar(event.target.value)
                }}
              />
              <List nombreCollection={'maquinas'} cabecera={['numero','nombre','activa', 'codigo' ]} listado={this.state.maquinas}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Maquinas;
