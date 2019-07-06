import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logouniquin.png";

class Inicio extends Component{

    render(){
        return (
            <div className="text-center"><img className="img-thumbnail mt-5" alt="logo bienestar" src={logo}/>
            <h1>Bienvenido al Centro de Acondicionamiento Físico (CAF)</h1>
            </div>
            

           


        );
    }
}

export default Inicio;