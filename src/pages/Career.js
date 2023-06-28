import React from 'react'
import CareerForm from '../component/CareerForm';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import career from "../utils/career.json"
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


function Career() {

  const [filter, setFilter] = useState(career);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      startEvent: "DOMContentLoaded",
    });
  });

  const filterProduct = (cat) => {
    const updateList = career.filter((x) => x.category === cat);

    setFilter(updateList);
  }

  return (
    <>

      <div className="header" >
        <p id="headlineOfCareer"  >BUILD A CAREER</p >
        <p style={{ fontSize: 15, fontFamily: 'Inter', letterSpacing: 7, color: "#27D0FE" }}>HOME / CAREER</p>
      </div>
      <div className="spacer"></div>
      <div className="carrerBody">
        <h1 className='headOfPage' data-aos="fade-up" >CURRENT  OPENINGS</h1>
        <div className="spacer" id='spaceMe'></div>
        <div className="dropDown">

        </div>
        <div className="typeButtons">
          <button className='active-btn' onClick={() => setFilter(career)}>All</button>
          <button className='active-btn' onClick={() => filterProduct("blockchain")}>Blockchain</button>
          <button className='active-btn' onClick={() => filterProduct("app")}>App</button>
          <button className='active-btn' onClick={() => filterProduct("game")}>Game</button>
          <button className='active-btn' onClick={() => filterProduct("backend")}>Backend</button>
          <button className='active-btn' onClick={() => filterProduct("frontend")}>Frontend</button>
          <button className='active-btn' onClick={() => filterProduct("ui/ux")}>UI/UX Design</button>
        </div>
        <div className="spacer"></div>


        <div className="opningCard" data-aos="fade-up">

          <div className="careerRow">
            {
              filter.map((elem, i) => {
                return (
                  <div className="careerCard" key={i}>
                    <div className="cardDetails">
                      <div className="opningHeading"><h1>{elem.title}<span id='subOfCareer'>{elem.subtitle}</span></h1></div>
                      <div className="logo"><img className="techIcon" src={elem.icon} alt="tech icon" /></div>
                    </div>
                    <hr id='lineForCard' />
                    <div className="spacCard">
                      <div className="spacDetails">
                        <p id='qualites'>{elem.qualities}</p>
                        <h3 className='field'><span className='question'>Employement type : </span><span className='answer'>{elem.type}</span></h3>
                        <h3 className='field'><span className='question'>Openings : </span><span className='answer'>{elem.opnings}</span></h3>
                        <h3 className='field'><span className='question'>Location : </span><span className='answer'>{elem.location}</span></h3>
                        <h3 className='field'><span className='question'>Experience : </span><span className='answer'>{elem.experiance}</span></h3>
                        <h3 className='field'><span className='question'>Base Salary : </span><span className='answer'>{elem.salary}</span></h3>
                        <div className="specButton">
                          <Link to='#careerForm' smooth>
                            <button>Apply Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>


        </div>
      </div>
      <div className="spacer"></div>
      <CareerForm />
      <div className="spacer"></div>
    </>
  )
}

export default Career