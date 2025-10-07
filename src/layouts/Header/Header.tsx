import { useState } from 'react'
import { Search } from '../../components/Search/Search'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = ()=>{
    

    return(
        <header className="container container-header">
            <Search />
        </header>
    )
}