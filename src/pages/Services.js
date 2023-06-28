import React from "react";
import { SiCocos } from "react-icons/si";
import service from "../utils/service.json"
import AOS from "aos";
import "aos/dist/aos.css";


import { useEffect } from "react";
function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      startEvent: "DOMContentLoaded",
    });
  });
  return (
    <>

      <div className="header" id="service">
        <p style={{ fontSize: 45, fontFamily: "nulshock" }}>Services </p>
        <p
          style={{
            fontSize: 15,
            fontFamily: "Inter",
            letterSpacing: 7,
            color: "#27D0FE",
          }}
        >
          HOME / SERVICES
        </p>
      </div>

      <div id="serviceMainDiv" className="centerParentDiv">
        <div className="spacer"></div>

        <div className="textService" data-aos="fade-up">
          <div className="headingService">
            <p>OUR SERVICES</p>
            <h1>TECHNOLOGIES WE WORK WITH</h1>
          </div>
          <div className="subheadingService">
            <p>
              ATHH TECH Is a place where developers can convert their designs
              into developer-friendly code for mobile and web apps. Athh Tech
              automates the application development lifecycle and generates
              readable, modular, and reusable code in real time.
            </p>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="gridConatiner" data-aos="fade-up">
          {
            service.map((item, i) => {
              return (
                <div className="mainCard" key={i}>
                  <h1>{item.heading}</h1>
                  <div className="subCard">
                    <div className="subCardTxt">
                      <p>{item.subHeading}</p>
                    </div>
                    <div className="subCardList">
                      <li>{item.list1}</li>
                      <li>{item.list2}</li>
                      <li>{item.list3}</li>
                      <li>{item.list4}</li>
                    </div>
                    <div className="subCardIcon">
                      <img className="icon" src={item.icon1} />
                      <img className="icon" src={item.icon2} />
                      <img className="icon" src={item.icon3} />
                      <img className="icon" src={item.icon4} />
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className="spacer"></div>
      </div>
    </>
  );
}

export default Services;
