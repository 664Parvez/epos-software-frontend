import React from 'react'
import "../styles/tables.css"

import table from "../../public/table.png"

const Tables = () => {

    const tableAvailable = [
        {
            "table": "A",
            "chairs": 5,
            "status": "Booked"
        },
        {
            "table": "B",
            "chairs": 4,
            "status": "Free"
        },
        {
            "table": "C",
            "chairs": 6,
            "status": "Free"
        },
        {
            "table": "D",
            "chairs": 3,
            "status": "Booked"
        },
        {
            "table": "E",
            "chairs": 2,
            "status": "Booked"
        },
        {
            "table": "F",
            "chairs": 3,
            "status": "Free"
        },
        {
            "table": "G",
            "chairs": 4,
            "status": "Booked"
        },
        {
            "table": "H",
            "chairs": 3,
            "status": "Free"
        },
    ]


    return (
        <div id="main_section">
            <h3>Tables</h3>

            <div className="row">
                {
                    tableAvailable.map((items) => {
                        return (
                            <>
                                <div className="col-lg-6 mt-3">
                                    <div className='tables text-center' style={items.status === "Booked" ? {borderBottom: "6px solid var(--first-color)"} : {borderBottom: "6px solid var(--black-color)"}}>
                                        <h3>Table - {items.table}</h3>
                                        <img src={table} alt="" />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5>Chairs - <span>{items.chairs}</span></h5>
                                            </div>
                                            <div>
                                                {
                                                    items.status === "Booked" ? <h6 style={{background: "var(--first-color)"}}>{items.status}</h6> : <h6 style={{background: "var(--black-color)"}}>{items.status}</h6>
                                                }
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tables


// {borderBottom: `6px solid var(${borderColor})`}