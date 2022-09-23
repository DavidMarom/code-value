import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './features/settings/settingsSlice'
import itemsReducer from './features/items/itemsSlice'
import listReducer from './features/list/listSlice'

export default configureStore({
    reducer: {
        settings: settingsReducer,
        items: itemsReducer,
        list: listReducer,
    }
})