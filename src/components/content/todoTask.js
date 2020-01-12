import React from 'react';
import c from './content.module.css/content.module.css';
import {deletePostData} from '../../REDUX/List_Reducer';
import {connect} from   'react-redux';
import {setPostData} from '../../REDUX/List_Reducer';
const TodoTask = (props) => {
 console.log(props);
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
      <div className={c.container__items_index}>{props.index}</div>
      <div className={c.container__items_name}>{props.name}</div>
      <div className={c.container__items_description}>{props.description}</div>
      <div className={c.container__items_button} >
       <button onClick={handleClick} name='Create task' ></button>
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
