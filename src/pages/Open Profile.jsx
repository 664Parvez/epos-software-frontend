import React from 'react'
import "../styles/profile.css"

import Profile from "../../public/user.png"
import { NavLink as Link } from "react-router-dom"

// Icons
import { BiFoodMenu } from "react-icons/bi";
import { RiMoneyDollarCircleLine, RiLogoutCircleRLine } from "react-icons/ri";

const OpenProfile = () => {
    return (
        <>
            <div id="main_section">
                <h3>Profile</h3>
                <div className="row mt-3">
                    <div className="col-lg-4 col-md-5">
                        <div className='profile_section'>
                            <div className="text-start">
                                <div className='profile_image'>
                                    <img src={Profile} alt="" />
                                </div>
                                <h4 className='mb-0'>Parvez Rabbi</h4>
                                <p>Waiter</p>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className='order_and_earn text-center my-2'>
                                        <div className='order_icon mb-3'>
                                            <BiFoodMenu className='icon' />
                                        </div>
                                        <p className='mb-0'>Total Orders</p>
                                        <h4 className='mb-0'>1200</h4>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className='order_and_earn text-center my-2'>
                                        <div className='earn_icon mb-3'>
                                            <RiMoneyDollarCircleLine className='icon' />
                                        </div>
                                        <p className='mb-0'>Total Earned</p>
                                        <h4 className='mb-0'>$4000</h4>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="logout_link text-end">
                                <Link to="" className="btn"><RiLogoutCircleRLine /> Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <div className='profile_section profile_right'>
                            <h5>Personal Information</h5>
                            <hr />

                            <div className="row">
                                <div className="col-lg-6">
                                    <p className='mb-0'>First Name</p>
                                    <h5>Parvez</h5>
                                </div>
                                <div className="col-lg-6">
                                    <p className='mb-0'>Last Name</p>
                                    <h5>Rabbi</h5>
                                </div>
                                <div className="col-lg-12">
                                    <p className='mb-0'>Email</p>
                                    <h5>parvezrabbi664@gmail.com</h5>
                                </div>
                                <div className="col-lg-6">
                                    <p className='mb-0'>Phone Number</p>
                                    <h5>1234567890</h5>
                                </div>
                                <div className="col-lg-6">
                                    <p className='mb-0'>Date of Birth</p>
                                    <h5>12/05/2000</h5>
                                </div>
                                <div className="col-lg-6">
                                    <p className='mb-0'>Location</p>
                                    <h5>Uttara, Dhaka</h5>
                                </div>
                                <div className="col-lg-6">
                                    <p className='mb-0'>Post Code</p>
                                    <h5>1230</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpenProfile