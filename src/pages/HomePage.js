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
                <StiInfo />
            </div>
            <div className="section">
                <StiInfo />
            </div>
        </>
    );
}

export default HomePage;
