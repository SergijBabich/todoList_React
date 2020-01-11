import React from 'react';
import a from './authorize/authorize.module.css';
import { Field, reduxForm } from 'redux-form';
import {connect} from   'react-redux';
import { Redirect } from 'react-router-dom';
import {setUserData} from   '../../REDUX/Auth_Reducer.js';
import listReducer from '../../REDUX/List_Reducer';
import {deleteTask} from '../../REDUX/List_Reducer';
import {Input} from '../../Utils/formControl.js';
import authReducer from   '../../REDUX/Auth_Reducer.js';
import {required , maxLengthCreator, minLengthCreator} from '../../Utils/validator.js'
const Authorize = (props) => {
 console.log(props);
 let redirect = () => {
   if (props.login && props.password) {
      return <Redirect to='/content' />
   }
 }
 let pushFormData = (values) => {
    props.setUserData(values.login, values.password);

 }
   return (
     <div className={a.registration__container}>
     {redirect()}
      <AuthorizeReduxForm   onSubmit={pushFormData}/>
     </div>
   )

}
const maxLength20 = maxLengthCreator(20);
const minLength8 = minLengthCreator(8);
const AuthorizeForm = (props) => {

  return (
    <div>
    <form onSubmit = {props.handleSubmit}>
    <label>Regisrtation</label>
    <div className={a.registration__container__input}>
    <Field component={Input}  validate={[required, maxLength20]}  name={'login'} autocomplete="off" placeholder='Enter your mail' />
   </div>
   <label></label>
   <div className={a.registration__container__input}>
   <Field component={Input} name={'password'}    validate={[required, minLength8]} autocomplete="off" placeholder='Enter your pass' type={'password'} />
  </div>
  <div>
  {/*<Field component={'input'} name={'rememberMe'}  value ='false' type={'checkbox'} />*/}
 </div>
 <div className={a.registration__button__wrapper}>
 <button className={a.registration__button}></button>
 </div>
    </form>
    </div>
  )
}

const  AuthorizeReduxForm = reduxForm({form:'authorize'})(AuthorizeForm);
const mapStateToProps = (state) =>  {
  return {
    login: state.auth.login,
    password: state.auth.password,
    myPostData: state.post.myPostData

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setUserData:(login, password) => {
      dispatch(setUserData(login, password))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
