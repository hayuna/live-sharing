const initialState = {
  currentUser: {},
  users: [],
};

const actionTypes = {
  ADD_USER: 'ADD_USER',
  ADD_EMAIL: 'ADD_EMAIL',
  ADD_DATE_OF_BIRTH: 'ADD_DATE_OF_BIRTH',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  ADD_NEW_USER: 'ADD_NEW_USER',
  DELETE_USER: 'DELETE_USER'
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return { ...state, login: action.login };
    case actionTypes.ADD_EMAIL:
      return { ...state, email: action.email };
    case actionTypes.ADD_DATE_OF_BIRTH:
      return { ...state, dateOfBirth: action.dateOfBirth };
    case actionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.user };
    case actionTypes.ADD_NEW_USER:
      return { ...state, users: [...state.users, action.user] };
    case actionTypes.DELETE_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export const reduxAddUser = (login) => ({ type: actionTypes.ADD_USER, login })
export const reduxAddEmail = (email) => ({ type: actionTypes.ADD_EMAIL, email })
export const reduxAddDateOfBirth = (dateOfBirth) => ({ type: actionTypes.ADD_DATE_OF_BIRTH, dateOfBirth })
export const reduxSetCurrentUser = (user) => ({ type: actionTypes.SET_CURRENT_USER, user })
export const reduxAddNewUser = (user) => ({ type: actionTypes.ADD_NEW_USER, user })
export const reduxDeleteUser = (user) => ({ type: actionTypes.DELETE_USER, user })


export default userReducer;
