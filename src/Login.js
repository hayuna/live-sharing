import React, { useState } from 'react';
import { useStore } from 'react-redux'
import * as action from './redux/user.reducer'

const Login = () => {
    const store = useStore();
    const [currentUser, setCurrentUser] = useState({});

    const logger = () => {
        const newState = store.getState();
        console.info(newState);
    }

    const addCurrentUser = () => {
        store.dispatch(action.reduxSetCurrentUser(currentUser));
    }

    const addToUsers = () => {
        store.dispatch(action.reduxAddNewUser(currentUser))
    }

    return (
        <div>
            <input
                type='text'
                value={currentUser.login}
                id='login'
                placeholder='login'
                onChange={(e) => setCurrentUser({ ...currentUser, login: e.target.value })}
            />
            <input
                type='text'
                value={currentUser.email}
                id='email'
                placeholder='email'
                onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
            />
            <input
                type='date'
                value={currentUser.date}
                id='date'
                onChange={(e) => setCurrentUser({ ...currentUser, date: e.target.value })}
            />
            <button onClick={logger}>Show!</button>
            <button onClick={addCurrentUser}>Add</button>
            <button onClick={addToUsers}>Add to Users</button>
        </div>
    );
}

export default Login;


// redux-devtools-extension
