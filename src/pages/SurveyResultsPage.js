import React from 'react';

const SurveyResultsPage = ({ results }) => {
    return (
        <div>
            Re recommend you get tested for the following tests:
            <p>{JSON.stringify(results)}</p>
        </div>
    );
}

export default SurveyResultsPage;
