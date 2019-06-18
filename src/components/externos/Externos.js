import React, { Component } from "react";

import "./Externos.css";


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

class Externos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      codigo: "",
      edad: "",
      rh: "",
      genero: "",
      actividad: "",
      
      externos: []
    };
  }

  componentWillMount() {
   

    let refExternos=firestore.collection("externos")

    refExternos.onSnapshot((snapshot) => {
      let externos=[]
      snapshot.forEach((doc)=>{
        externos.push(doc.data())
      })
      this.setState({
        externos: externos
      })
    }, err => {
      alert(err)
    })
  }

  agregarExternos() {
    firestore.collection('externos').doc(this.state.codigo)
    .set({
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      codigo: this.state.codigo,
      email: this.state.email,
      rh: this.state.rh,
      genero:this.state.genero,
      actividad:this.state.actividad,
      
     
    })
    
    
  }

  limpiarFormulario(){
    document.getElementById("formExterno").reset();
  }


  
  
  render() {
    return (
      <div>
       
        
        <div className="container-fluid ">
        
          <div className="row">
            <div className="col-6">
              <form id="formExterno" className="mt-5">
              <label> Agregar Externos </label>
                <div className="form-group">
                  <input
                    onChange = {(text) => {
                      this.setState({nombre: text.target.value})
                    }}
                    type="Nombre"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group">
                  <input  onChange = {(text) => {
                      this.setState({apellido: text.target.value})
                    }}
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Apellido"
                  />
                
                </div>
                <div className="form-group">
                  <input
                   onChange = {(text) => {
                      this.setState({email: text.target.value})
                    }}
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Correo institucional.
                  </small>
                </div>

                <div className="form-group">
                  <input
                   onChange = {(text) => {
                      this.setState({codigo: text.target.value})
                    }}
                    type="text"
                    className="form-control"
                    id="id"
                    placeholder="Código"
                  />
                  <small id="idHelp" className="form-text text-muted">
                    CC ó TI.
                  </small>
                </div>
                <div className="form-group">
                  <input
                   onChange = {(text) => {
                      this.setState({edad: text.target.value})
                    }}
                    type="text"
                    className="form-control"
                    id="edad"
                    placeholder="Edad"
                  />
                  </div>
                  <label>Tipo de sangre</label>
                <div className="form-group form-check ">
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({rh: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="rh"
                      id="a+"
                      value="a+"
                    />
                    <label className="form-check-label" for="a+">
                      A+
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({rh: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="rh"
                      id="a-"
                      value="a-"
                    />
                    <label className="form-check-label" for="a-">
                      A-
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({rh: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="rh"
                      id="o-"
                      value="o-"
                    />
                    <label className="form-check-label" for="o-">
                      O-
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({rh: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="rh"
                      id="o+"
                      value="o+"
                    />
                    <label className="form-check-label" for="o+">
                      O+
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({rh: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="rh"
                      id="b-"
                      value="b-"
                    />
                    <label className="form-check-label" for="b-">
                      B-
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({rh: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="rh"
                      id="b+"
                      value="b+"
                    />
                    <label className="form-check-label" for="b+">
                      B+
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({rh: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="rh"
                      id="ab+"
                      value="ab+"
                    />
                    <label className="form-check-label" for="ab+">
                      AB+
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({rh: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="rh"
                      id="ab-"
                      value="ab-"
                    />
                    <label className="form-check-label" for="ab-">
                      AB-
                    </label>
                  </div>
                </div>
                  <label>Género:</label>
                <div className="form-group form-check">
                  <div className="form-check form-check-inline">
                    <input onChange={(mas) => {
                      this.setState({genero: mas.target.value})
                    }} className="form-check-input"
                      type="radio"
                      name="genero"
                      id="masc"
                      value="m"
                    />
                    <label className="form-check-label" for="masc">
                      Masculino
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange= {(fem) => {
                      this.setState({genero: fem.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="genero"
                      id="fem"
                      value="f"
                    />
                    <label className="form-check-label" for="fem">
                      Femenino
                    </label>
                  </div>
                </div>
                <label>¿Realiza actividad fisica constantemente?</label>
                <div className="form-group form-check ">
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({actividad: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="actividad"
                      id="si"
                      value="si"
                    />
                    <label className="form-check-label" for="si">
                      Si
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={(option) => {
                      this.setState({actividad: option.target.value})
                    }}
                      className="form-check-input"
                      type="radio"
                      name="actividad"
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
                    this.agregarExternos();
                    this.limpiarFormulario();
                    
                  }}
                >
                  Agregar
                </button>

            </div>
            <div className="col-6"><List nombreCollection={'externos'} cabecera={['numero','nombre','apellido','codigo']} listado={this.state.externos}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Externos;
