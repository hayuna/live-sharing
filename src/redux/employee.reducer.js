import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: {},
    users: [],
}

export const slice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        reduxAddUser: (state, action) => {
            state.currentUser.login = action.payload
        },
        reduxAddEmail: (state, action) => {
            state.currentUser.email = action.payload
        },
        reduxAddDateOfBirth: (state, action) => {
            state.currentUser.dateOfBirth = action.payload
        },
        reduxSetCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        reduxAddNewUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        reduxDeleteUser: (state, action) => {
            state.users = state.users.filter(e => e !== action.payload)
        }
    }
})

export const reduxAddUser = slice.actions.reduxAddUser
export const reduxAddEmail = slice.actions.reduxAddEmail
export const reduxAddDateOfBirth = slice.actions.reduxAddDateOfBirth
export const reduxSetCurrentUser = slice.actions.reduxSetCurrentUser
export const reduxAddNewUser = slice.actions.reduxAddNewUser
export const reduxDeleteUser = slice.actions.reduxDeleteUser

export default slice.reducer;