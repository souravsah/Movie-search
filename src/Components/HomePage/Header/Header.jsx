import React from 'react'
import { Parent, Searchbar } from './Header.style'
const Header = () => {
    return (
        <Parent>
            <Searchbar action=""  >
                <input type="text" />
                <button type="submit">Search</button>
            </Searchbar>
        </Parent>
    )
}

export default Header
