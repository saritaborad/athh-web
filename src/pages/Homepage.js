import React from "react";
import Techbox from "../component/Techbox";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bluedot from "../assets/images/bluedot.svg";
import landingimg from "../assets/images/landingimg.svg";
import android from "../assets/images/android.svg";
import game from "../assets/images/game.svg";
import blockchain from "../assets/images/blockchain_icon.svg";
import ui from "../assets/images/ui_icon.svg";
import eye from "../assets/images/eye.svg";
import bulb from "../assets/images/bulb.svg";
import value from "../assets/images/value.svg";
import bigline from "../assets/images/bigline.svg";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client7.png";
import client7 from "../assets/images/client8.png"
import portfolioText from "../assets/images/portfolioText.svg";
import pof1 from "../assets/images/pof1.png";
import pof2 from "../assets/images/pof2.png";
import pof3 from "../assets/images/pof3.png";
import pof4 from "../assets/images/pof4.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import ReviewBox from "../component/ReviewBox";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      startEvent: "DOMContentLoaded",
    });
  });

  const [msg, setMsg] = useState("");
  const [techbox, setTech] = useState('app')
  const [reviewbox, setReview] = useState('VickySingh')
  const [counterOn, setCounterOn] = useState(false);




  return (
    <>
      <div className="centerParentDiv" id="landingDiv">
        <div id="LandingText" data-aos="fade-up">
          <div id="landingTop">
            <p>SOFTWARE</p>
            <div id="smallLine"></div>
            <img src={bluedot} alt={bluedot}></img>
          </div>

          <div id="landingBigText">
            <span> DEVELOPMENT</span>
            <p>COMPANY</p>
          </div>

          <p id="landingDescription">
            We Build Innovative Mobile Application, Websites and Blockchain Solutions
          </p>

          <div>
            <Link to='/services'>
              <button className="borderBtn">
                Explore Now &nbsp; <HiArrowNarrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>

        <div id="LandingImage">
          <img className="phoneFromHome" src={landingimg} alt={landingimg} />
        </div>
      </div>
      {/* <a href="https://www.google.com/partners/agency?id=8119382804" target="_blank" style={{ marginLeft: "50%" }}>
        <img src="https://www.gstatic.com/partners/badge/images/2022/PartnerBadgeClickable.svg" />
      </a> */}

      {/*--------------------------------------------------------------------*/}
      <div className="spacer"></div>
      <img src='../image/sideillusion.png' alt="sideillusion" id="sideillusion" />
      <div id="about_athh_div" className="centerParentDiv" data-aos="fade-up">
        <h5 className="titlequestion">WHO WE ARE</h5>
        <br></br>
        <p className="titleText">Athh Technologies</p>

        <p id="abouttexts">
          Athh technologies design and develop mobile apps, WebApps, Blockchain Solutions and that delight your users and grow your business. Enterprise-grade development combined with outstanding design, We are not only a globally recognized IT company but also a family filled with talented Expert that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.
        </p>
        <br />
        <br />
        <div id="linkRead">
          <Link to='/about' ><button className="readMore">Read more&nbsp; <HiArrowNarrowRight size={20} /></button></Link>
        </div>
      </div>

      {/*--------------------------------------------------------------------*/}
      <div className="spacer"></div>

      <div id="techboxGrandParent">
        <img src='../image/pipe.png' alt="pipe" id="pipeimg" />
        <div id="technologiesDiv" className="centerParentDiv" data-aos="fade-up">
          <div id="technologogyTopDiv">
            <div>
              <h5 className="titlequestion">technologies</h5>
              <br></br>
              <p className="titleText">we works with</p>
            </div>
            <div>

              <Link to='/services'>
                <button className="borderBtn">
                  Learn More &nbsp; <HiArrowNarrowRight size={20} />
                </button>
              </Link>

            </div>
          </div>

          <div id="techBoxDiv">
            <div id="techboxTop" >
              <div onClick={() => setTech('app')} className={`${techbox === 'app' && 'techborder'}`}>
                <img src={android} alt={android} />
                <p> App Development</p>
              </div>
              <div onClick={() => setTech('blockchain')} className={`${techbox === 'blockchain' && 'techborder'}`}>
                {" "}
                <img src={blockchain} alt={blockchain} />
                <p>Blockchain </p>
              </div>
              <div onClick={() => setTech('game')} className={`${techbox === 'game' && 'techborder'}`}>
                {" "}
                <img src={game} alt={game} />
                <p>Game Development</p>
              </div>
              <div onClick={() => setTech('ui')} className={`${techbox === 'ui' && 'techborder'}`}>
                {" "}
                <img src={ui} alt={ui} />
                <p>UI / UX Design</p>
              </div>



            </div>
            <Techbox tech={techbox} />

          </div>
        </div>
      </div>

      {/*--------------------------------------------------------------------*/}
      <div className="spacer"></div>

      <div className="centerParentDiv" id="portfolio_div" data-aos="fade-up">
        <div id="portfoliFirstCol" className="portfoliodivs">
          <div className="portfolio_card">
            <img src={pof1} alt={pof1}  ></img>
          </div>
          <div className="portfolio_card">
            <img src={pof2} alt={pof2} ></img>
          </div>
          <div id="viewportfolioDiv">

            <p id="insideDiv">
              <Link to='/ourwork'>
                View portfolio <HiArrowNarrowRight id="arrowPort" size={40} />
              </Link>
            </p>&nbsp;&nbsp;


          </div>
        </div>


        <div id="portfolisecondCol" className="portfoliodivs">
          <div id="portfolioTitleDiv">
            <h5 className="titlequestion">HOW we WORK</h5>
            <br></br>

            <p className="titleText">Portfolio</p>
          </div>

          <div className="portfolio_card">
            <img src={pof3} alt={pof3} ></img>
          </div>
          <div className="portfolio_card">
            <img src={pof4} alt={pof4} ></img>
          </div>
        </div>



        <div id="portfolilastCol" className="portfoliodivs">
          <img src={portfolioText} alt={portfolioText} height={'80%'} width={'70%'} />
        </div>
      </div>

      {/*--------------------------------------------------------------------*/}
      <div className="spacer"></div>
      <div className="centerParentDiv" id="reviewNumDiv" data-aos="fade-up">
        <div id="reviewNumInner">
          <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <p id="ratingReview">
                {counterOn && <CountUp style={{ fontWeight: 700 }} start={0} end={90} duration={2} delay={0} />}M+
              </p>
            </ScrollTrigger>
            <p className="reviewGrayText">Downloads</p>
          </div>
          <div id='firstReviewCountDiv'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <p id="happyClients">
                {counterOn && <CountUp style={{ fontWeight: 700 }} start={0} end={2} duration={2} delay={0} />}M+
              </p>
            </ScrollTrigger>
            <p className="reviewGrayText">Ratings</p>
          </div>

          <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <p id="projectComplated">
                {counterOn && <CountUp style={{ fontWeight: 700 }} start={0} end={80} duration={2} delay={0} />}+
              </p>
            </ScrollTrigger>
            <p className="reviewGrayText">Projects Completed</p>
          </div>
        </div>
      </div>






      {/* -------------------------------------------------------------------- */}
      <div className="spacer"></div>

      <div className="centerParentDiv" id="customerReviewDiv" data-aos="fade-up">
        <div id="customerReviewTopDiv">
          <h5 className="titlequestion">customer</h5>
          <br></br>
          <p className="titleText">review</p>
        </div>

        <div id="customerReviewMain">
          <div className="reviewSideImgDiv">
            <div className="imgright">
              <img src={client1} alt="client" onClick={() => setReview('AhanaKhurana')} id="clientRoundImg" className={`${reviewbox === 'AhanaKhurana' && 'techborder'}`} />
            </div>
            <div className="imgleft">
              <img src={client2} alt="client" onClick={() => setReview('RajPathak')} id="clientRoundImg" className={`${reviewbox === 'RajPathak' && 'techborder'}`} />
            </div>
            <div className="imgright">
              <img src={client3} alt="client" onClick={() => setReview('VickySingh')} id="clientRoundImg" className={`${reviewbox === 'VickySingh' && 'techborder'}`} />
            </div>
          </div>




          <div className="reviewCenterDiv">
            <ReviewBox review={reviewbox} />
            <div className="dummyCrousal">
              <img src={client1} alt="client" onClick={() => setReview('AhanaKhurana')} id="dummyClientPhoto" className={`${reviewbox === 'AhanaKhurana' && 'techborder'}`} />
              <img src={client2} alt="client" onClick={() => setReview('RajPathak')} id="dummyClientPhoto" className={`${reviewbox === 'RajPathak' && 'techborder'}`} />
              <img src={client3} alt="client" onClick={() => setReview('VickySingh')} id="dummyClientPhoto" className={`${reviewbox === 'VickySingh' && 'techborder'}`} />
              <img src={client4} alt="client" onClick={() => setReview('RominSabastian')} id="dummyClientPhoto" className={`${reviewbox === 'RominSabastian' && 'techborder'}`} />
              <img src={client5} alt="client" onClick={() => setReview('Aashvi')} id="dummyClientPhoto" className={`${reviewbox === 'Aashvi' && 'techborder'}`} />
              <img src={client7} alt="client" onClick={() => setReview('TuckerLaraya')} id="dummyClientPhoto" className={`${reviewbox === 'TuckerLaraya' && 'techborder'}`} />
            </div>

          </div>


          <div className="reviewSideImgDiv">
            <div className="imgleft">
              <img src={client4} alt="client" onClick={() => setReview('RominSabastian')} id="clientRoundImg" className={`${reviewbox === 'RominSabastian' && 'techborder'}`} />
            </div>
            <div className="imgright">
              <img src={client5} alt="client" onClick={() => setReview('Aashvi')} id="clientRoundImg" className={`${reviewbox === 'Aashvi' && 'techborder'}`} />
            </div>
            <div className="imgleft">
              <img src={client7} alt="client" onClick={() => setReview('TuckerLaraya')} id="clientRoundImg" className={`${reviewbox === 'TuckerLaraya' && 'techborder'}`} />
            </div>
          </div>
        </div>
      </div>

      {/*--------------------------------------------------------------------*/}

      <div className="spacer"></div>

      <div className="centerParentDiv" id="methdologyParent" data-aos="fade-up">
        <div id="methodologyTop">
          <div>
            <h5 className="titlequestion">The Athh Tech</h5>
            <br></br>

            <p className="titleText">methodology</p>
          </div>
          <div>
            <Link to='/contact'>
              <button id='methodologyCallus' className="borderBtn">Contact Us</button>
            </Link>
          </div>
        </div>
        <div id="methodologymain">
          <div>
            <p className="methodologyTitle">Simplicity</p>
            <p className="methodologyText">
              We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity.
            </p>
          </div>
          <div>
            <p className="methodologyTitle">CRITICAL THINKING</p>
            <p className="methodologyText">
              Our team members were chosen in part for their demonstrated ability to think creatively, logically, and critically about a problem and its solution. We use these abilities in everything we do.
            </p>
          </div>
          <div>
            <p className="methodologyTitle">EFFECTIVENESS & EFFICIENCY</p>
            <p className="methodologyText">
              To make sure they are really in the most effective and efficient state, our team consistently evaluates all past methodologies, models, and procedures. enabling us to constantly be state-of-the-art.
            </p>
          </div>
          <div>
            <p className="methodologyTitle">Security</p>
            <p className="methodologyText">
              Security and the other mentioned principles begin during the design phase. When reviewing or creating a design, follows the KISS principle. We assist our clients in designing security and simplicity from the ground up.
            </p>
          </div>
        </div>
      </div>

      {/*--------------------------------------------------------------------*/}
      <div className="spacer"></div>

      <div className="centerParentDiv" id="why_athh_div" data-aos="fade-up">
        <h5 className="titlequestion">why</h5>
        <br></br>
        <p className="titleText">Athh Tech</p>

        <div id="why_athh_content">
          <img src={bigline} alt={bigline} width={"100%"} id="hrline" />
          <div className="whyathh_child">
            <h1 className="backText-normal">01</h1>
            <div className="blur_round">
              {/* <h1 className="innerTextBlur">01</h1> */}
              <img src={bulb} alt={bulb} height={"70px"} width={"70px"} />
            </div>
            <h2>Innovation</h2>
            <p>
              We are constantly seeking for fresh challenges to help us create original works of art, software, and services for our customers that are worthwhile investments.
            </p>
          </div>
          <div className="whyathh_child">
            <h1 className="backText-normal">02</h1>
            <div className="blur_round">
              {/* <h1 className="innerTextBlur">02</h1> */}
              <img src={eye} alt={eye} height={"70px"} width={"70px"} />
            </div>
            <h2>Quality-Focus</h2>
            <p>
              Through a wide range of special services, we guarantee quality focus and excellent client satisfaction.
            </p>
          </div>
          <div className="whyathh_child">
            <h1 className="backText-normal">03</h1>
            <div className="blur_round">
              {/* <h1 className="innerTextBlur">03</h1> */}
              <img src={value} alt={value} height={"70px"} width={"70px"} />
            </div>
            <h2>Value for money</h2>
            <p>
              From creative direction to production, we all shared the conviction that it was critical to provide work that was both effective and economical.
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------- */}
      <div className="spacer"></div>

      <div className="centerParentDiv" id="newsletterDiv" data-aos="fade-up">
        <h1 className="titleText">Newsletter</h1>
        <p>
          Follow Our Most Recent News and Events. Join our newsletter today.
        </p>
        <div id="emailSubscribeDiv">
          <form id="newsLetter" >
            <input
              type="text"
              id="inputEmail"
              placeholder="Enter Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              autoComplete="off"
            >

            </input>
            <Mailto email="info@athh.co" subject="Want to subscribe newsletter" body="">
              Subscribe
            </Mailto>
            {/* {mail ? <button id='subscribeBtn' onClick={(e) => e.preventDefault} type="submit">
              {" "}
              <span>
                {" "}
                <a href="mailto:info@athh.co">
                  Subscribe &nbsp; <HiArrowNarrowRight size={20} />{" "}
                </a>
              </span>
            </button> : <button  type="submit" disabled>
              {" "}
              <span id="disBtn">
                {" "}

                Subscribe &nbsp; <HiArrowNarrowRight size={20} />{" "}

              </span>
            </button>
            } */}


          </form>
        </div>
      </div>

      <div className="spacer"></div>

    </>
  );
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a id='subscribeBtn' href={`mailto:${email}?subject=${subject || ""}&body=${msg || ""}`}>
        {/* <button id='subscribeBtn' > */}
        {props.children}&nbsp; <HiArrowNarrowRight size={20} />{" "}
        {/* </button> */}
      </a>
    );
  }
}

export default Homepage;
