const SET_USER_DATA = 'SET-USER-DATA';
const LOG_OUT_DATA = 'LOG-OUT-DATA'
let initialState = {
  login: null,
  password: null

};
const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
    return {
      login: action.login,
      password: action.password
    }
    case LOG_OUT_DATA:
    return {
      login:action.login,
      password: action.password
    }
    default:
      return state;
  }
}
 export let setUserData = (login, password) => {

    return {
      type: SET_USER_DATA,
      login,
      password

  }
}
export let logOutUser = (login, password) => {

   return {
     type: LOG_OUT_DATA,
     login,
     password

 }
}

  export default authReducer;
