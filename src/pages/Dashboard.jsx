import React from 'react'
import "../styles/dashboard.css"

// Chart and Graph
import {Chart as ChartJS} from "chart.js/auto"
import { Bar, Line, Chart, Doughnut } from "react-chartjs-2"

// Icons
import { FaCircleDollarToSlot, FaNewspaper, FaHandHoldingDollar } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";

const Dashboard = () => {
    return (
        <>
            <div id="main_section">
                <h3>Dashboard</h3>
                <hr />

                <div className='row'>
                    <div className="col-lg-3 col-md-6">
                        <div className='dashboard_first_list mt-3'>
                            <FaCircleDollarToSlot className='dashboard_first_icon' />
                            <p>Revenue</p>
                            <h4 className="mb-0">$6000.74</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='dashboard_first_list mt-3'>
                            <FaNewspaper className='dashboard_first_icon' />
                            <p>Paid Orders</p>
                            <h4 className="mb-0">198</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='dashboard_first_list mt-3'>
                            <FaHandHoldingDollar className='dashboard_first_icon' />
                            <p>Tip Amount</p>
                            <h4 className="mb-0">$325.65</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='dashboard_first_list mt-3'>
                            <IoBagCheckOutline className='dashboard_first_icon' />
                            <p>Dishes Sold</p>
                            <h4 className="mb-0">227</h4>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <div className='seles_overview dashboard_second'>
                                <h5>Sales Overview</h5>
                                <Bar 
                                    data={{
                                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                        datasets: [
                                            {
                                                label: "Revenue",
                                                data: [200, 350, 100, 150, 200, 250, 200, 350, 180, 350, 600, 550],
                                                backgroundColor: [
                                                '#0043fa'
                                                ],
                                            },
                                            {
                                                label: "Loss",
                                                data: [ 100, 230, 80, 140 ],
                                                backgroundColor: [
                                                    '#ffb236'
                                                ],
                                            }
                                        ],
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="today_sale dashboard_second">
                                <h5>Today Sales</h5>
                                <Doughnut 
                                    data={{
                                        labels: ["Food", "Drinks", "Others"],
                                        datasets: [
                                            {
                                                data: [50, 30, 20],
                                                backgroundColor: [
                                                '#0043fa',
                                                '#ff7a7e',
                                                '#ffb236'
                                                ],
                                            }
                                        ]
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className='dashboard_third'>
                                <h5>Tranding Dishes</h5>
                                <div className='third_table_div table-responsive'>    
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Menu</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Sold Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Cheese Burger</td>
                                                <td>$15</td>
                                                <td>2340</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Pasta Bolognese</td>
                                                <td>$30</td>
                                                <td>2010</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Spicy Chicken</td>
                                                <td>$25</td>
                                                <td>1600</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Latte</td>
                                                <td>$27</td>
                                                <td>1400</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Chicken Soup</td>
                                                <td>$27</td>
                                                <td>1100</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Vegetable Salad</td>
                                                <td>$27</td>
                                                <td>1000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className='dashboard_third'>
                                <h5>Total Orders</h5>
                                <Line
                                    data={{
                                        labels: ["8:00am", "9:00am", "10:00am", "12:00pm"],
                                        datasets: [
                                            {   
                                                label:"Food Orders",
                                                data: [10, 15, 12, 20],
                                                backgroundColor: [
                                                    "#0043fa"
                                                ],
                                                borderColor: [
                                                    "#ff7a7e"
                                                ]
                                            }
                                        ]
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard