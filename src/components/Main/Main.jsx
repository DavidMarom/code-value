import React, { useEffect, useState } from 'react'
import { Button, PageContainer, ItemListCard, Img, Img2, Col, Row, ListContainer, DetailsContainer, CardTitle, CardText } from './Main.styles'
import { getItems, deleteItem } from '../../features/items/itemsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { isLocalStorageEmpty } from '../../services/utils'

export const Main = () => {
    const dispatch = useDispatch();

    const isDark = useSelector(state => state.settings.dark)
    const items = useSelector(state => state.items.items)

    const [currItem, setCurrItem] = useState(null)

    useEffect(() => {
        if (isLocalStorageEmpty()) {
            dispatch(getItems())
        }
    }, [dispatch])

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id));
        (currItem && currItem.id === id) && setCurrItem(null)
    }

    if (items) {
        return (
            <PageContainer darkMode={isDark} >

                {/* ======================== Left Side ===================== */}
                <ListContainer darkMode={isDark}>
                    {items.map((item, idx) =>
                        <ItemListCard key={idx} >
                            <Img src={item.image} key={idx} alt="" onClick={() => setCurrItem(item)} />
                            <Col onClick={() => setCurrItem(item)}>
                                <CardTitle>{item.name}</CardTitle>
                                <CardText>{item.description}</CardText>
                            </Col>
                            <Button onClick={() => handleDeleteItem(item.id)} >Delete</Button>
                        </ItemListCard>)
                    }
                </ListContainer>

                {/* ======================== Right Side ===================== */}
                <DetailsContainer darkMode={isDark}>
                    {currItem ? <>
                        <Row>
                            <Img2 src={currItem.image} alt="" />
                            <CardTitle>{currItem.name}</CardTitle>
                        </Row>
                        <p>{currItem.description}</p>
                        <p>Price: {currItem.price}</p>
                        <p>{currItem.date}</p>
                        <p>{currItem.id}</p>
                    </>
                        :
                        null
                    }
                </DetailsContainer>

            </PageContainer>
        )
    }
}
