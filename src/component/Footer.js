import React, { useEffect, useRef } from 'react'
import athhlogo from '../assets/images/athhlogo.svg'
import { FaLinkedin, FaFacebookF, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink, useLocation } from 'react-router-dom';
import { FaUser } from "react-icons/fa";


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Footer() {

  const year = new Date().getFullYear()
  const { pathname } = useLocation();
  const prevPathname = usePrevious(pathname);

  useEffect(() => {
    if (prevPathname === pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, prevPathname]);



  return (

    <>
      <div id='FooterDiv' className='centerParentDiv'>
        <div id='footerDesc' className='footerchilds'>
          <div id='logoAndMore'>
            <div className="logoImgOfFotter"><img src={athhlogo} alt="Athh logo" /></div>
            <div className="logoTextOfFooter"><h1>Athh Tech</h1><p>Where Future Begins</p></div>
          </div>
          <p id='footertext'>
            ATHH TECHNOLOGIES LLP is a creative digital agency based in india. We are composed of creative designers and experienced developers.
          </p>

          <div id='socialmediaParent'>
            <div>
              <a href="mailto:info@athh.co">
                <FaEnvelope className='footerIcon' />
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com/athh_tech/?igshid=YmMyMTA2M2Y%3D" target="_blanck">
                <FaInstagram className='footerIcon' />
              </a>
            </div>

            <div>
              <a href="https://in.linkedin.com/company/athh-technologies-llp" target="_blanck">
                <FaLinkedin className='footerIcon' />
              </a>
            </div>

            <div>
              <a href="https://twitter.com/Athh_Tech" target="_blanck">
                <FaTwitter className='footerIcon' />
              </a>
            </div>

            <div>
              <a href="https://facebook.com/athhtech" target="_blanck">
                <FaFacebookF className='footerIcon' />
              </a>
            </div>

          </div>
        </div>
        <div className='footerchilds'>
          <h2 className='footer_head'>Helpful Links</h2>
          <ul>
            <NavLink to='/about'><li className=''>About us</li></NavLink>
            <NavLink to='/ourwork'><li className=''>Our work</li></NavLink>
            <NavLink to='/services'><li className=''>Services</li></NavLink>
            <NavLink to='/contact'><li className=''>Contact</li></NavLink>
          </ul>
        </div>
        <div className='footerchilds'>
          <h2 className='footer_head'>Services</h2>
          <ul id='serviceFotter'>
            <NavLink to='/services'><li>App development</li></NavLink>
            <NavLink to='/services'><li>Blockchain</li></NavLink>
            <NavLink to='/services'><li>Game development</li></NavLink>
            <NavLink to='/services'><li>UI / UX Design</li></NavLink>
          </ul>
        </div>
        <div className='footerchilds'>
          <h2 className='footer_head'>Contact us</h2>
          <ul id='conUi'>
            <li><a href="mailto:info@athh.co" id='fotterMail'><FaEnvelope size={25} />&nbsp;&nbsp;&nbsp;info@athh.co</a></li>

            <li>
              <div className="liblueDiv">
                <FaUser size={20} className='conIcon' />
                <p id='liblue'><NavLink to='/contact'>CONTACT &nbsp;
                  <HiArrowNarrowRight className='conIcon' size={20} />
                </NavLink>

                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <center> <p id='footerGray'>© {year} Athh Technologies LLP. All Rights Reserved.</p></center>
    </>
  )
}

export default Footer