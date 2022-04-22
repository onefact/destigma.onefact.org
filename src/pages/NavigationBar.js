import React from 'react';
import { Link } from 'react-router-dom';
import logo from './destigma-logo.png';

const NavigationBar =()=> {
  return (
  <>
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation w-nav">
      <nav id="main-menu" class="nav-bar-wrapper">
        <a href="/consentform" class="nav-link w-nav-link"><strong>Get Started</strong></a>
        <a href="/aboutus" class="nav-link w-nav-link">About Us</a>
        <a href="/results" class="nav-link w-nav-link">Service Locator</a>
        <a href="/" class="nav-link w-nav-link">The Need for STI Testing</a>
        <img src={logo} href="/" class="destig-icon"></img>
        <a href="/" class="w-nav-brand"><div class="logo-text">deSTIgma</div></a>


      </nav>
      {/* <div className="nav-bar-wrapper">
        <div className="toggle">toggle</div>
        <div className="item">Home</div>
        <div className="destig-icon">icon</div>
      </div> */}

      <input type="checkbox" id="hamburger-input" class="hamburger-shower"/>
      <label id="hamburger-menu" for="hamburger-input">
        <nav id="sidebar-menu">
          <h3>Menu</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/results">Service Locator</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/consentform"><strong>Get Started</strong></a></li>
          </ul>
        </nav>
      </label>
      <div class="overlay"></div>


  </div>
  </>
)
}

export default NavigationBar;
