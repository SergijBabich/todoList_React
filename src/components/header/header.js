import React, {Component} from 'react';
import h from './header.module.css/header.module.css';
import {setUserData} from   '../../REDUX/Auth_Reducer.js';
import {connect} from 'react-redux';
const Header = (props) => {
  return (
    <div className={h.header} >
     <div className={h.header_logo}>
    </div>
    <div className={h.header_authorize}>
    <p>Hello <span> {props.login} </span></p>
    <div className={h.header_authorize_button}>
   <button></button>
    </div>
    </div>
    </div>
  )
}
const mapStateToProps = (state) =>  {
  return {
    login: state.auth.login,
  }
}
export default connect(mapStateToProps)(Header);
