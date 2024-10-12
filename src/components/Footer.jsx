import React from 'react'
import {NavLink as Link} from "react-router-dom"
import "../styles/footer.css"

const Footer = () => {

    const yearDate = new Date().getFullYear()

    return (
        <>
            <div id="footer">
                <p className='mb-0 py-2 text-center'>Copywrite © {yearDate} next menu restaurant | Design & Developed by: <Link to="https://parvez-rabbi.vercel.app/">Parvez Rabbi</Link></p>
            </div>
        </>
    )
}

export default Footer
