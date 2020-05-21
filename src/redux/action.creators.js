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