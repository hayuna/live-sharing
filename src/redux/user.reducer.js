import { actionTypes } from "./action.types";

const initialState = {
  currentUser: {},
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        login: action.login,
      };
    case actionTypes.ADD_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case actionTypes.ADD_DATE_OF_BIRTH:
      return {
        ...state,
        dateOfBirth: action.dateOfBirth,
      };
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    case actionTypes.ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case actionTypes.DELETE_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default userReducer;
