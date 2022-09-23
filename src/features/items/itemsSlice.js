import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fakestoreGet } from '../../services/http'

export const getItems = createAsyncThunk(
    'items/getItems', async () => {
    try {
        const response = await fakestoreGet()
        return response.data
    }
    catch (err) {
        return err.message
    }
});


export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: null,
        isLoading: false
    },
    extraReducers: {
        [getItems.pending]: (state) =>{
            state.isLoading = true;
        },
        [getItems.fulfilled]: (state,action)=>{
            state.items = action.payload;
            state.isLoading = false;
        },
        [getItems.rejected]: (state)=>{
            state.isLoading = false;
        }
    }
    
    })


export default itemsSlice.reducer