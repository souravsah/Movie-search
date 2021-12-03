import React from 'react'
import MovieInfoBox from '../../Components/SearchPage/MovieInfoBox/MovieInfoBox'
import SearchPagecontainer from '../../Components/SearchPage/SearchPagecontainer/SearchPagecontainer'
import SearchResultBox from '../../Components/SearchPage/SearchResultBox/SearchResultBox'
import SearchResultBoxContainer from '../../Components/SearchPage/SearchResultBoxContainer/SearchResultBoxContainer'
import { Css } from './SearchPage.style'
import Layout from '../../Layout/Layout'
import { Searchbar } from '../../Components/HomePage/Header/Header.style'
import Header from '../../Components/HomePage/Header/Header'

const SearchPage = () => {
    return (
        <Layout>
        <Header/>
        <Css>
            <SearchPagecontainer/>
            <SearchResultBoxContainer/>
        </Css>

        </Layout>
    )
}

export default SearchPage
