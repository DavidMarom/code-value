import React, { useEffect } from 'react'
import { PageContainer, Card, Img } from './PageComp.styles'
import { getItems } from '../../features/items/itemsSlice'

// Redux
import { useSelector, useDispatch } from 'react-redux'
export const PageComp01 = () => {
    const dispatch = useDispatch();

    const isDark = useSelector(state => state.settings.dark)
    const items = useSelector(state => state.items.items)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])


    if (items) {
        return (
            <PageContainer darkMode={isDark} >
                <h1>Page 01</h1>
                {/* {items.map((item, idx) => <p key={idx}>{item.title}</p>)} */}
                {items.map((item, idx) =>
                    <Card key={idx}>
                        <Img src={item.image} key={idx} alt="" />
                    </Card>

                )
                }
            </PageContainer>
        )
    }
}
