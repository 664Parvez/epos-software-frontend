import React from 'react'
import "../styles/sidebar.css"
import { NavLink as Link } from "react-router-dom"

import User from "../../public/user.png"

// Icons
import { MdOutlineSpaceDashboard, MdOutlineRestaurantMenu, MdOutlineBorderColor, MdOutlineAccountBalanceWallet, MdFastfood, MdOutlineSettings, MdHelp, MdLogout } from "react-icons/md";

const Sidebar = () => {
    return (
        <>
            <div id='side_bar_left'>
                <ul>
                    <li>
                        <Link to="/dashboard"><MdOutlineSpaceDashboard className='side_menu_icon' /> Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/"><MdFastfood className='side_menu_icon' /> Menu</Link>
                    </li>
                    <li>
                        <Link to="/order-list"><MdOutlineBorderColor className='side_menu_icon' /> Order List</Link>
                    </li>
                    <li>
                        <Link to="/accounting"><MdOutlineAccountBalanceWallet className='side_menu_icon' /> Accounting</Link>
                    </li>
                    <li>
                        <Link to="/delivery"><MdOutlineRestaurantMenu className='side_menu_icon' /> Ongoing Order</Link>
                    </li>
                </ul>

                <hr />

                <ul id='bottom_menu'>
                    <li><Link to="/settings"><MdOutlineSettings className='side_menu_icon' /> Settings</Link></li>
                    <li><Link to="/help-center"><MdHelp className='side_menu_icon' /> Help Center</Link></li>
                    <li><Link to="/logout"><MdLogout className='side_menu_icon' /> Logout</Link></li>
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