import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchList, createNew } from '../../services/fireStore'

export const getList = createAsyncThunk(
    'list/getList', async () => {
        try {
            return await fetchList()
        }
        catch (err) {
            return err.message
        }
    });

export const addItemToList = createAsyncThunk(
    'list/addItemToList', async (newItem) => {
        try {
            return await createNew(newItem);
        }
        catch (err) {
            return err.message
        }
    });

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        list: null,
        isLoading: false
    },
    extraReducers: {
// getList
        [getList.pending]: (state) => {
            state.isLoading = true;
        },
        [getList.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        },
        [getList.rejected]: (state) => {
            state.isLoading = false;
        },
// addItemToList
        [addItemToList.pending]: (state) => {
            state.isLoading = true;
        },
        [addItemToList.fulfilled]: (state, action) => {
            // state.list.push(action.meta.arg);
            state.isLoading = false;
        },
        [addItemToList.rejected]: (state) => {
            state.isLoading = false;
        },


    }

})

export default listSlice.reducer