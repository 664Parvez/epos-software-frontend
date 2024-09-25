import React from 'react'
import { NavLink as Link } from "react-router-dom"
import "../styles/employee.css"

const Employee = () => {

    const employee = [
        {
            "name" : "Parvez",
            "checkin" : "08:00AM",
            "checkout" : "04:00PM",
            "status" : "yes"
        },
        {
            "name" : "Rabbi",
            "checkin" : "08:00AM",
            "checkout" : "04:00PM",
            "status" : "yes"
        },
        {
            "name" : "Tanvir",
            "checkin" : "08:00AM",
            "checkout" : "04:00PM",
            "status" : "no"
        },
        {
            "name" : "Mosharoff",
            "checkin" : "08:00AM",
            "checkout" : "04:00PM",
            "status" : "no"
        },
        {
            "name" : "Mehedi",
            "checkin" : "08:00AM",
            "checkout" : "04:00PM",
            "status" : "yes"
        },
        {
            "name" : "Kabir",
            "checkin" : "08:00AM",
            "checkout" : "04:00PM",
            "status" : "no"
        },
        {
            "name" : "Jamal",
            "checkin" : "08:00AM",
            "checkout" : "04:00PM",
            "status" : "no"
        },
    ]

    return (
        <div id="main_section">
            <h3>Employee</h3>
            <hr />

            <div className="row justify-content-center">
                {
                    employee.map((items) => {
                        return (
                            <>
                                    <div className="col-lg-4 col-md-6 mt-4">
                                        <Link to={`/employee/${items.name}`}>
                                            <div className='employees_div' style={items.status === "yes" ? {borderLeft: "6px solid var(--sixth-color)"} : {borderLeft: "6px solid var(--fifth-color)"}}>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <h4>{items.name}</h4>
                                                    </div>
                                                    <div>
                                                        {
                                                            items.status === "yes" ? <div className='online'></div> : <></>
                                                        }
                                                    </div>
                                                </div>
                                                <hr />
    
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <small>Check In</small>
                                                        <p className='mb-0'>{items.checkin}</p>
                                                    </div>
                                                    <div>
                                                        <small>Check Out</small>
                                                        <p className='mb-0'>{items.checkout}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Employee