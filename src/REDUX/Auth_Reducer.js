const SET_USER_DATA = 'SET-USER-DATA';
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

  export default authReducer;
