import { actionTypes } from "./action.types";

const user = {
    login: '',
    email: '',
    dateOfBirth: null
}

const userReducer = (state = user, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER: return {
            ...state,
            login: action.login
        }
        case actionTypes.ADD_EMAIL: return {
            ...state,
            email: action.email
        };
        case actionTypes.ADD_DATE_OF_BIRTH: return {
            ...state,
            dateOfBirth: action.dateOfBirth
        };
        default: return state
    }
}

export default userReducer