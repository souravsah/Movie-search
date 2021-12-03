import React from 'react'
import { SearchResultBoxCss, SettingBox } from './SearchResultBox.style'

const SearchResultBox = () => {
    return (
        <SearchResultBoxCss>
        <h3>Search Results</h3>
        <SettingBox>
            <ul>
                <li><span>TV Shows</span><span>588</span></li>
                <li><span>Movies</span><span>522</span></li>
                <li><span>People</span><span>5</span></li>
                <li><span>Companies</span><span>2</span></li>
                <li><span>Collections</span><span>1</span></li>
                <li><span>Keyword</span><span>0</span></li>
                <li><span>Network</span><span>0</span></li>
            </ul>
        </SettingBox>
        </SearchResultBoxCss>
    )
}

export default SearchResultBox
