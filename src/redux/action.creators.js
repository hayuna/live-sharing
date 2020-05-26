import { actionTypes } from './action.types'

export const reduxAddUser = (login) => {
    return {
        type: actionTypes.ADD_USER,
        login
    }
}

export const reduxAddEmail = (email) => {
    return {
        type: actionTypes.ADD_EMAIL,
        email
    }
}

export const reduxAddDateOfBirth = (dateOfBirth) => {
    return {
        type: actionTypes.ADD_DATE_OF_BIRTH,
        dateOfBirth
    }
}

export const reduxSetCurrentUser = (user) => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        user
    }
}

export const reduxAddNewUser = (user) => {
    return {
        type: actionTypes.ADD_NEW_USER,
        user
    }
}

export const reduxDeleteUser = (user) => {
    return {
        type: actionTypes.DELETE_USER,
        user
    }
}