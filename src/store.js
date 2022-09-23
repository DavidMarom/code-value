import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './features/settings/settingsSlice'
import itemsReducer from './features/items/itemsSlice'

export default configureStore({
    reducer: {
        settings: settingsReducer,
        items: itemsReducer,
    }
})