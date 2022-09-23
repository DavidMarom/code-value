import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        dark: false,
        loading: false
    },
    reducers: {
        darkToggle: state => { state.dark = !state.dark },
        startLoading: state => { state.loading = true },
        stopLoading: state => { state.loading = false },
    }
})

export const { darkToggle, startLoading, stopLoading } = settingsSlice.actions

export default settingsSlice.reducer