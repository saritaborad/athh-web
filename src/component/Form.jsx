import React from 'react'
import { useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import axios from 'axios';



function Form() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            startEvent: "DOMContentLoaded",
        });
    });
    const [inputs, setInputs] = useState({})





    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        axios
            .post("https://athh.tech/demo.php",
                {
                    name: inputs.name,
                    email: inputs.email,
                    msg: inputs.msg,
                    send_new: "",
                }
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }








    return (
        <div className='formContainer' data-aos="fade-up">
            <div className="subContainer">
                <p className="formHeading" data-aos="fade-up" >SHARE YOUR DETAILS TO <br />HELP US SERVE YOU BETTER</p>
                <form onSubmit={handleSubmit} >
                    <div className="form" data-aos="fade-up">
                        <div className="name">
                            <input autoComplete="off" className="input--name" name="name"
                                value={inputs.name || ""}
                                onChange={handleChange} type="text" placeholder='First Name' required />

                            <input autoComplete="off" className="input--name" type="text" placeholder='Last Name' required />
                        </div>
                        <div className="mail-submit">
                            <input autoComplete="off" className="input--mailSubmit" name="email"
                                value={inputs.email || ""}
                                onChange={handleChange} type="email" placeholder='Email Address' required />
                            <input autoComplete="off" className="input--mailSubmit--msg" name="msg"
                                value={inputs.msg || ""}
                                onChange={handleChange} type="text" placeholder='Message' required />
                        </div>

                        <button className="submit-btn" name='send_new'
                            type='submit' style={{ marginTop: 35 }}>SUBMIT</button>
                    </div>
                </form>
            </div >
        </div >


    )
}

export default Form