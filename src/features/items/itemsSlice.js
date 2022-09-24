import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fakestoreGet } from '../../services/fakeDbService'

export const getItems = createAsyncThunk(
    'items/getItems', async () => {
        try {
            return await fakestoreGet()
        }
        catch (err) {
            return err.message
        }
    });

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: fakestoreGet(),
        isLoading: false
    },
    reducers: {
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        addItem: (state, action) => {
            const newItem = {
                date: new Date().toLocaleString(),
                description: action.payload.description,
                id: (new Date()).getTime(),
                image: action.payload.image,
                name: action.payload.name,
                price: action.payload.price,
            }

            state.items.push(newItem)
        }
    },
    extraReducers: {
        [getItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getItems.fulfilled]: (state, action) => {
            console.log('=== FULFILLED ===', action.payload)
            state.items = action.payload;
            state.isLoading = false;
        },
        [getItems.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export const { deleteItem, addItem } = itemsSlice.actions

export default itemsSlice.reducer