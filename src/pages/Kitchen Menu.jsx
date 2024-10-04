import React from 'react'
import "../styles/kitchen.css"

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

const KitchenMenu = () => {
    return (
        <>
            <div id="main_section">
                <h3>Kitchen Menu</h3>
                <hr />

                <div id='all_kitchen' className='mt-4'>
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
                                    <div className='text-end'>
                                        <button className='btn'>Completed</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header py-2">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Menu Edit</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer py-1">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default KitchenMenu
