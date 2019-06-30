import React, {Component} from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';

import * as firebase from "firebase/firebase";
import 'firebase/firestore'
import List from "../list/List";
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

class Reportes extends Component {

  constructor(props){
    super(props)

    this.state = {
      estudiantes: [],
      todosEstudiantes: [],
      administrativos: [],
      todosAdministrativos: [],
      docentes: [],
      todosDocentes: []
    }

  }

  componentWillMount(){
    let refEstudiantes=firestore.collection("estudiantes")

    refEstudiantes.onSnapshot((snapshot) => {
      let estudiantes=[]
      snapshot.forEach((doc)=>{
        estudiantes.push(doc.data())
      })
      this.setState({
        todosEstudiantes: estudiantes
      })
    }, err => {
      alert(err)
    })

    let refAdministrativos=firestore.collection("administrativos")

    refAdministrativos.onSnapshot((snapshot) => {
      let administrativos=[]
      snapshot.forEach((doc)=>{
        administrativos.push(doc.data())
      })
      this.setState({
        todosAdministrativos: administrativos
      })
    }, err => {
      alert(err)
    })

    let refDocentes=firestore.collection("docentes")

    refDocentes.onSnapshot((snapshot) => {
      let docentes=[]
      snapshot.forEach((doc)=>{
        docentes.push(doc.data())
      })
      this.setState({
        todosDocentes: docentes
      })
    }, err => {
      alert(err)
    })
  }

  filtrarEstudiantes(text){
    let estudiantes = this.state.todosEstudiantes

    let result = estudiantes.filter((estudiante) => {
      return estudiante.programa === text
    })

    this.setState({estudiantes: result})

  }

  filtrarAdministrativos(text){
    let administrativos = this.state.todosAdministrativos

    let result = administrativos.filter((administrativo) => {
      return administrativo.programa === text
    })

    this.setState({administrativos: result})

  }

  filtrarDocentes(text){
    let docentes = this.state.todosDocentes

    let result = docentes.filter((docente) => {
      return docente.programa === text
    })

    this.setState({docentes: result})

  }
  
  render() {
    return (
      <div className="reporte">
        <div className="form-group">
          <select onChange={(selector) => {
                      this.setState({programa: selector.target.value})
                      this.filtrarEstudiantes(selector.target.value)
                      this.filtrarAdministrativos(selector.target.value)
                      this.filtrarDocentes(selector.target.value)

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
          <div className="row">
            <div className = "col-6 mt-3">
              <h2>Estudiantes</h2>
              <List nombreCollection={'estudiantes'} cabecera={['numero','nombre','apellido','codigo']} listado={this.state.estudiantes}/>
            </div>
            <div className = "col-6 mt-3">
              <h2>Administrativos</h2>
              <List nombreCollection={'administrativos'} cabecera={['numero','nombre','apellido','codigo']} listado={this.state.administrativos}/>          
            </div>
          </div>
          <div className="row mt-3">
            <div className = "col-6">
              <h2>Docentes</h2>
              <List nombreCollection={'docentes'} cabecera={['numero','nombre','apellido','codigo']} listado={this.state.docentes}/>
            </div>
          
          </div>

          </div>
      </div>
    );
  }
}
export default Reportes;