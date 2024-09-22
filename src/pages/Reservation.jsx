import React from 'react'
import "../styles/reservation.css"

const Reservation = () => {

    const morningReserve = [
        {
            "table": "A",
            "time": "10:10AM",
            "name": "Parvez"
        },
        {
            "table": "C",
            "time": "10:10AM",
            "name": "Tarin"
        },
        {
            "table": "C",
            "time": "09:10AM",
            "name": "Safy"
        },
        {
            "table": "E",
            "time": "09:10AM",
            "name": "Saiful"
        },
    ]
    const lunchReserve = [
        {
            "table": "B",
            "time": "02:30PM",
            "name": "Rabbi"
        },
        {
            "table": "F",
            "time": "01:45PM",
            "name": "Mosharoff"
        }
    ]
    const dinnerReserve = [
        {
            "table": "F",
            "time": "07:45PM",
            "name": "Mosharoff"
        }
    ]

    return (
        <div id="main_section">
            <h3>Reservation</h3>

            <div>
                <div className="row justify-content-center mt-2">
                    {
                        morningReserve.map((items) => {
                            return (
                                <>
                                    {
                                        items.time >= "08:00AM" &&  items.time <= "11:00AM"? 
                                        <div className="col-lg-4 col-md-6 mt-3">
                                            <div className='p-3 rounded-3' style={{background: "var(--second-color)", borderRight: "6px solid var(--first-color)"}}>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <h5>Table: {items.table}</h5>
                                                    </div>
                                                    <div>
                                                        <h6>Breakfast</h6>
                                                    </div>
                                                </div>
                                                <h4>Booked By: {items.name}</h4>
                                                <p className='mb-0'>Time: {items.time}</p>

                                                <div className="text-end">
                                                    <button className='btn btn-dark'>Empty</button>
                                                </div>
                                            </div>
                                        </div> : <></>
                                    }
                                </>
                            )
                        })
                    }
                </div>

                <div className="row mt-2">
                    {
                        lunchReserve.map((items) => {
                            return (
                                <>
                                    {
                                        items.time >= "01:00PM" &&  items.time <= "03:30PM"? 
                                        <div className="col-lg-4 col-md-6 mt-3">
                                            <div className='p-3 rounded-3' style={{background: "var(--forth-color)", borderRight: "6px solid var(--first-color)"}}>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <h5>Table: {items.table}</h5>
                                                    </div>
                                                    <div>
                                                        <h6>Lunch</h6>
                                                    </div>
                                                </div>
                                                <h4>Booked By: {items.name}</h4>
                                                <p className='mb-0'>Time: {items.time}</p>

                                                <div className="text-end">
                                                    <button className='btn btn-dark'>Empty</button>
                                                </div>
                                            </div>
                                        </div> : <></>
                                    }
                                </>
                            )
                        })
                    }
                </div>

                <div className="row mt-2">
                    {
                        dinnerReserve.map((items) => {
                            return (
                                <>
                                    {
                                        items.time >= "07:00PM" &&  items.time <= "10:30PM"? 
                                        <div className="col-lg-4 col-md-6 mt-3">
                                            <div className='p-3 rounded-3' style={{background: "var(--black-color)", color: "var(--white-color)", borderRight: "6px solid var(--second-color)"}}>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <h5>Table: {items.table}</h5>
                                                    </div>
                                                    <div>
                                                        <p>Dinner</p>
                                                    </div>
                                                </div>
                                                <h4>Booked By: {items.name}</h4>
                                                <p className='mb-0'>Time: {items.time}</p>

                                                <div className="text-end">
                                                    <button className='btn btn-light'>Empty</button>
                                                </div>
                                            </div>
                                        </div> : <></>
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Reservation