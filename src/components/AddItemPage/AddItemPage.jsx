import React, { useState } from 'react'
import { PageContainer } from './AddItemPage.styles'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../features/items/itemsSlice'


export const PageComp = () => {
    const dispatch = useDispatch();

    const isDark = useSelector(state => state.settings.dark)

    const [formName, setFormName] = useState(null)

    const handleSubmit = () => {
        console.log('dsfagdsf')
        const newItem = {
            id: 546,
            name: formName
        }

        dispatch(addItem(newItem))

    }

    return (
        <PageContainer darkMode={isDark} >
            <h1>Add Item</h1>

            <input type="text" onChange={(ev) => { setFormName(ev.target.value) }} />

            <button onClick={handleSubmit}>Submit new item</button>

        </PageContainer>
    )
}
