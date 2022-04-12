import React from 'react';

const ConsentForm = ()=> {

return (
//container for background, container for main text
   <>
      <div class="w-container"></div>
      <div class="w-container">
         <h1 class="heading-10">Consent is Key</h1>
      </div>
      <div class="container w-container">
         <p class="paragraph-3">We value your privacy, sdfoidgho. Terms and conditions can be a bore, so we&#x27;ve summarized our terms in to a few key points. See our full terms and conditions <a href="#" target="_blank">here</a>.<br/></p>
         <div class="text-block-2">Key Points</div>
         <ol role="list" class="list">
            <li class="list-item">This questionnaire will ask for sensitive medical information, including medical history, sexual activity history, and symptoms (if present).</li>
            <li class="list-item-2">All responses collected are de-identified (not attached to names, dates of birth, or any personal identification information).</li>
            <li class="list-item-3">Your data may be used for census information ohsdgoahdg. </li>
         </ol>
         <div class="text-block-3">See full terms and conditions <a href="#">here</a>.<br/><strong>Sign by typing your full name:</strong></div>
         <div class="w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="get"><input type="text" class="text-field w-input" maxlength="256" name="field" data-name="Field" placeholder="Example Text" id="field" required=""/><label class="w-checkbox checkbox-field"><input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" class="w-checkbox-input"/><span class="checkbox-label w-form-label" for="checkbox">I consent to the collection of data djsfjdajs</span></label><input type="submit" value="Submit" data-wait="Please wait..." class="submit-button w-button"/></form>
            <div class="w-form-done">
               <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
               <div>Oops! Something went wrong while submitting the form.</div>
            </div>


         </div>
      </div>
    </>
);

}

export default ConsentForm;
