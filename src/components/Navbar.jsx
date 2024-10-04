import React from 'react'
import "../styles/navbar.css"
import { NavLink as Link, useLocation } from 'react-router-dom';

// Icons
import { FaBell } from "react-icons/fa6";

// image
import Logo from "/public/logo.png"
import User from "/public/user.png"

const Navbar = () => {

    // Sidebar Hide from this page (home page)

    const location = useLocation();
    if (location.pathname === '/') {
        return null; // Return null to hide the navbar
    }
    
    // Sidebar Hide from this page (home page)

    return (
        <>
            <div id='navbar'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Link to="/menu">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <input type="text" class="form-control" placeholder='Search Menu' />
                            </li>
                            <li>
                                <Link to="/reservation">Reservation</Link>
                            </li>
                            <li>
                                <Link to="/employee">Employees</Link>
                            </li>
                            <li>
                                <Link to="/tables">Tables</Link>
                            </li>
                            <li id='navbar_menu_item'>
                                <Link to="/menu">Menu</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='mx-2'>
                                <form action="">
                                    <select name="" id="" className='form-select'>
                                        <option value="">Table A</option>
                                        <option value="">Table B</option>
                                        <option value="">Table C</option>
                                        <option value="">Table D</option>
                                        <option value="">Table E</option>
                                        <option value="">Table F</option>
                                        <option value="">Table G</option>
                                    </select>
                                </form>
                            </div>
                            <div className='profile_img mx-2 shadow'>
                                <Link to="/profile">
                                    <img src={User} alt="" />
                                </Link>
                            </div>
                            <div className='mx-2'>
                                <Link to="/notification"><FaBell /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
