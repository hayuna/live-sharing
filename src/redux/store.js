import { configureStore } from '@reduxjs/toolkit'
import employee from './employee.reducer'
import user from './user.reducer'

export default configureStore({
    reducer: {
        employee,
        user
    }
})

