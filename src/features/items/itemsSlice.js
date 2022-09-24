import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fakestoreGet } from '../../services/fakeDbService'
import { saveJSONtoLocalStorage, getJSONfromLocalStorage, isLocalStorageEmpty } from '../../services/utils'

export const getItems = createAsyncThunk(
    'items/getItems', async () => {
        try {
            return await fakestoreGet()
        }
        catch (err) {
            return err.message
        }
    });

const fetchItemsAndUpdateLocalStorage = () => {
    const items = fakestoreGet();
    saveJSONtoLocalStorage('cv-store-items', items);
    return items;
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: (isLocalStorageEmpty() ? fetchItemsAndUpdateLocalStorage() : getJSONfromLocalStorage('cv-store-items')),
        isLoading: false
    },
    reducers: {
        deleteItem: (state, action) => {
            const newStoreItems = state.items.filter(item => item.id !== action.payload)
            saveJSONtoLocalStorage('cv-store-items', newStoreItems);
            state.items = newStoreItems;

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

            const newStoreItems = [...state.items, newItem];
            saveJSONtoLocalStorage('cv-store-items', newStoreItems);
            state.items = newStoreItems;
        }
    },
    extraReducers: {
        [getItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getItems.fulfilled]: (state, action) => {
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