import React, {Component} from 'react';
import Authorize from '../authorize/authorize.js';
import Sidebar from '../sidebar/sidebar.js';
import TodoListContainer from '../content/content_container.js';
import { Redirect } from 'react-router-dom';
import store from '../../REDUX/Redux_store.js';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import main from './main/main.module.css';
import {BrowserRouter, Route, withRouter} from  'react-router-dom';

 class Button extends React.Component  {

  state = {
    redirect:false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if(this.state.redirect == true) {

      return <Redirect to='/authorize' />
    }
  }
  render () {
  return (
    <div>
    {this.renderRedirect()}
     <button className={main.button} onClick={this.setRedirect} >+</button>
  </div>
  )
 }
}



export default Button;
