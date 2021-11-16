import React from 'react'
import LoginNavbar from './LoginNavbar'
import MainNavbar from './MainNavbar'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <div>
            <LoginNavbar/>
            <SearchBar/>
            <MainNavbar/>
        </div>
    )
}

export default Navbar
