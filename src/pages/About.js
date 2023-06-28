import React from 'react'
import rectangle from "../assets/images/Rectangle.png"
import rectangle2 from "../assets/images/Rectangle2.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import one from "../assets/images/one.png"
import two from "../assets/images/two.png"
import three from "../assets/images/three.png"


function About() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      startEvent: "DOMContentLoaded",
    });
  });
  return (
    <>

      <div className="header" >
        <p style={{ fontSize: 45, fontFamily: "nulshock", }}  >About Us </p >
        <p style={{ fontSize: 15, fontFamily: 'Inter', letterSpacing: 7, color: "#27D0FE" }}>HOME / ABOUT US</p>
      </div>
      <div className="spacer"></div>
      <div className="aboutConatiner">
        <div className="txtAbout" data-aos="fade-up">
          <div className="headingAbout">
            <p>WHO ARE WE</p>
            <h1>ATHH TECHNOLOGIES</h1>
          </div>
          <div className="subheadingAbout">
            <p>We maintain transparency, satisfaction level & integrity with our valuable clients by building on pillars of work ethics & continuous innovation.</p>
          </div>
        </div>
        <div className="spacer"></div>


        <div className="listOfNumbers">
          <div className="number">
            <p className='outLineNumber'>01</p>

            <div className="numberContent">
              <div className="headingNumber"><h1>Transparency</h1>
              </div>

              <div className="subHeadingNumber"><p>Our primary goal has always been to put forth constant effort and drive the growth of the client's business.</p></div>
            </div>
          </div>
          <div className="number">
            <p className='outLineNumber'>02</p>

            <div className="numberContent">
              <div className="headingNumber"><h1>Fairness</h1>
              </div>
              <div className="subHeadingNumber"><p>Regardless of how big or little the client's requirement is, we treat every job with the same importance and put our best effort forward.</p></div>
            </div>
          </div>
          <div className="number">
            <p className='outLineNumber'>03</p>

            <div className="numberContent">
              <div className="headingNumber"><h1>Focus</h1></div>
              <div className="subHeadingNumber"><p>While working on any company decision-making process, we are adamant about keeping complete openness.</p></div>
            </div>
          </div>
        </div>


        <div className="photoAbout">
          <div className="imgAbout">

          </div>
          <div className="spacer"></div>
          <div className="txtImageCardAboute" data-aos="fade-up">
            <div className="imageCard">
              <img src={rectangle} alt="" />
            </div>
            <div className="imageTxt" >
              <p id='smallTxt'>WE SPECIALIZE IN</p>
              <h1>PROJECTS THAT COMBINE</h1>
              <p id='bigTxt'>The business strategy and technology into business as well as we enable our customers to bring the correct mix of procedure, innovation, experience and imagination to each part of their Web and Mobile based tasks. </p>
              <div className="imageList">
                <ul id='listOne'>
                  <li>OBJECTIVE</li>
                  <li>STRATEGY</li>
                </ul>
                <ul id='listTwo'>
                  <li>TECHNOLOGY</li>
                  <li>ANALYTICS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="txtImageCardAboute" data-aos="fade-up">
            <div className="imageTxt">
              <p id='smallTxt'>EVERY PROJECT HAS</p>
              <h1>ITS OWN UNIQUE GOALS <br />AND VISION</h1>
              <p id='bigTxt'>Whatever your project demands, our extended network of strategists, creatives and technology specialists is always eager to pitch in. We know it helps to know good people.</p>
              <div className="imageList">
                <ul id='listOne'>
                  <li>RESEARCH</li>
                  <li>TARGETING</li>
                </ul>
                <ul id='listTwo'>
                  <li className='smallList'>DATA COLLECTION</li>
                  <li className='smallList'>PROBLEM SOLVING</li>
                </ul>
              </div>
            </div>
            <div className="imageCard">
              <img src={rectangle2} alt="" />
            </div>

          </div>
          <div className="spacer"></div>
        </div>
      </div>



    </>
  )
}

export default About