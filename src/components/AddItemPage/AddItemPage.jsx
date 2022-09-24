import React from 'react'
import { PageContainer, Error } from './AddItemPage.styles'
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
            description: '',
            price: '',
            image: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            description: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
            price: Yup.number().required('Required'),
            image: Yup.string().required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(addItem(values))
            resetForm();
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
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (<Error>{formik.errors.name}</Error>) : null}
                </div>
                <div className="imput-container">
                    <input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (<Error>{formik.errors.description}</Error>) : null}
                </div>
                <div className="imput-container">
                    <input
                        id="image"
                        name="image"
                        type="text"
                        placeholder="Image"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                    />
                    {formik.touched.image && formik.errors.image ? (<Error>{formik.errors.image}</Error>) : null}
                </div>
                <div className="imput-container">
                    <input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        placeholder="Price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (<Error>{formik.errors.price}</Error>) : null}
                </div>

                <button type="submit">Add</button>
            </form>

            <div>
                <p>For test, you can use these images:</p>
                <p>https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg</p>
                <p>https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg</p>
            </div>
        </PageContainer>
    )
}
