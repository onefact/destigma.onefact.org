import React from 'react';
import { Link } from 'react-router-dom';
import StiInfo from './StiInfo';

const HomePage = () => {
    return (
        <>
            <div className="section">
                <div id="top" class="section main wf-section">
                    <div class="w-container">
                        <div class="w-row">
                            <div class="w-col w-col-6">
                                <h1 class="main-heading">Get an STI Test Recommendation with deSTIgma</h1>
                                <p class="main-subtitle">The deSTIgma questionnaire will help you evaluate your risk for STIs and STDs, and connect you to resources near you.</p>
                                <Link to="/consentform" class="button">Let&#x27;s Go!</Link><a href="#" class="button hollow">Learn More1</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
              <h1 class="heading-home-1"> Sexually Transmitted Infections and Diseases (STIs): A Hidden Epidemic</h1>
              <div class= "row">
                <div class="column left">
                  <img src="https://thumbs.gfycat.com/BitesizedDeafeningFlounder-max-1mb.gif" id="casesperyear" class="graph1" alt="sans"/>
                </div>

                <div class="column right">
                  <div class="subheading-home-1"> Reported STIs reached an all-time high for the 6th year in a row in 2019.</div>
                  <p> Despite medical advances, STI cases increased for nearly the past decade, indicating a <strong> desperate need for improved education and awareness!</strong> </p>
                </div>
              </div>

              <div class = "row">
                <div class="column left">
                <div class="subheading-home-1"> Gonorrhea and syphilis cases drastically increased in 2020 during the COVID-19 pandemic.</div>
                <p>After COVID-19 stay-at-home orders, weekly STD cases reported dropped compared to 2019 levels, but resurged by the end of 2020.</p>
                </div>

                <div class="column right">
                  <img src="https://thumbs.gfycat.com/BitesizedDeafeningFlounder-max-1mb.gif" id="weeklycases" class="graph2"/>
                </div>
              </div>

              <image id="sti-cost"/>
            </div>

            <div className="section2">
                <StiInfo />
            </div>
        </>
    );
}

export default HomePage;
