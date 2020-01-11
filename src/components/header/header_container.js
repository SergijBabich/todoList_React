import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from   'react-redux';
import { Redirect } from 'react-router-dom';
import {logOutUser} from '../../REDUX/Auth_Reducer';
import authReducer from '../../REDUX/Auth_Reducer';
import {deleteTask} from '../../REDUX/List_Reducer';
import listReducer from '../../REDUX/List_Reducer';

import Header from './header.js';

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    password:state.auth.password,
    myPostData:state.post.myPostData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    OutUserData:(login, password) => {
        dispatch(logOutUser(login, password))
  },
  deleteTask: (newTasks) => {
    dispatch(deleteTask(newTasks))
  }
}
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
  export default  HeaderContainer;
