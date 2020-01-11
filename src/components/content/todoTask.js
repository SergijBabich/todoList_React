import React from 'react';
import c from './content.module.css/content.module.css';
import {deleteTask} from '../../REDUX/List_Reducer';
import {connect} from   'react-redux';
import {setPostData} from '../../REDUX/List_Reducer';
const TodoTask = (props) => {

/* let removeObj = () => {
   let a = false;
   props.hideBlock(a);

   console.log("hide");
}*/
 /*const handleClick = (index) => {
   let newTasks = props.myPostData.filter(elem => {
     return elem.id !== index
   });
   props.deleteTask(newTasks);
  // props.history.push('/');
   console.log(newTasks);
 }*/
  return (
      <div>
      <div className={ c.container__items}>
      <div>{props.index}</div>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>
       <button name='Create task'  value={props.done} ></button>
      </div>
      </div>
      </div>
  )
}
/*let mapStateToProps = (state) => {
  return {
  id: state.post.myPostData.id
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (newTasks) => {
      dispatch(deleteTask(newTasks))
    },

  }
}*/

export default TodoTask;
