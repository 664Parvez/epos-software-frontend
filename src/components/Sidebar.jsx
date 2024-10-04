import React from 'react'
import "../styles/sidebar.css"
import { NavLink as Link, useLocation } from "react-router-dom"

import User from "../../public/user.png"

// Icons
import { MdOutlineSpaceDashboard, MdManageHistory, MdOutlineBorderColor, MdOutlineAccountBalanceWallet, MdFastfood, MdOutlineSettings, MdHelp, MdLogout } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";

const Sidebar = () => {

    // Sidebar Hide from this page (home page)

    const location = useLocation()

    if (location.pathname === "/") {
        return null // Return null to hide the navbar
    }
    
    // Sidebar Hide from this page (home page)

    return (
        <>
            <div id='side_bar_left'>
                <ul>
                    <Link to="/dashboard">
                        <li>
                            <MdOutlineSpaceDashboard className='side_menu_icon' /> Dashboard
                        </li>
                    </Link>
                    <Link to="/menu">
                        <li>
                            <MdFastfood className='side_menu_icon' /> Menu
                        </li>
                    </Link>
                    <Link to="/order-list">
                        <li>
                            <MdOutlineBorderColor className='side_menu_icon' /> Order List
                        </li>
                    </Link>
                    <Link to="/sales-summary">
                        <li>
                            <MdOutlineAccountBalanceWallet className='side_menu_icon' /> Sales Summary
                        </li>
                    </Link>
                    <Link to="/history">
                        <li>
                            <MdManageHistory className='side_menu_icon' /> History
                        </li>
                    </Link>
                    <Link to="/kitchen-menu">
                        <li>
                            <FaKitchenSet className='side_menu_icon' /> Kitchen Menus
                        </li>
                    </Link>
                </ul>

                <hr />

                <ul id='bottom_menu'>
                    <Link to="/settings"><li><MdOutlineSettings className='side_menu_icon' /> Settings</li></Link>  
                    <Link to="/help-center"><li><MdHelp className='side_menu_icon' /> Help Center</li></Link>
                    <Link to="/logout"><li><MdLogout className='side_menu_icon' /> Logout</li></Link>
                </ul>

                <hr />

                <div id="user_div">
                    <div className='user_inner'>
                        <div className="user_inner_image mx-auto">
                            <img src={User} alt="" />
                        </div>
                        <h5 className='text-center mb-0'>Parvez Rabbi</h5>
                        <p className='text-center'>Designation</p>
                        <div className="text-center">
                            <Link to="/profile" className="btn">Open Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar