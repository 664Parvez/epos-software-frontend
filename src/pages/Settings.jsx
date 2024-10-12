import React from 'react'
import { NavLink as Link } from "react-router-dom"
import "../styles/settings.css"
import Mainsection from "../components/main-section"

import profile from "../../public/user.png"
import Logo from "../../public/logo.png"

const Settings = () => {
    return (
        <Mainsection>
            <h3>Settings</h3>
            <hr />

            <div className="container" id='settings_all_options'>
                <div className="basic mb-5">
                    <h4>User Info</h4>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className='mb-0'>Change Photo</p>
                        </div>
                        <div className="">
                            <div className='profile_img'>
                                <img src={profile} alt="" />
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className='mb-0'>Name</p>
                        </div>
                        <div className="">
                            <h5 className='mb-0'>Parvez Rabbi</h5>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className='mb-0'>Email</p>
                            </div>
                        <div className="">
                            <h5 className='mb-0'>parvezrabbi@gmail.com</h5>
                        </div>
                    </div>

                    <hr />
                </div>


                <h4>General Settings</h4>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <p className='mb-0'>Change Logo</p>
                    </div>
                    <div className="">
                        <img className='logo' src={ Logo } alt="" />
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                        <p className='mb-0'>Color Change</p>
                    </div>
                    <div className="color">
                        <ul>
                            <li>
                                <div className='change_color'>
                                    <div className='color_plat'></div>
                                    <p>#0043fa</p>
                                </div>
                            </li>
                            <li>
                                <div className='change_color'>
                                    <div className='color_plat'></div>
                                    <p>#0043fa</p>
                                </div>
                            </li>
                            <li>
                                <div className='change_color'>
                                    <div className='color_plat'></div>
                                    <p>#0043fa</p>
                                </div>
                            </li>
                            <li>
                                <div className='change_color'>
                                    <div className='color_plat'></div>
                                    <p>#0043fa</p>
                                </div>
                            </li>
                            <li>
                                <div className='change_color'>
                                    <div className='color_plat'></div>
                                    <p>#0043fa</p>
                                </div>
                            </li>
                            <li>
                                <div className='change_color'>
                                    <div className='color_plat'></div>
                                    <p>#0043fa</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr />

                <h4>Preferences</h4>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className='mb-0'>Languages</p>
                    </div>
                    <div>
                        <form action="">
                            <select name="" id="" className='form-select'>
                                <option value="">Select Language</option>
                                <option value="">English</option>
                                <option value="">France</option>
                                <option value="">Spanish</option>
                            </select>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <p className='mb-0'>Currency</p>
                    </div>
                    <div>
                        <form action="">
                            <select name="" id="" className='form-select'>
                                <option value="">Select Currency</option>
                                <option value="">$</option>
                                <option value="">£</option>
                                <option value="">€</option>
                                <option value="">৳</option>
                            </select>
                        </form>
                    </div>
                </div>

                <hr />

                <div className="text-end my-3 setting_edit_btn">
                    <Link to="" className="btn">Edit Settings</Link>
                </div>

            </div>
        </Mainsection>
    )
}

export default Settings