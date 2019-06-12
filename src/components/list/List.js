import React,  {Component} from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';

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
  // Initialize Firebase
if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

class List extends Component{
  constructor(props){
     super(props);

      this.state = {
        cabecera: this.props.cabecera,
        listado: this.props.listado,
        
        nombreCollection: this.props.nombreCollection
      }

  }

  eliminar(codigo){
    firestore.collection(this.state.nombreCollection).doc(codigo).delete()
  }

  componentWillReceiveProps(props){
    this.setState({
      cabecera: props.cabecera,
      listado: props.listado,
      
    })
  }

    render (){
        return (
            <div className="list-group mt-5">
 <table class="table table-striped">
  <thead>
    <tr>
      {
        this.state.cabecera.map((itemCabecera) => {
          return(
            <th scope="col">{itemCabecera}</th>
          )
        })
      }

    </tr>
  </thead>
  <tbody>
   
    
    {this.state.listado.map((objetoListado, index) => {
          return(
            <tr>
            <th scope="row">{index}</th>
            {
              
        this.state.cabecera.map((itemCabecera, index) => {
          if(index>0)
          return(
            
              
            <th scope="row">{objetoListado[itemCabecera]}</th>
            
            
          )
          return null;}
        )
      }
      <th scope="row"><button className = "btn btn-danger" onClick={() => {
              this.eliminar(objetoListado.codigo)
            }}>Eliminar</button></th>
            
            </tr>
          )
        })
      
    }
   
  </tbody>
</table>
</div>
        );
    }

}

export default List;








    