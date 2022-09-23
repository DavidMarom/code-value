import React, { useState, useEffect } from 'react'
import { PageContainer } from './PageComp.styles'
import { getList, addItemToList } from '../../features/list/listSlice'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { updateItem, deleteItem } from '../../services/fireStore'

export const PageComp02 = () => {
    const dispatch = useDispatch();

    const items = useSelector(state => state.list.list)
    const isDark = useSelector(state => state.settings.dark)
    const [newItem, setNewItem] = useState('')

    const handleCreateNew = () => {
        dispatch(addItemToList(newItem));
        dispatch(getList())
    }

    const handleDeleteItem = async (id) => {
        await deleteItem(id);
    }

    useEffect(() => {
        dispatch(getList());
        setNewItem("")
    }, [dispatch])

    if (items) {
        return (
            <PageContainer darkMode={isDark} >
                <input type="text" onChange={(ev) => { setNewItem(ev.target.value) }} />
                <button onClick={handleCreateNew}>Add</button>

                {items.map((item, idx) => {
                    return <div key={idx}>
                        <p>{item.item01}</p>
                        <button onClick={() => { updateItem(item.id) }}>Update</button>
                        <button onClick={() => { handleDeleteItem(item.id) }}>Delete</button>
                    </div>
                })}

            </PageContainer >
        )
    } else return <p>Loading</p>
}
