import React from 'react'

import Provider from '../Context/Context'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

import '../../scss/main.scss'

const Main = () => {
    return (
        <Provider>
            <Header />
            <Content />
            <Footer />
        </Provider>
    ) 
}

export default Main