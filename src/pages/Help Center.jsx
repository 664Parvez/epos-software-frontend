import React from 'react'
import {NavLink as Link} from "react-router-dom"
import "../styles/help.css"

const HelpCenter = () => {
    return (
        <div id="main_section">
            <h3>Help Center</h3>
            <hr />

            <div className="help_first_section">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <h1>Need help ? Your are in the right place</h1>
                        <p className='mb-0'>Pick from the categories to find advice and answers from the Software team.</p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className='first_help_two_container'>
                                    <h4>Get Support</h4>
                                    <p className='mb-0'>Get support? Contact with our team support.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className='first_help_two_container'>
                                    <h4>Contact Sales</h4>
                                    <p className='mb-0'>For hight volume inquiries, talk to our sales team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="help_search mt-5">
                <div className="row">
                    <div className="col-lg-3 col-md-3"></div>
                    <div className="col-lg-6 col-md-6">
                        <label htmlFor="">Search the help center category</label>
                        <input type="text" className='form-control' placeholder='Search here . . .' />
                    </div>
                    <div className="col-lg-3 col-md-3"></div>
                </div>
            </div>

            <div className="help_second_section mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='text-center features_box'>
                            <h4>Feature Title</h4>
                            <p>Feature description past here. with topic description only</p>
                            <Link to="" className="btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='text-center features_box'>
                            <h4>Feature Title</h4>
                            <p>Feature description past here. with topic description only</p>
                            <Link to="" className="btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='text-center features_box'>
                            <h4>Feature Title</h4>
                            <p>Feature description past here. with topic description only</p>
                            <Link to="" className="btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='text-center features_box'>
                            <h4>Feature Title</h4>
                            <p>Feature description past here. with topic description only</p>
                            <Link to="" className="btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='text-center features_box'>
                            <h4>Feature Title</h4>
                            <p>Feature description past here. with topic description only</p>
                            <Link to="" className="btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='text-center features_box'>
                            <h4>Feature Title</h4>
                            <p>Feature description past here. with topic description only</p>
                            <Link to="" className="btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='text-center features_box'>
                            <h4>Feature Title</h4>
                            <p>Feature description past here. with topic description only</p>
                            <Link to="" className="btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='text-center features_box'>
                            <h4>Feature Title</h4>
                            <p>Feature description past here. with topic description only</p>
                            <Link to="" className="btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='text-center features_box'>
                            <h4>Feature Title</h4>
                            <p>Feature description past here. with topic description only</p>
                            <Link to="" className="btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="help_third_section mt-5">
                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>
                    <div className="col-lg-8 col-md-8">
                    <h4 className='mb-4'>Simple questions</h4>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default HelpCenter