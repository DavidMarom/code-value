import { useContext } from 'react'
import { PageContext } from "../../Context.jsx"

import { NavContainer } from './TopNav.styles'
import { Row, TopNavItem } from '../StyledComponents'

import { Link } from "react-router-dom";

// Components
import Toggle from '../Toggle/Toggle'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { darkToggle } from '../../features/settings/settingsSlice'


export default function TopNav() {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.settings.dark)
    const { value } = useContext(PageContext);

    return (
        <NavContainer darkMode={isDark} >
            <h1>Logo</h1>
            <Row>
                <TopNavItem><Link to="/page00"><p>Page 00</p></Link></TopNavItem>
                <TopNavItem><Link to="/page01"><p>Page 01</p></Link></TopNavItem>
                <TopNavItem><Link to="/page02"><p>Page 02</p></Link></TopNavItem>
            </Row>
            <Row>
                <Toggle color="#00aaff" func={() => { dispatch(darkToggle()) }} symbol={isDark ? '🌒' : '☀️'} />
            </Row>
        </NavContainer>
    )
}
