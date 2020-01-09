const ADD_POST_DATA = 'ADD-POST-DATA';
const DELETE_TASK = 'DELETE-TASK';
/*{id: null, name: null, description: null, delete:false}*/
let initialState = {
  myPostData: [{id:865, tweretrter:'sdasd', description:'df', done:true},]
  };
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case  ADD_POST_DATA:
        console.log(action);
        let newTask = {
        name: action.name,
        description: action.description
      }
      return {
        myPostData: [...state.myPostData, newTask]
      }
    case DELETE_TASK:
      console.log(action);
      return {
        done:action.newTasks
      }
    default:
     return state;
  }
}

export let setPostData = (name, description) => {
  return {
    type: ADD_POST_DATA,
    name,
    description
  }
}
export let deleteTask = (newTasks) => {
  return {
    type: DELETE_TASK,
    newTasks:newTasks
  }
}

export default listReducer;
