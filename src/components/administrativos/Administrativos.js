import React, { Component } from "react";

import "./Administrativos.css";


import List from "../list/List";
import "bootstrap/dist/css/bootstrap.min.css";

import * as firebase from "firebase/firebase";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDAO8hd86mmNBqWy8TkeStFZrgq4n35WNM",
    authDomain: "sicaf-49911.firebaseapp.com",
    
    projectId: "sicaf-49911",
    storageBucket: "sicaf-49911.appspot.com",
    messagingSenderId: "558849811362",
    appId: "1:558849811362:web:5e1b766cad91229e"
  };
if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

let firestore = firebase.firestore();

class Administrativos extends Component {
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
      programa: "",
      administrativos: []
    };
  }

  componentWillMount() {
   

    let refAdministrativos=firestore.collection("administrativos")

    refAdministrativos.onSnapshot((snapshot) => {
      let administrativos=[]
      snapshot.forEach((doc)=>{
        administrativos.push(doc.data())
      })
      this.setState({
        administrativos: administrativos,
        todosAdministrativos: administrativos
      })
    }, err => {
      alert(err)
    })
  }

  agregarAdministrativo() {
    firestore.collection('administrativos').doc(this.state.codigo)
    .set({
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      codigo: this.state.codigo,
      email: this.state.email,
      rh: this.state.rh,
      genero:this.state.genero,
      actividad:this.state.actividad,
      programa: this.state.programa
     
    })
    
    
  }

  limpiarFormulario(){
    document.getElementById("formAdminis").reset();
  }

  filtrar(text){
    let administrativos = this.state.todosAdministrativos

    let result = administrativos.filter((administrativo) => {
      return administrativo.codigo.includes(text)
    })

    this.setState({administrativos: result})

  }
  
  render() {
    return (
      <div>
       
        
        <div className="container-fluid ">
        
          <div className="row">
            <div className="col-6">
              <form id="formAdminis" className="mt-5">
              <label> Agregar Administrativos</label>
                <div className="form-group">
                  <input
                    onChange = {(text) => {
                      this.setState({nombre: text.target.value})
                    }}
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre" required pattern="[A-Za-z ]+"
                  />
                </div>
                <div className="form-group">
                  <input  onChange = {(text) => {
                      this.setState({apellido: text.target.value})
                    }}
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Apellido" required pattern="[A-Za-z ]+"
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
                    placeholder="E-mail"
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
                    type="number"
                    className="form-control"
                    id="id"
                    placeholder="Código" required
                  />
                  <small id="idHelp" className="form-text text-muted">
                  C.C. ó T.I.
                  </small>
                </div>
                <div className="form-group">
                  <input
                   onChange = {(text) => {
                      this.setState({edad: text.target.value})
                    }}
                    type="number"
                    className="form-control"
                    id="edad"
                    placeholder="Edad" min="8" max="99"
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
                <div className="form-group">
                <select onChange={(selector) => {
                      this.setState({programa: selector.target.value})
                    }} class="form-control">
                   <option>Programa Academico</option>
                    <option>Ingeniería de sistemas y computación</option>
                    <option>Ingeniería civil</option>
                    <option>Ingenieria electrónica</option>
                    <option>Topografía</option>
                    <option>Obras civiles</option>
                    <option>Lic. en ciencias naturales</option>
                    <option>Lic. en educación física</option>
                    <option>Lic. en literatura</option>
                    <option>Lenguas modernas</option>
                    <option>Lic. en matemáticas</option>
                    <option>Lic. en ciencias sociales</option>
                    <option>Lic. en pedagogía infantil</option>
                    <option>Filosofía</option>
                    <option>Artes visuales</option>
                    <option>Comunicación social</option>
                    <option>Trabajo social</option>
                    <option>Física</option>
                    <option>Química</option>
                    <option>Biología</option>
                    <option>Tecnología en instrumentación electrónica</option>
                    <option>Administración financiera</option>
                    <option>Administración de negocios</option>
                    <option>Contaduría pública</option>
                    <option>Economía</option>
                    <option>Medicina</option>
                    <option>Seguridad y salud en el trabajo</option>
                    <option>Gerontología</option>
                    <option>Enfermería</option>
                    <option>Ingeniería de alimentos</option>
                    <option>Administración de negocios</option>
                    <option>Tecnología agropecuaria</option>
                    <option>Tecnología en procesos agroindustriales</option>

                    </select>
                    
                </div>
               
              </form>

              <button
                  className="btn btn-success"
                  onClick={() => {
                    this.agregarAdministrativo();
                    this.limpiarFormulario()
                   
                    
                  }}
                >
                  Agregar
                </button>

            </div>
            <div className="col-6">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Código"
                aria-label="Buscar"
                onChange = {(event) => {
                  this.filtrar(event.target.value)
                }}
              />
            <List nombreCollection={'administrativos'} cabecera={['numero','nombre','apellido','codigo']} listado={this.state.administrativos}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Administrativos;
