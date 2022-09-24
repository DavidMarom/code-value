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
            console.log('=== PAYLOAD ====', action.payload)

            const newItem = {
                date: "2021-01-01T00:00:00.000Z",
                description: "test",
                id: 100,
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                name: "test",
                price: 100,
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