import React from 'react';

const NavigationBar =()=> {
  return (
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation w-nav">
     <div class="w-container">
        <a href="/" class="brand-link w-nav-brand">
           <div class="logo-text">deSTIgma</div>
        </a>
        <nav role="navigation" class="nav-menu w-nav-menu">
        <a href="/" class="nav-link w-nav-link">The Need for STI Testing</a>
        <a href="/results" class="nav-link w-nav-link">Service Locator</a>
        <a href="/aboutus" class="nav-link w-nav-link">About Us</a>
        <a href="/consentform" aria-current="page" class="nav-link w-nav-link"><strong>Get Started</strong></a></nav>
        <div class="nav-link menu w-nav-button">
           <div class="w-icon-nav-menu"></div>
        </div>
     </div>
  </div>

)
}

export default NavigationBar;
