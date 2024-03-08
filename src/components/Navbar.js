import React from 'react'
//import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-a dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.list}
            </a>
            <ul className={`dropdown-menu dropdown-menu-${props.mode} bg-${props.mode}`}>
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="container" style={{display: 'flex', justifyContent: 'flex-center'}} role="search">
          <input className="form-control me-2" id={`input${props.mode==='dark'?'ID':'input'}`} style={{color: props.mode==='dark'?'white':'black',background: props.mode==='dark'?'#28282B':'white'}} type="search" placeholder="Search" aria-label="Search"/>
          <button className={`btn btn-primary border-${props.mode==='dark'?'white' : ''} ${props.mode==='dark'?'btn-dark' : ''}`} type="submit">Search</button>
        </form>
        <div className="container" style={{display: 'flex', justifyContent: 'flex-end'}}>
      <div className="form-check form-switch mx-3"   onClick={props.toggleStyle}>
            <input className="form-check-input "  defaultChecked ="true" type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label mx-2" style={{color: props.mode==='dark'?'white':'black'}} for="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark' : 'light'} mode</label>
      </div>
      </div>
      </div>
    </div>
    </nav>
  )
}
//Navbar.propTypes = {title: PropTypes.string ,list: PropTypes.string }