import React from "react";
import ourwork from "../utils/ourwork.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function OurWork() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      startEvent: "DOMContentLoaded",
    });
  });



  return (
    <>
      <div className="header">
        <p id="ourWork">OUR WORK </p>
        <p id="hork">HOME / OUR WORK</p>
      </div>
      {/* <div className="spacer"></div> */}
      <div className="portFolioContainer" data-aos="fade-up">
        <div className="portFolioHeading">
          <h1>PORTFOLIO</h1>
        </div>
        <div className="portFolioSubheading">
          <p>
            ATHH TECH is a programming platform where developers can convert
            their designs into developer-friendly code for Mobile and web apps.
          </p>
        </div>
        <div className="portfolioCards">
          {ourwork.map((item, i) => {
            return (
              <div className="portCard" data-aos="fade-up" key={i} >
                <div className="contantOfCard">
                  <div className="imgOfCard" data-aos="fade-up">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="dataOfCard">
                    <div className="iconOfData">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="textOfData">
                      <div className="headingOfData">
                        <p>{item.heading}</p>
                      </div>
                      <div className="subHeadingOfData">
                        <p>{item.subheading}</p>
                      </div>
                    </div>
                  </div>
                  <div className="btnOfCard">
                    <a href={item.link} target="_blanck">
                      <button>App Detail</button>{" "}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
}

export default OurWork;
