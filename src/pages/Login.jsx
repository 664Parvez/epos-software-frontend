import React, {useState, useRef} from 'react'
import { useNavigate } from "react-router-dom"
import "../styles/login.css"

import Logo from "../../public/logo.png"
const user = [
    {
        username: "rabbi",
        password: "1234"
    }
]


const Signin = () => {

    const navigate = useNavigate()


    const [firstPassword, setFirstPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
    const [thirdPassword, setThirdPassword] = useState("")
    const [forthPassword, setForthPassword] = useState("")

    const firstPassRef = useRef(null)
    const secondPassRef = useRef(null)
    const thirdPassRef = useRef(null)
    const forthPassRef = useRef(null)

    const userData = {
        pass: firstPassword + secondPassword + thirdPassword + forthPassword
    }

    if (firstPassword.length === 1) {
        secondPassword
    }

    var getDataOfUser = (e) => {
        
        user.map((items) => {
            if ( items.password === userData.pass ) {
                navigate('/menu');
            }
            else {
                navigator("/")
            }
        })

        e.preventDefault()
    }


    return (
        <>
        <div id='login_form'>
            <div className='text-center mb-5'>
                <img src={Logo} alt="" />
                <h3>Login</h3>
            </div>

                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8">
                        <form action="" onSubmit={getDataOfUser}>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <div>
                                <input type="text" className='form-control form-control-lg' onChange={(e) => {
                                    setFirstPassword(e.target.value)
                                    secondPassRef.current.focus()
                                }} maxLength={1} ref={firstPassRef} autoFocus={true} showSoftInputOnFocus={true} />
                                </div>
                                <div>
                                <input type="text" className='form-control form-control-lg' onChange={(e) => {
                                    setSecondPassword(e.target.value)
                                    thirdPassRef.current.focus()
                                }} maxLength={1} ref={secondPassRef} autoFocus={true} showSoftInputOnFocus={true} />
                                </div>
                                <div>
                                <input type="text" className='form-control form-control-lg' onChange={(e) => {
                                    setThirdPassword(e.target.value)
                                    forthPassRef.current.focus()
                                }} maxLength={1} ref={thirdPassRef} autoFocus={true} showSoftInputOnFocus={true} />
                                </div>
                                <div>
                                <input type="text" className='form-control form-control-lg' onChange={(e) => {
                                    setForthPassword(e.target.value)
                                }} maxLength={1} ref={forthPassRef} autoFocus={true} showSoftInputOnFocus={true} />
                                </div>
                            </div>
        
                            <div className="mt-3 text-center">
                                <button className='btn btn-lg' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default Signin