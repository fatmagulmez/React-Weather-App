import React from 'react'

import Header from './Header'
import ThemeButton from './ThemeButton'
import Weather from './Weather'
import Footer from './Footer'

import {useTheme} from '../context/ThemeContext'



function Container() {
    const {theme} = useTheme()
    

  return (
    <div className={`app ${theme}`}>
        <div className=''>
            <ThemeButton />
        </div>
        
        <div className='container'>
            <Header />
            <Weather />
            <Footer />
        </div>
    </div>
  )
}

export default Container