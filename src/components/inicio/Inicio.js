import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logouniquin.png";

class Inicio extends Component{

    render(){
        return (
            <div className="text-center"><img className="img-thumbnail mt-5" src={logo}/>
            <h1>Bienvenido al centro de acondicionamiento fisico (CAF)</h1>
            </div>
            

           


        );
    }
}

export default Inicio;