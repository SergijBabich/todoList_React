import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import TodoList from './content';
import c from './content.module.css/content.module.css';
import {required , maxLengthCreator} from '../../Utils/validator.js';
import {Input, Textarea} from '../../Utils/formControl.js';
import Translate  from 'react-translate-component';
let maxLength300 = maxLengthCreator(300);
const TodoListForm = (props) => {
  console.log(props);
  return (
    <div className={c.content__container}>
    <form onSubmit = {props.handleSubmit}>
    <Translate content='task.name' component='span'/>
    <div className={c.content__container__input}>
    <Field autocomplete="off" validate={[required]} component={Input} name={'name'} />
   </div>
   <Translate content='task.description' component='span'/>
   <div className={c.content__container__input}>
   <Field  autocomplete="off"   validate={[required]} className={c.content__container__textarea} component={Textarea} cols="45" rows="5" name={'description'} type={'text'} />
  </div>
 <div>
 <button className={c.content__button} name='Create tack'></button>
 </div>
    </form>
    </div>
  )
}

const TodoListFormRedux = reduxForm({
  form: 'todoList'
})(TodoListForm);
export default TodoListFormRedux;
