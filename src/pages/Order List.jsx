import React from 'react'
import "../styles/orderlist.css"

// Icon
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


const menus = [
    {
        id: 345,
        table: 1,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
            {
                "qt": 3,
                "food": "Green Salad",
                "price": 14.65
            }
        ]
    },
    {
        id: 355,
        table: 2,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 455,
        table: 3,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 455,
        table: 3,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 358,
        table: 4,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 895,
        table: 5,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 885,
        table: 5,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 885,
        table: 5,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 885,
        table: 5,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 885,
        table: 5,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 885,
        table: 5,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
        ]
    },
    {
        id: 185,
        table: 5,
        menu: [
            {
                "qt": 1,
                "food": "Chicken Tikka",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Fried Rice",
                "price": 14.34
            },
            {
                "qt": 1,
                "food": "Biriany",
                "price": 16.34
            },
            {
                "qt": 1,
                "food": "Soup",
                "price": 10.34
            },
        ]
    },
]

const Order = () => {

    return (
        <div id="main_section">
            <h3>Order List</h3>
            <hr />

            <div id='all_menus' className='mt-4'>
                {
                    menus.map((items) => {
                        return (
                            <div className="menu">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h4 className='mb-0'>Table {items.table}</h4>
                                    </div>
                                    <div>
                                        <p className='mb-0'>#{items.id}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='table-responsive'>
                                    <table className='table order_list_table'>
                                        <thead>
                                            <tr>
                                                <th>QT</th>
                                                <th>Items</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                items.menu.map((items) => {
                                                    return (
                                                        <tr>
                                                            <td>{items.qt}</td>
                                                            <td>{items.food}</td>
                                                            <td>${items.price}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <button className='btn btn-light'><MdDelete className='delete_icon' /></button>
                                        </div>
                                        <div>
                                            <button className='btn btn-light'><CiEdit className='edit_icon' /></button>
                                        </div>
                                        <div>
                                            <button className='btn btn-light'>Payment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Order