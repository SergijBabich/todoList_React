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
   getDataList = (values) => {
   this.props.addpost(values.name, values.description);
   (()=> {value.name='';
          value.description=''})();
  }
  myPostElement =(el, index) =>{
     return <TodoTask id={index}   myPostData ={this.props.myPostData} index={index} hideBlock={this.hideBlock} name={el.name} done={el.done} description = {el.description} />
   }

render () {
  return (
    <div>
     <TodoListFormRedux  onLangChange={this.props.onLangChange} onSubmit={this.getDataList} />
     {this.props.myPostData.map(this.myPostElement)}
     {this.myPostElement}
    </div>
  )

}
}

export default TodoList;
