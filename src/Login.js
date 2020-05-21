import React from 'react';
import { useSelector } from 'react-redux'
import store from './redux/store'
import * as action from './redux/action.creators'


const Login = () => {
    const login = useSelector(state => state.login);
    const email = useSelector(state => state.email);
    const date = useSelector(state => state.date);

    const setLogin = (login) => {
        store.dispatch(action.reduxAddUser(login));
    }

    const setEmail = (email) => {
        store.dispatch(action.reduxAddEmail(email));
    }

    const setDate = (date) => {
        store.dispatch(action.reduxAddDateOfBirth(date));
    }

    const logger = () => {
        const newState = store.getState().userReducer;
        console.log(newState);
    }

    return (
        <div>
            <input
                type='text'
                value={login}
                id='login'
                placeholder='login'
                onChange={(e) => setLogin(e.target.value)}
            />
            <input
                type='text'
                value={email}
                id='email'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='date'
                value={date}
                id='date'
                onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={logger}>Show!</button>
        </div>
    );
}

export default Login;


// redux-devtools-extension
