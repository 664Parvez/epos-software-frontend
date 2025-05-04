import React from 'react'
import Mainsection from '../components/main-section'

import "../styles/reservation-form.css"

const TableReservationForm = () => {
  return (
    <>
        <Mainsection>
            <h3>Reservation Form</h3>
            <div className="reservation_form">
                <div className="mt-2">
                    <form action="">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mt-4">
                                <label htmlFor="">Name</label>
                                <input type="text" className='form-control form-control-lg' placeholder='Enter Name' required />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-4">
                                <label htmlFor="">Phone Number</label>
                                <input type="tel" className='form-control form-control-lg' placeholder='Enter Number' required />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-4">
                                <label htmlFor="">Email (Optional)</label>
                                <input type="email" className='form-control form-control-lg' placeholder='Enter Email' />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-4">
                                <label htmlFor="">Booking Time</label>
                                <input type="time" className='form-control form-control-lg' />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-4">
                                <label htmlFor="">Number of Members</label>
                                <select name="" id="" className='form-select form-select-lg'>
                                    <option value="">-- Select Your Members Number --</option>
                                    <option value="">1 Members</option>
                                    <option value="">2 Members</option>
                                    <option value="">4 Members</option>
                                    <option value="">6 Members</option>
                                    <option value="">8 Members</option>
                                </select>
                            </div>
                            <div className="col-lg-12 col-md-12 mt-4">
                                <label htmlFor="">Table Booking For What ?</label>
                                <select name="" id="" className='form-select form-select-lg'>
                                    <option value="">-- Select Your table Booking Reason --</option>
                                    <option value="">For Breakfast</option>
                                    <option value="">For Lunch</option>
                                    <option value="">For Dinner</option>
                                    <option value="">For Any Event</option>
                                </select>
                            </div>
                            <div className="col-lg-12 col-md-12 mt-4">
                                <label htmlFor="">Table Booking For What ?</label>
                                <textarea name="" placeholder='Enter Address' className='form-control form-control-lg' rows="4" id=""></textarea>
                            </div>

                            <div className="col-lg-12 mt-5">
                                <button className='btn btn-lg' type='submit'>Book A Table</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Mainsection>
    </>
  )
}

export default TableReservationForm