import React from 'react'
import { PageContainer } from './PageComp.styles'

// Components

// Redux
import { useSelector } from 'react-redux'

export const PageComp = () => {
    const isDark = useSelector(state => state.settings.dark)


    return (
        <PageContainer darkMode={isDark} >
            <h1>Page 00</h1>

        </PageContainer>
    )
}
