import React from 'react';
import c from './content.module.css/content.module.css';
import {deletePostData} from '../../REDUX/List_Reducer';
import {connect} from   'react-redux';
import {setPostData} from '../../REDUX/List_Reducer';
const TodoTask = (props) => {

 /*let removeObj = () => {
    console.log(props);
   let a = false;
}*/
 const handleClick = () => {
   let newTask = props.myPostData.filter((elem, index) => {
     return index !== props.id
   });
   props.deletePostData(newTask);
  // props.history.push('/');
 }
  return (
      <div>
      <div className={ c.container__items}>
      <div>{props.index}</div>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>
       <button onClick={handleClick} name='Create task'  value={props.done} ></button>
      </div>
      </div>
      </div>
  )
}
let mapStateToProps = (state) => {
  return {
  myPostData: state.post.myPostData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deletePostData: (newTasks) => {
      dispatch(deletePostData(newTasks))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTask);
