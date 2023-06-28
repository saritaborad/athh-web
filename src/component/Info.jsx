import React from 'react'
import book from "../assets/images/book.png"

import { FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";


import AOS from "aos";
import "aos/dist/aos.css";

import india from "../assets/images/india.png"
import canada from "../assets/images/canada.png"

import { useEffect } from "react"
function Info() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            startEvent: "DOMContentLoaded",
        });
    });
    return (<>

        <div className='mainContainer'>
            <div className="heading" data-aos="fade-up">
                <div className="text">
                    <p style={{ color: "#27D0FE", letterSpacing: 7, fontSize: 18, }}>GET IN TOUCH</p>
                    <h1>WAY TO CONTACT US</h1>
                </div>
                {/* <div style={{ marginRight: 85 }} >
                    <button className="btn">CALL US <span style={{ marginLeft: 20 }}><HiArrowNarrowRight size={20} /></span></button>
                </div> */}

            </div>

            <div className="information" data-aos="fade-up">
                <p><span style={{ color: "#29B3F1" }}>ATHH TECH PERFORMS ADVANCED SOFTWARE  DEVELOPMENT COMPANY,</span> AS WELL AS WORK WITH FFRDC'S AND RESEARCH CONTRACTS.</p>
            </div>

            <div className="img--add">
                <div className="img">

                    <img src={book} className="img--book" alt="contact-book" />
                </div>
                <div className="add" data-aos="fade-up">
                    <h1 className='add-title'>ATHH TECHNOLOGY LLP</h1>
                    <p className='add-subtitle'>SOFTWARE COMPANY</p>
                    <div className="main--Info">
                        <div className="address--email">

                            <div className="india">
                                <h1 className='aE-heading'> <img src={india} alt="india" className="countryFlags" /> India<span> (HQ)</span></h1>
                                <p className='addressInfo'>436, Mahek Icon,
                                    Sumul Dairy Rd,
                                    Katargam,
                                    Surat,
                                    Gujarat, IN- 395003</p>
                            </div>

                            <div className="canada">
                                <h1 className='aE-heading'><img src={canada} className="countryFlags" alt="canada" />Canada</h1>
                                <p className='addressInfo'>1422 Rupert St, Regina, SK S4N 1V8, Canada</p>
                            </div>

                        </div>

                        <div className="social">
                            <div className="email">
                                <h1 className='aE-heading'>EMAIL</h1>
                                <a href="mailto:info@athh.co"><p className='aE-subHeading'><span style={{ marginRight: 10 }}><FaEnvelope size={20} /></span>info@athh.co</p></a>
                                <a href="mailto:hr@athh.co"><p className='aE-subHeading'> <span style={{ marginRight: 10 }}><FaEnvelope size={20} /></span>hr@athh.co</p></a>
                            </div>


                            <div className="contact">
                                <h1 className='aE-heading'>SOCIAL CONTACT</h1>
                                <div className="icons">
                                    <div className='circle'>
                                        <a href="https://twitter.com/Athh_Tech" target="_blanck">
                                            <FaTwitter className='social-icon' />
                                        </a>
                                    </div>

                                    <div className='circle'>
                                        <a href="https://www.instagram.com/athh_tech/?igshid=YmMyMTA2M2Y%3D" target="_blanck">
                                            <FaInstagram className='social-icon' />
                                        </a>
                                    </div>

                                    <div className='circle'>
                                        <a href="https://in.linkedin.com/company/athh-technologies-llp" target="_blanck">
                                            <FaLinkedin className='social-icon' />
                                        </a>
                                    </div>

                                    <div className='circle'>
                                        <a href="mailto:info@athh.co">
                                            <FaEnvelope className='social-icon' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Info