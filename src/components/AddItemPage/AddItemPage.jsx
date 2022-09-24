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
            dispatch(addItem(values))
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
                <div className="imput-container">
                    <input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                </div>
                <div className="imput-container">
                    <input
                        id="image"
                        name="image"
                        type="text"
                        placeholder="Image"
                        onChange={formik.handleChange}
                        value={formik.values.image}
                    />
                </div>
                <div className="imput-container">
                    <input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    />
                </div>

                <button type="submit">Add</button>
            </form>

            <div>
                <p>For test, you can use these images:</p>
                <p>https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg</p>
                <p>https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"</p>
            </div>
        </PageContainer>
    )
}
