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
            <h3>My Store</h3>
            <Row>
                <TopNavItem><Link to="/"><p>Main</p></Link></TopNavItem>
                <TopNavItem><Link to="/add"><p>Add Item</p></Link></TopNavItem>

            </Row>
            <Row>
                <Toggle color="#00aaff"
                    func={() => { dispatch(darkToggle()) }}
                    symbol={isDark ? '🌒' : '☀️'} />
            </Row>
        </NavContainer>
    )
}
