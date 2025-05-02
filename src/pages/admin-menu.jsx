import React, {useState} from 'react'
import {NavLink as Link} from "react-router-dom"
import Mainsection from "../components/main-section"

import { FaArrowRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

import "../styles/menu.css"


// image
import Bigburger from "../../public/image/menu/big-burger.webp"
import Pizza from "../../public/image/menu/pizza.png"
import Pasta from "../../public/image/menu/pasta.webp"
import Soup from "../../public/image/menu/soup.png"


const orderingRunning = [
    {
        "id": "#466",
        "progress": "Preparing",
        "table": "E",
        "items": 8
    },
    {
        "id": "#273",
        "progress": "Completed",
        "table": "A",
        "items": 10
    },
    {
        "id": "#720",
        "progress": "Preparing",
        "table": "C",
        "items": 4
    },
    {
        "id": "#942",
        "progress": "Preparing",
        "table": "D",
        "items": 2
    },
    {
        "id": "#374",
        "progress": "Completed",
        "table": "B",
        "items": 7
    },
    {
        "id": "#575",
        "progress": "Completed",
        "table": "F",
        "items": 7
    },
    {
        "id": "#979",
        "progress": "Preparing",
        "table": "G",
        "items": 7
    },
]


const menuCategories = [
    {
        "name": "Breakfast",
        "items": 13,
        "link": ""
    },
    {
        "name": "Soup",
        "items": 9,
        "link": ""
    },
    {
        "name": "Pasta",
        "items": 8,
        "link": ""
    },
    {
        "name": "Sushi",
        "items": 14,
        "link": ""
    },
    {
        "name": "Main",
        "items": 20,
        "link": ""
    },
    {
        "name": "Deserts",
        "items": 10,
        "link": ""
    },
    {
        "name": "Pizza",
        "items": 10,
        "link": ""
    },
    {
        "name": "Burger",
        "items": 10,
        "link": ""
    },

]

const manus = [
    {
        "id": 1532,
        "img": Bigburger,
        "category": "burger",
        "name": "Big Burger",
        "price": 12.54
    },
    {
        "id": 1482,
        "img": Pizza,
        "category": "pizza",
        "name": "8' Pizza",
        "price": 10.99
    },
    {
        "id": 1170,
        "img": Soup,
        "category": "soup",
        "name": "Soup",
        "price": 15.74
    },
    {
        "id": 1904,
        "img": Pasta,
        "category": "pasta",
        "name": "Pasta",
        "price": 17.78
    },
    {
        "id": 1170,
        "img": Soup,
        "category": "soup",
        "name": "Soup",
        "price": 15.74
    },
    {
        "id": 1904,
        "img": Pasta,
        "category": "pasta",
        "name": "Pasta",
        "price": 17.78
    },
    {
        "id": 1482,
        "img": Pizza,
        "category": "pizza",
        "name": "16' Pizza",
        "price": 10.99
    },
    {
        "id": 1532,
        "img": Bigburger,
        "category": "burger",
        "name": "Big Burger",
        "price": 12.54
    },
]

const Menu = () => {

    const [count, setCount] = useState(0)

    return (
        <Mainsection>
            <h3>Menu</h3>
            <hr />

            <div id="order_running">
                <h5>Order Running</h5>

                <Swiper
                    slidesPerView="auto"
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 2.2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3.3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5.5,
                            spaceBetween: 10,
                        },
                    }}
                    speed={5000}
                    grabCursor={true}
                    modules={[Autoplay]}
                    className="categorySwiper"
                >
                    {
                        orderingRunning.map((items, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="order_running_div">
                                        <Link to={`/food/${items.id}`}>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <div className='table_number'>
                                                        <h4 className='mb-0'>{items.table}</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className='mb-0'>{items.id}</h5>
                                                    <p className='mb-0'>Items: {items.items}</p>
                                                </div>
                                            </div>
                                            <div className="text-center mt-2">
                                                <small
                                                    style={
                                                        items.progress === "Completed" ? {background: "var(--first-color)"} : {background: "var(--forth-color)", color: "var(--black-color)"}
                                                    }
                                                >{items.progress}</small>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                
                </Swiper>
            </div>

            <div id="menu_categoties">

                <h5>Menu Categories</h5>
                
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 2.2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3.3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5.5,
                            spaceBetween: 10,
                        },
                    }}
                    speed={5000}
                    grabCursor={true}
                    modules={[Autoplay]}
                    className="categorySwiper"
                >

                    {
                        menuCategories.map((items, index) => {
                            return (


                                <SwiperSlide key={index}>
                                    {
                                        index%2 == 0 ? 
                                            <div className="category_div" style={{background: "var(--forth-color)"}}>
                                                <Link to={`/food/${items.name}`}>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <h6 className='mb-0'>{items.name}</h6>
                                                        <small className='mb-0'>Items: {items.items}</small>
                                                    </div>
                                                </Link>
                                            </div>
                                            
                                            : 

                                            <div className="category_div" style={{background: "var(--second-color)"}}>
                                                <Link to={`/food/${items.name}`}>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h6 className='mb-0'>{items.name}</h6>
                                                    <p className='mb-0'>Items: {items.items}</p>
                                                </div>
                                                </Link>
                                            </div>
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                
                </Swiper>
            </div>

            <div id="menus" className='mt-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h5>Discover Our Menus</h5>
                    </div>
                    <div>
                        <input type="text" class="form-control" placeholder='Search Food' />
                    </div>
                </div>

                <div className="row">
                    {
                        manus.map((items) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm mt-3" key={items.id}>
                                        <div className='our_menus_div'>
                                            <img src={items.img} alt="" />
                                            <h5>{items.name}</h5>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p className='mb-0'>${items.price}</p>
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li><button className='btn minus_btn' onClick={() => {
                                                            if (count <= 0) {
                                                                setCount(0)
                                                            } else {
                                                                setCount(count - 1)
                                                            }
                                                        }}>-</button></li>
                                                        <li><p className='px-2 mb-0'>{count}</p></li>
                                                        <li><button className='btn plus_btn' onClick={() => {
                                                            setCount(count + 1)
                                                        }}>+</button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                                <div className="text-center">
                                                    <a href=""></a>
                                                </div>
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Mainsection>
    )
}

export default Menu