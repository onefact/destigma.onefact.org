import React from 'react';

const FullConsentForm = ()=> {

return (
  <>
    <div class="section2">
      <h1 class="heading-10"> Full Consent Form</h1>
      <div class="text-block-2">Below is the full consent form, with information about what kind of data is collected in the survey and how it will be used.</div>
    </div>
    <div class="section">
      <a href="/consentform" class="text-block-3">Return to the Consent Form Page to provide consent.</a>
      <p class="pad-horizontal">You do not need to be over the age of 18 to complete this form. The form will contain questions about:</p>
      <ul class="list pad-vertical pad-horizontal">
        <li>Personal Medical history (STI vaccination and testing history, blood transfusions, sharing needles)</li>
        <li>Sexual Activity History (sexual partner(s), types of sexual activity) </li>
        <li>Any symptoms present that may indicate an STI</li>
      </ul>
      <p class="pad-horizontal">The questionnaire will NOT ask for any personal identification information, such as name, date of birth, address, etc.
      </p>
      <div class="heading-6 pad-vertical"><strong>Liability</strong></div>
      <p class="pad-horizontal">The <i>deSTIgma</i> questionnaire is NOT a diagnostic device and should not be used as such. The purpose of the questionnaire and the backend algorithm is to make test <i>recommendations</i> for what STIs you should get tested for based on your input risk factors. The algorithm has been tested and shown to be robust and conservative.
      We are not responsible for missing STI test recommendations, and recommend that users folow up with a physician regardless of their results from the questionnaire. The algorithm functions optimally when the most honest data is available. It is the user's duty to report honestly and completely so as to receive the most accurate and comprehensive test recommendations.</p>

      <div class="heading-6 pad-vertical"><strong>Risks</strong></div>
      <p class="pad-horizontal">There is no physical risk in completing the questionnaire. There is a minor risk of loss of confidentiality, which includes having your information shared with someone who is not on the study team who was not supposed to see or know about your information.
      However, because your information is fully anonymized and pooled, the risk of tracing the data back to you is very slim.</p>

      <div class="heading-6 pad-vertical"><strong>Benefits</strong></div>
      <p class="pad-horizontal">While you are not compensated monetarily for completing the questionnaire, you will receive the benefit of knowledge of your risks for STIs and related conditions. This will help you in your decision making process to seek physician care and/or at-home testing</p>

      <div class="heading-6 pad-vertical"><strong>Use of Data</strong></div>
      <p class="pad-horizontal">Your inputs into the questionnaire will be stored in a secure online
system to which only the researchers on this study have access. The data will be stored in this format indefinitely in a
de-identified form with your permission. The data is not labeled with any personal identification information, and is pooled into an anonymous dataset.
The pooled data MAY be used by other Columbia researchers or researchers at other institutions, including commercial
companies, for research on STIs or other conditions, or for census information. Any testing or research using your data may lead to the
development and use of information or products with commercial value. You will not receive any compensation that
may result from these products.</p>
      <a href="/consentform" class="text-block-3">Return to the Consent Form Page to provide consent.</a>
    </div>
  </>

)
}

export default FullConsentForm;
