import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface UserState {
    logined: boolean;
    name: string;
    job: string;
}

const initialState: UserState = {
    logined: false,
    name: '',
    job: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: state => {
            state.logined = false
            state.name = ''
            state.job = ''
            console.log(state.logined)
        },
        login: (state, action) => {
            state.logined = true
            state.name = action.payload.name
            state.job = action.payload.job
        }
    }
})

export const { logout, login } = userSlice.actions

export const selectUser = (state:RootState) => state.user

export default userSlice.reducer