import React, { useState } from 'react'
import { PageContainer } from './AddItemPage.styles'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../features/items/itemsSlice'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const PageComp = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(state => state.settings.dark)

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            const newItem = {
                id: 3452,
                name: values.name,

            }
            dispatch(addItem(newItem))
        }
    })

    return (
        <PageContainer darkMode={isDark} >
            <h1>Add Item</h1>

            <form onSubmit={formik.handleSubmit}>
                <div className="imput-container">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <button type="submit">Add</button>
            </form>


        </PageContainer>
    )
}
