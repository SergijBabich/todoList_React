import React, {Component} from 'react';
import h from './header.module.css/header.module.css';
import {connect} from 'react-redux';
import {logOutUser} from '../../REDUX/Auth_Reducer';
import { Redirect } from 'react-router-dom';
import listReducer from '../../REDUX/List_Reducer';
import {deleteTask} from '../../REDUX/List_Reducer';
import Translate  from 'react-translate-component';

    class Header extends React.Component {
      constructor(props) {
         super(props);
      }

      getOutUser = () => {
         let login = null;
       let password = null;
       let myPostData = [];
      this.props.OutUserData(login, password);
      this.props.deleteTask(myPostData);
    }
    state = {
      redirect: false
    }
    setRedirect =() => {
      this.setState({
        redirect:true
      })
    }
    renderRedirect = () => {
      if (this.props.login === null) {
        return <Redirect to='./authorize' />
      }
    }

    render() {
      return (
    <div className={h.header} >
    {this.renderRedirect()}
     <div className={h.header_logo}>
    </div>
    <div className={h.header_authorize}>
    <Translate content='task.hello' component='p' /> <span> {this.props.login} </span>
    <div className={h.header_authorize_button}>
   <button onClick={this.getOutUser}></button>
    </div>
    </div>
    </div>
  )
}
}

export default Header;
