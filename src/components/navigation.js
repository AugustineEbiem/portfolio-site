import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <NavLink to='/case-studies' exact>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to='/approach' exact>
                  About me
                </NavLink>
              </li>
              {/* <li>
                <NavLink to='/services' exact>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/about-us' exact>
                  About us
                </NavLink>
              </li> */}
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <NavLink to='/contact' exact>
                    Get in touch with me
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to='/audit' exact>
                    Get a free audit
                  </NavLink>
                </li> */}
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Address</li>
                <li>Route du Jura 49</li>
                {/* <li>1700 Fribourg</li> */}
                <li>South Sheilds</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+44 7404838162</li>
              </ul>
              {/* <ul className='nav-info'>
                <li className='nav-info-label'>Legal</li>
                <li>Privacy & Cookies</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
