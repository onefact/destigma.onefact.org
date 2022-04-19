import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar =()=> {
  return (
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation w-nav">
     <div class="navigation">
        <a href="/" class="brand-link w-nav-brand">
           <img src="destigma logo.png" class= "nav-logo" alt="Destigma logo"/>
           <div class="logo-text">deSTIgma</div>
        </a>
        <nav role="navigation" class="nav-menu w-nav-menu">

        <a href="/consentform" class="nav-link w-nav-link"><strong>Get Started</strong></a></nav>

        <a href="/" class="nav-link w-nav-link">The Need for STI Testing</a>
        <Link to="/results" class="nav-link w-nav-link">Service Locator</Link>

        <a href="/aboutus" class="nav-link w-nav-link">About Us</a>
        <a href="/results" class="nav-link w-nav-link">Service Locator</a>
        <a href="/" class="nav-link w-nav-link">The Need for STI Testing</a>
        <div class="nav-link menu w-nav-button">
           <div class="w-icon-nav-menu"></div>
        </div>
     </div>
  </div>

)
}

export default NavigationBar;
