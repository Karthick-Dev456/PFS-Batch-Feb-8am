import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/conditional">Conditional</NavLink>
                </li>
                <li>
                    <NavLink to="/effect">Effect</NavLink>
                </li>
                <li>
                    <NavLink to="/data">Data</NavLink>
                </li>
                <li>
                    <NavLink to="/student">Students</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
