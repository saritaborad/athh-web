import React from 'react'
import Form from '../component/Form.jsx'
import Info from '../component/Info'
import MapContainer from '../component/MapContainer'
import "../component/style/main.css"
function Contact() {
    return (
        <>
            <div className='main-container'>

                <div className="subContainer">
                    <div className="main">
                        <div className="header">
                            <p style={{ fontSize: 45, fontFamily: "nulshock", }}  >CONTACT </p >
                            <p style={{ fontSize: 15, fontFamily: 'Inter', letterSpacing: 7, color: "#27D0FE" }}>HOME / CONTACT</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="info">
                            <Info />
                            <Form />
                            <MapContainer />


                        </div>
                    </div>
                </div>
            </div>

            <div className='spacer'></div>

        </>


    )
}

export default Contact