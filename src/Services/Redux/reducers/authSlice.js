import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        const response = await authService.register(user)
        return response
    } catch (err) {
        console.log(err)
        const message = (error.response 
            && error.response.data 
            && error.response.data.message 
            || error.message 
            || error.toString());
        return thunkAPI.rejectWithValue(message);
    }
})

//Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        const response = await authService.logout()
        return response
    } catch (err) {
        console.log(err)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
            console.log(action)
        })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;