import React from 'react'
import "../styles/history.css"
import Mainsection from '../components/main-section';

// Icon
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


const menus = [
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
]

const Delivery = () => {
    return (
        <Mainsection>
            <h3>Order History</h3>
            <hr />

            <div id='all_history' className='mt-4'>
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
                                    <table className='table history_list_table'>
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
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <hr />

            <div className='text-end mb-3'>
                <button className='btn history_btn'>Reset History</button>
            </div>
        </Mainsection>
    )
}

export default Delivery