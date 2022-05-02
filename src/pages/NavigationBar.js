import React from 'react';
import { Link } from 'react-router-dom';
import logo from './destigma-logo.png';

const NavigationBar =()=> {
  return (
  <>
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation w-nav">
      <nav id="main-menu" class="nav-bar-wrapper">
        <Link to="/consentform" class="nav-link w-nav-link"><strong>Get Started</strong></Link>
        <Link to="/aboutus" class="nav-link w-nav-link">About Us</Link>
        <a href ="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.letsgetchecked.com_home-2Dstd-2Dtest_&d=DwMFaQ&c=009klHSCxuh5AI1vNQzSO0KGjl4nbi2Q0M1QLJX9BeE&r=vMAq2H__s9fa9ysqXSHhi3G6g7wEhZchAgsmIvE6Y9E&m=Prv5mROB8CW4DIL8EOeFWEbutCo_tIFIdn1o1zhi_QUoc_-iLWY_cAF2liuipvXy&s=yAOiNnyLothzRNJkUhvchx3aH29FADbsnkL6ZHLiQUI&e=" class="nav-link w-nav-link" target="blank">Purchase Tests</a>
        <Link to="/education" class= "nav-link w-nav-link">Education</Link>
        <Link to="/results" class="nav-link w-nav-link">Service Locator</Link>
        <Link to="/" class="nav-link w-nav-link">The Need for STI Testing</Link>
        <img src={logo} href="/" class="destig-icon"></img>
        <a href="/" class="w-nav-brand"><div class="logo-text">deSTIgma</div></a>
      </nav>


      <input type="checkbox" id="hamburger-input" class="hamburger-shower"/>
      <label id="hamburger-menu" for="hamburger-input">
        <nav id="sidebar-menu">
          <h3>Menu</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><Link to="/results">Service Locator</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/consentform"><strong>Get Started</strong></Link></li>
          </ul>
        </nav>
      </label>
      <div class="overlay"></div>


  </div>
  </>
)
}

export default NavigationBar;
