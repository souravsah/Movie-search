import React from 'react'
import { useState } from 'react/cjs/react.development'
import Freetowatch from '../../Components/HomePage/Freetowatch/Freetowatch'
import Header from '../../Components/HomePage/Header/Header'
import Loading from '../../Components/HomePage/Loading/Loading'
import Popular from '../../Components/HomePage/Popular/Popular'
import Trending from '../../Components/HomePage/Trending/Trending'
import Movieboxcontainer from '../../core/Movieboxcontainer/Movieboxcontainer'
import Layout from '../../Layout/Layout'
const HomePage = () => {
        return (
        <>

        <Layout>
        <Header/>
        <Popular/>
        <Freetowatch/>
        <Trending/>
        </Layout>
        </>
    )
}

export default HomePage
