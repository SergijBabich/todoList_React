const ADD_POST_DATA = 'ADD-POST-DATA';
const CLEAR_STORAGE = 'CLEAR-STORAGE';
const DELETE_POST_DATA = 'DELETE-POST-DATA';
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
    case CLEAR_STORAGE:
          return {
        myPostData:action.newTasks
      }
    case DELETE_POST_DATA:
      return {
        myPostData:action.newTask
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
    type: CLEAR_STORAGE,
    newTasks
  }
}
export let deletePostData = (newTask) => {
  return {
    type: DELETE_POST_DATA,
    newTask
  }
}

export default listReducer;
