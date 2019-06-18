import React, {Component} from 'react';

import './NavBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light backgroundNavBar">
          <label>
            SICAF
          </label>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Inicio <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/agregar_maquinas">
                  Máquinas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/agregar_estudiantes">
                  Estudiantes
                </a>
              </li><li className="nav-item">
                <a className="nav-link" href="/agregar_administrativos">
                  Administrativos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/agregar_docentes">
                  Docentes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/agregar_externos">
                  Externos
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/page404"
                  tabIndex="-1"
                  
                >
                  Reportes
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Codigo"
                aria-label="Buscar"
              />
              <button type="submit" className="btn btn-light my-2 my-sm-0">Buscar</button>
              
                
              
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;