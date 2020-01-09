import React, {useState }from 'react';
import c from './content.module.css/content.module.css';
import TodoListFormRedux from './todoListForm.js';
import {setPostData} from '../../REDUX/List_Reducer';
import TodoTask from './todoTask.js';
class   TodoList  extends React.Component  {
constructor(props) {
   super(props);
}
    hideBlock = (index, name, decription, id) =>  {
      let arr = this.props.myPostData;
      arr.splice(index, 1);
      this.setState({myPostData:arr});
    }
    getDataList1 =() => {
      console.log(this.props);
    }
   getDataList = (values) => {
   this.props.addpost(values.name, values.description);
  }
  myPostElement =(el, index) =>{
     return <TodoTask id={index}  index={index} hideBlock={this.hideBlock} name={el.name} done={el.done} description = {el.description} />
   }

render () {
  return (
    <div>
     <TodoListFormRedux  onSubmit={this.getDataList} />
     {this.props.myPostData.map(this.myPostElement)}
     {this.myPostElement}
    </div>
  )

}
}

export default TodoList;
