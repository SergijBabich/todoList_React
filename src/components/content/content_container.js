import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from   'react-redux';
import { Redirect } from 'react-router-dom';
import TodoList from './content.js';
import listReducer from '../../REDUX/List_Reducer';
import {setPostData} from '../../REDUX/List_Reducer';

let mapStateToProps = (state) => {
  return {
  myPostData: state.post.myPostData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addpost:(name, description) => {
      dispatch(setPostData(name, description))
    }
  }
}
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer;
