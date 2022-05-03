import React from 'react';
import { Link } from 'react-router-dom';
import StiInfo from './StiInfo';
import graph2 from './2014-2019-std-Increases.jpg';
import graph3 from './2020-STD-covid-increase.jpg';
import graph1 from './chlam-gon-syph-2015.png';
import columbia_logo from './Columbia_Engineering_Logo.png'
import onefact_logo from './one-fact-logo.png'
import lgc_logo from './letsgetchecked_logo.jpg'

const HomePage = () => {
    return (
        <>
            <div className="section">
                <div id="top" class="section main wf-section">
                    <div class="w-container">
                        <div class="w-row">
                          <h1 class="main-heading">Get an STI Test Recommendation with deSTIgma</h1>
                          <div class="row">
                            <div class="column left"><div class="text-block-4">The deSTIgma questionnaire will help you evaluate your risk for STIs and STDs, and connect you to resources near you.</div>
                              <p class="pad-vertical"> <Link to="/consentform" class="button">Let&#x27;s Go!</Link><a href="#info1" transition="ease" class="button hollow">Scroll down to learn more!</a></p>
                            </div>
                            <div class="column right"><img src={graph1} class="graph1"/></div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
              <h1 class="heading-home-1" id="info1"> Sexually Transmitted Infections and Diseases (STIs): A Hidden Epidemic </h1>
              <div class= "row">
                <div class="column left">
                  <img src={graph2} id="casesperyear" class="graph1 zoom" alt="sans"/></div>

                <div class="column right">
                  <div class="subheading-home-1"> Reported STIs reached an all-time high for the 6th year in a row in 2019.</div>
                  <div class="text-block-1"> Despite medical advances, STI cases increased for nearly the past decade, indicating a <strong> desperate need for improved education and awareness!</strong> </div>
                </div>
              </div>

              <div class = "row">
                <div class="column left">
                <div class="subheading-home-1"> Gonorrhea and syphilis cases drastically increased in 2020 during the COVID-19 pandemic.</div>
                <div class="text-block-1">After COVID-19 stay-at-home orders, weekly STD cases reported dropped compared to 2019 levels, but resurged by the end of 2020.</div>
                </div>

                <div class="column right">
                  <img src={graph3} id="weeklycases" class="graph2 zoom"/>
                </div>
              </div>

              <img id="sti-cost"/>
            </div>

            <div className="section2">
              <h1 class="heading-home-1">The Stigma Behind STIs</h1>
              <div class="text-block-2">Do you feel guilty about a broken arm? A cold?</div>
              <div class="text-block-2 pad-horizontal"><strong>One-third of young adults reported having foregone medical attention because they felt shame or embarrassment about visiting a physician for STI testing.*</strong></div>
              <div class="text-block-small">*According to survey of ~50 Columbia students.</div>
            </div>

            <div class="section">
              <div class="heading-home-1"><i>deSTIgma</i> streamlines the STI care-seeking process.</div>
              <div class="text-block-2">Feeling symptoms of an STI, or just want to learn about sexual health? You can find everything you need on the <i>deSTIgma</i> website.</div>
              <ol class="list1">
                <li class="list-item">Find out which STIs and related conditions you may be at risk for, based on your own symptoms.</li>
                <li class="list-item">Locate STI clinics and care centers near you.</li>
                <li class="list-item">Purchase physician-approved LetsGetChecked© at-home STI test kits for <strong>30% off</strong> using code <strong>destigma30</strong>.</li>
              </ol>
              <div class="text-block-2 pad-vertical">Ready to get started?</div>
              <p><Link to="/consentform" class="button">Let&#x27;s Go!</Link><Link to="/results" class="button hollow">Clinic Locator</Link><a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.letsgetchecked.com_home-2Dstd-2Dtest_&d=DwMFaQ&c=009klHSCxuh5AI1vNQzSO0KGjl4nbi2Q0M1QLJX9BeE&r=vMAq2H__s9fa9ysqXSHhi3G6g7wEhZchAgsmIvE6Y9E&m=Prv5mROB8CW4DIL8EOeFWEbutCo_tIFIdn1o1zhi_QUoc_-iLWY_cAF2liuipvXy&s=yAOiNnyLothzRNJkUhvchx3aH29FADbsnkL6ZHLiQUI&e=" class="button hollow" target="blank">Purchase Tests</a></p>
            </div>

            <div class="section3">
              <div class="text-block-small light-font">Produced in partnership with</div>
              <a href="https://www.bme.columbia.edu/" target="blank"><img src={columbia_logo} id="columbia-logo" alt="Columbia School of Engineering logo"/></a>
              <a href="https://www.onefact.org" target="blank"><img src={onefact_logo} id="onefact-logo" alt="OneFact.org logo"/></a>
              <a href="https://www.letsgetchecked.com" target="blank"><img src={lgc_logo} id="lgc-logo" alt= "LetsGetChecked.com logo"/></a>
            </div>


            <div class=""></div>
        </>
    );
}

export default HomePage;
