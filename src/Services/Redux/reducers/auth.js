import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/auth';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? {user: user} : { user: {} }

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.push()
        }
    }
})

export default authReducer;