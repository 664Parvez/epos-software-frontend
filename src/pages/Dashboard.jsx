import React from 'react'
import "../styles/dashboard.css"
import Mainsection from "../components/main-section"

// Chart and Graph
import {Chart as ChartJS} from "chart.js/auto"
import { Bar, Line, Chart, Doughnut } from "react-chartjs-2"

// Icons
import { FaCircleDollarToSlot, FaNewspaper, FaUsers } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";

const Dashboard = () => {
    return (
        <>
            <Mainsection>
                <h3>Dashboard</h3>
                <hr />

                <div className='row'>
                    <div className="col-lg-3 col-md-6">
                        <div className='dashboard_first_list mt-3'>
                            <FaCircleDollarToSlot className='dashboard_first_icon' />
                            <p>Total Revenue</p>
                            <h4 className="mb-0">$6000.74</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='dashboard_first_list mt-3'>
                            <FaNewspaper className='dashboard_first_icon' />
                            <p>Total Orders</p>
                            <h4 className="mb-0">198</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='dashboard_first_list mt-3'>
                            <FaUsers className='dashboard_first_icon' />
                            <p>Total Customers</p>
                            <h4 className="mb-0">5874</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='dashboard_first_list mt-3'>
                            <IoBagCheckOutline className='dashboard_first_icon' />
                            <p>Total Dishes</p>
                            <h4 className="mb-0">4027</h4>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="row" id='dashboard_data_first_row'>
                        <div className="col-lg-7 col-md-6 dashboard_data_first_col mt-3">
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
                        <div className="col-lg-5 col-md-6 dashboard_data_first_col mt-3">
                            <div className="today_sale dashboard_second">
                                <h5 className='mb-5'>Payment Summary</h5>
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

                <div className="mt-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mt-3">
                            <div className='dashboard_third'>
                                <h5 className='mb-5'>Tranding Dishes</h5>
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
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Vegetable Salad</td>
                                                <td>$27</td>
                                                <td>1000</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Vegetable Salad</td>
                                                <td>$27</td>
                                                <td>1000</td>
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
                        <div className="col-lg-6 col-md-6 mt-3">
                            <div className='dashboard_third'>
                                <h5 className='mb-5'>Revenue Summary</h5>
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

                <div className="mt-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="staff_activ">
                                <h5 className='mb-3'>Staff Activity</h5>
                                <div className="text-end mb-5">
                                    <div className="row">
                                        <div className="col-lg-8"></div>
                                        <div className="col-lg-4">
                                            <input type="date" name="" className='form-control form-control-lg' id="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='fifth_table_div table-responsive'>    
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Stuff Name</th>
                                                <th scope="col">Month</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Order Completed</th>
                                                <th scope="col">Present Percentage</th>
                                                <th scope="col">Stuff Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Alex Doe</td>
                                                <td>April</td>
                                                <td>Shafe</td>
                                                <td>110 Task</td>
                                                <td>68%</td>
                                                <td>Good</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Beluran Kabir</td>
                                                <td>April</td>
                                                <td>Waiter</td>
                                                <td>80 Task</td>
                                                <td>75%</td>
                                                <td>Excellent</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Alex Doe</td>
                                                <td>April</td>
                                                <td>Shafe</td>
                                                <td>110 Task</td>
                                                <td>68%</td>
                                                <td>Good</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Alex Doe</td>
                                                <td>April</td>
                                                <td>Shafe</td>
                                                <td>110 Task</td>
                                                <td>68%</td>
                                                <td>Good</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Alex Doe</td>
                                                <td>April</td>
                                                <td>Shafe</td>
                                                <td>110 Task</td>
                                                <td>68%</td>
                                                <td>Good</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Alex Doe</td>
                                                <td>April</td>
                                                <td>Shafe</td>
                                                <td>110 Task</td>
                                                <td>68%</td>
                                                <td>Good</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>Alex Doe</td>
                                                <td>April</td>
                                                <td>Shafe</td>
                                                <td>110 Task</td>
                                                <td>68%</td>
                                                <td>Good</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Mainsection>
        </>
    )
}

export default Dashboard