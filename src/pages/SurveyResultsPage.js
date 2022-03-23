import React from 'react';

const SurveyResultsPage = ({ results }) => {
    return (
        <div>
            congratulations, you are dead!!
            <p>{JSON.stringify(results)}</p>
        </div>
    );
}

export default SurveyResultsPage;