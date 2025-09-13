import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice.js'
import messageReducer from '../features/messages/messagesSlice.js'
import connectionReducer from '../features/connections/connectionSlice.js'

export const store=configureStore({
    reducer:{
        user:userReducer,
        connections:connectionReducer,
        messages:messageReducer
    }
})