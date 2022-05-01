import React from 'react';

const Education = ({ results })=> {

return (
  <>
    <div class="background"></div>
    <div class="section2">
      <h1 class ="heading-10">Understanding STIs</h1>
      <div class="container">
        <div class="text-block-2">Below are some resources for STI care and sexual wellness.</div>
      </div>
    </div>
    <div class="education-list">
      <div class="pad-vertical">Test Recommendations:
        <p>{JSON.stringify(results)}</p></div>
      <div><i>Jump to:</i></div>
      <ul class="education-link-list">
        <li><a href="#bacterial-vaginosis" class="education-link">Bacterial Vaginosis</a></li>
        <li><a href="#candidiasis" class="education-link">Candidiasis (Yeast)</a></li>
        <li><a href="#chlamydia" class="education-link">Chlamydia</a></li>
        <li><a href="#gonorrhea" class="education-link">Gonorrhea</a></li>
        <li><a href="#hep" class="education-link">Hepatitis</a></li>
        <li><a href="#herpes" class="education-link">Herpes Virus</a></li>
        <li><a href="#hiv" class="education-link">HIV</a></li>
        <li><a href="#hpv" class="education-link">HPV</a></li>
        <li><a href="#molluscum" class="education-link">Poxvirus</a></li>
        <li><a href="#mono" class="education-link">Mononucleosis</a></li>
        <li><a href="#mycoplasma" class="education-link">Mycoplasma</a></li>
        <li><a href="#prostatitis" class="education-link">Prostatitis</a></li>
        <li><a href="#pubic-lice" class="education-link">Pubic Lice</a></li>
        <li><a href="#syphilis" class="education-link">Syphilis</a></li>
        <li><a href="#trich" class="education-link">Trichomoniasis</a></li>
        <li><a href="#ureaplasma" class="education-link">Ureaplasma</a></li>
        <li><a href="#uti" class="education-link">UTI</a></li>
      </ul>
    </div>

    <div class="section4">
      <div class="text-block-5" id="bacterial-vaginosis"><strong>Bacterial Vaginosis</strong></div>
      <div class="text-block-4" target ="blank"> Bacterial vaginosis is a type of bacterial inflammation caused by the overgrowth of bacteria found naturally in the vagina. <br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Thin, gray, white or green vaginal discharge</li>
          <li>Vaginal itching</li>
          <li>Foul-smelling "fishy" vaginal odor</li>
          <li>Buring during urination</li>
        </ul>
      <div class="text-block-4">Treatment can typically include an oral antibiotic or a topical cream. The infection cannot easily spread to male partners, though it can spread between female sexual partners.</div>
      <a href="https://www.mayoclinic.org/diseases-conditions/bacterial-vaginosis/symptoms-causes/syc-20352279" target ="blank"><i>Learn more at MayoClinic</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="candidiasis"><strong>Candidiasis</strong></div>
      <div class="text-block-4" target ="blank">Vaginal Candidiasis (Yeast) is caused by a yeast. While the fungus grows normally on the body, overgrowth can lead to this infection.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Painful urination</li>
          <li>Vaginal discharge</li>
          <li>Painful sexual intercourse</li>
          <li>Vaginal itchiness or soreness</li>
        </ul>
      <div class="text-block-4">Candidiasis can be diagnosed by microscope examination of small samples of vaginal discharge. Treatment includes a regimen of antifungal medication.</div>
      <a href="https://www.cdc.gov/fungal/diseases/candidiasis/genital/index.html" target ="blank"><i>Learn more from the CDC</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="chlamydia"><strong>Chlamydia</strong></div>
      <div class="text-block-4">Chlamydia is caused by a bacterium and spreads mainly via sexual intercourse. Individuals often have mild symptoms.<br/><i>Symptoms include:</i></div>
      <ul class="education-symptoms">
        <li>Painful urination</li>
        <li>Vaginal or penile discharge</li>
        <li>Painful sexual intercourse</li>
        <li>Bleeding between periods and after sex</li>
        <li>Testicular pain</li>
      </ul>
      <div class="text-block-4">Diagnosis is confirmed through a urine test or swab, and treatment is usually a regimen of antibiotics.</div>
      <a href="https://www.mayoclinic.org/diseases-conditions/chlamydia/diagnosis-treatment/drc-20355355" target ="blank"><i>Learn more at MayoClinic</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="gonorrhea"><strong>Gonorrhea</strong></div>
      <div class="text-block-4" target ="blank">Gonorrhea is a bacterial STI that can affect both men and women. Gonorrhea can present asymptomatic, but symptoms generally affect the genitals.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Painful urination</li>
          <li>Vaginal or penile discharge (eg. pus-like discharge)</li>
          <li>Painful sexual intercourse</li>
          <li>Bleeding between periods and after sex</li>
          <li>Abdominal or pelvic pain</li>
          <li>Testicular pain or swelling</li>
        </ul>
      <div class="text-block-4">Physicians should be consulted upon the presentation of symptoms. After a urine or swap test, antibiotics will likely be prescribed as treatment.</div>
      <a href="https://www.mayoclinic.org/diseases-conditions/gonorrhea/symptoms-causes/syc-20351774" target ="blank"><i>Learn more at MayoClinic</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="hep"><strong>Hepatitis (A, B, & C)</strong></div>
      <div class="text-block-4" target ="blank"> Hepatitis is an inflammation of the liver that may affect its function. Hepatitis A, B, and C are all sexually transmissible, though this occurs less frequently with Hepatitis C. Transmission of the virus occurs by coming into contact with diseased biological materials, and effective vaccines exist for Hepatitis A and B. Many people are asymptomatic, so it is important to get tested.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Fever</li>
          <li>Jaundice</li>
          <li>Loss of appetite</li>
          <li>Nausea/Vomiting</li>
          <li>Abdominal pain</li>
          <li>Dark urine</li>
          <li>Light-colored stools</li>
          <li>Joint pain</li>
          <li>Fatigue</li>
        </ul>
      <div class="text-block-4">Treatment generally includes supportive care and antiviral drugs for Hepatitis A and B, though several medications do exist for chronic Hepatitis C patients. </div>
      <a href="https://www.cdc.gov/hepatitis/abc/index.html" target ="blank"><i>Learn more from the CDC</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="herpes"><strong>Herpes Simplex Virus I & II, Oral & Genital</strong></div>
      <div class="text-block-4" target ="blank">Herpes is caused by the herpes simplex virus (HSV), and is rather common in the United States. Infections are transmitted through contact with HSV in herpes lesions, mucosal surfaces, genital secretions, or oral secretions.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Blisters in the mouth and/or genital region</li>
          <li>Tender bumps and sores</li>
        </ul>
      <div class="text-block-4">The specific type is dependent on the presentation of symptoms, and where in the body blisters and sores appear. While there is no cure, treatment can be given to decrease the pain related to outbreaks and also to shorten healing time. </div>
      <a href="https://www.webmd.com/genital-herpes/pain-management-herpes#1" target ="blank"><i>Learn more from WebMD</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="hiv"><strong>Human Immunodeficiency Virus (HIV/AIDS)</strong></div>
      <div class="text-block-4" target ="blank">Human immunodeficiency virus (HIV) causes Acquired Immunodeficiency Syndrome (AIDS) and affects the body’s ability to fight infections by harming white blood cells. Patients with HIV are usually asymptomatic until it progresses to AIDS.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Oral sores/blisters</li>
          <li>Fever</li>
          <li>Body rash</li>
          <li>Head or body aches</li>
          <li>Swollen lymph nodes/tonsils in the neck and armpits</li>
          <li>Abnormal/painful bowel movements</li>
          <li>Weight loss</li>
          <li>Night sweats</li>
          <li>Cough/sore throat</li>
          <li>Chills</li>
        </ul>
      <div class="text-block-4">HIV is most commonly transmitted through contact with infected blood, semen, and vaginal fluids. There is currently no cure for AIDS, but treatment with strict adherence to antiretroviral therapy (ART) can dramatically slow the disease’s progress.</div>
      <a href="https://www.mayoclinic.org/diseases-conditions/hiv-aids/symptoms-causes/syc-20373524?utm_source=Google&utm_medium=abstract&utm_content=HIV%2FAIDS&utm_campaign=Knowledge-panel" target ="blank"><i>Learn more at MayoClinic</i></a>
      <div class="pad-vertical"></div>


      <div class="text-block-5" id="hpv"><strong>Human Papillomavirus (HPV)</strong></div>
      <div class="text-block-4" target ="blank">HPV is the most common STI, and can potentially lead to cancer, though not all strains are necessarily cancerous. HPV can present without symptoms for many infected individuals, some individuals exhibit symptoms. <br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
         <li>Genital warts</li>
         <li>Common warts</li>
         <li>Plantar warts</li>
         <li>Flat warts</li>
        </ul>
      <div class="text-block-4">HPV spreads through sexual or skin-to-skin contact. There is currently a preventative vaccine, Gardasil 9, which will provide protection for men and women against cervical cancer and genital warts. Treatment, if deemed necessary, is usually a course of topical medications designed to eliminate warts, the main symptom of HPV.</div>
      <a href="https://www.mayoclinic.org/diseases-conditions/hpv-infection/symptoms-causes/syc-20351596" target ="blank"><i>Learn more at MayoClinic</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="molluscum"><strong>Molluscum Contagiosum ("Poxvirus")</strong></div>
      <div class="text-block-4" target ="blank">Molluscum contagiosum is caused by a poxvirus (in the same family as small pox) that is transmitted through physical contact.The virus affects the top layer of the skin only (and is thus not spread through coughing or sneezing), and causes bumps and lesions anywhere on the body, including face, neck, arms, legs, and genitalia.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
         <li>Genital raised bumps and lesions</li>
         <li>Bodily raised bumps and lesions</li>
         <li>Lesions often have dimple or pit in the center.</li>
        </ul>
      <div class="text-block-4">Treatment can include cryotherapy (freezing off lesions), oral drugs, and topical creams. Consult a physician to choose the best treatment option</div>
      <a href="https://www.cdc.gov/poxvirus/molluscum-contagiosum/index.html" target ="blank"><i>Learn more from the CDC</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="mono"><strong>Mononucleosis</strong></div>
      <div class="text-block-4" target ="blank">Mononucleosis is an illness caused by the Epstein-Barr virus, and spreads primarily through saliva.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Extreme fatigue</li>
          <li>Fever</li>
          <li>Sore throat</li>
          <li>Head and body aches</li>
          <li>Swollen lymph nodes</li>
          </ul>
      <div class="text-block-4">Based on symptom severity, healthcare providers can prescribe medications according to the organ systems affected. Treatment typically includes drinking lots of fluids, getting plenty of rest, and taking over-the-counter medications for pain and fever. </div>
      <a href="https://www.cdc.gov/epstein-barr/about-mono.html" target ="blank"><i>Learn more from the CDC</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="mycoplasma"><strong>Mycoplasma</strong></div>
      <div class="text-block-4" target ="blank">Mycoplasma is caused by the <i>M. Genitalium</i> bacteria, and gives rise to symptomatic and asymptomatic urethritis (infection of urethra) in men. In women, the pathogen has been associated with cervicitis and pregnancy complications. Symptoms associated with mycoplasma, then, are dependent on the secondary problems generated by the bacteria. <br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
         <li>Pain during urination</li>
         <li>Burning in the urethra</li>
         <li>Pelvic pain</li>
         <li>Infertility</li>
        </ul>
      <div class="text-block-4">Treatment can include antibiotics, which must be taken according to doctor prescription to minimize bacterial resistance build-up.</div>
      <a href="https://www.cdc.gov/std/treatment-guidelines/mycoplasmagenitalium.htm" target ="blank"><i>Learn more from the CDC</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="prostatitis"><strong>Prostatitis</strong></div>
      <div class="text-block-4" target ="blank">Prostatitis is marked by an inflammation of the prostate gland that is typically caused by a bacterial infection.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Pain or burning sensation when urinating (dysuria)</li>
          <li>Difficulty urinating, such as dribbling or hesitant urination</li>
          <li>Frequent urination, particularly at night (nocturia)</li>
          <li>Urgent need to urinate</li>
          <li>Cloudy urine</li>
          <li>Blood in the urine</li>
          <li>Pain in the abdomen, groin or lower back</li>
          <li>Pain in the area between the scrotum and rectum (perineum)</li>
          <li>Pain or discomfort of the penis or testicles</li>
          <li>Painful ejaculation</li>
          <li>Fever, chills, muscle aches and other flu-like symptoms (with acute bacterial prostatitis)</li>
        </ul>
      <div class="text-block-4">Depending on which symptoms present and which underlying cause is responsible, one of several treatment routes can be taken. Antibiotics can be prescribed in the case of a bacterial infection, and in other cases, pain management medications may be given.</div>
      <a href="https://www.mayoclinic.org/diseases-conditions/prostatitis/symptoms-causes/syc-20355766" target ="blank"><i>Learn more at MayoClinic</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="pubic-lice"><strong>Pubic Lice</strong></div>
      <div class="text-block-4" target ="blank">Pubic “crab” lice are typically found attached to hair in the pubic area, but may be found elsewhere. They are spread through sexual contact.<br/><i>Symptoms include:</i></div>
        <ul>
          <li>Genital itch</li>
          <li>Redness and swelling in genital region</li>
        </ul>
      <div class="text-block-4">Pubic lice can be treated with over-the-countter and prescription medications. Consult a physician for the best course of action.</div>
          <a href="https://www.cdc.gov/parasites/lice/pubic/index.html" target ="blank"><i>Learn more from the CDC</i></a>
      <div class="pad-vertical"></div>


      <div class="text-block-5" id="syphilis"><strong>Syphilis</strong></div>
      <div class="text-block-4" target ="blank">Syphilis develops in stages, and symptoms associated with the STI vary accordingly. Primary syphilis presents with a sore at the spot where the bacterium enters the body, and secondary syphilis follows. Here, rashing can occur throughout the body. Tertiary syphilis will affect fifteen to thirty percent of people with the disease who don’t get it treated. In this stage, syphilis can affect multiple organ systems. This STI is particularly dangerous because pregnant women who are infected can spread it to their vulnerable and unborn child. Blood tests can confirm the presence of the pathogen, and treatment in the form of antibiotics can prevent further complications. <br/><i>Symptoms include:</i></div>
      <ul class="education-symptoms">
        <li>Genital sores</li>
        <li>Rashes</li>
      </ul>
      <a href="https://www.mayoclinic.org/diseases-conditions/syphilis/symptoms-causes/syc-20351756" target ="blank"><i>Learn more at MayoClinic</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="trich"><strong>Trichomoniasis</strong></div>
      <div class="text-block-4" target ="blank">Trichomoniasis, also known as “Trich,” is a very common STI. A protozoan parasite causes this, and creates varying symptoms for affected patients.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Painful urination or ejaculation</li>
          <li>Vaginal or penile discharge (eg. fishy smell, yellow, green, increased volume)</li>
          <li>Itchiness and irritation</li>
          <li>Swelling</li>
        </ul>
      <div class="text-block-4">Without treatment, the infection can last for months or years, though antibiotics can alleviate symptoms.</div>
      <a href="https://www.cdc.gov/std/trichomonas/stdfact-trichomoniasis.htm" target ="blank"><i>Learn more from the CDC</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="ureaplasma"><strong>Ureaplasma</strong></div>
      <div class="text-block-4" target ="blank">Ureaplasma refers to a group of small bacteria that can typically be found in the human microbiome. The microbes are passed through sexual contact, and can enter the body through the vagina or urethra. Certain species have been linked to other conditions such as bacterial vaginosis and pregnancy complications. Most people with a ureaplasma infection experience no symptoms, though it may give rise to urethritis.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Pain during urination</li>
          <li>Burning sensation</li>
          <li>Discharge</li>
        </ul>
      <div class="text-block-4">These bacteria can also cause bacterial vaginosis, so care should be taken to evaluate symptoms. Treatment for this is a regimen of antibiotics.</div>
      <a href="https://www.healthline.com/health/ureaplasma" target ="blank"><i>Learn more at HealthLine</i></a>
      <div class="pad-vertical"></div>

      <div class="text-block-5" id="uti"><strong>Urinary Tract Infection (UTIs)</strong></div>
      <div class="text-block-4" target ="blank">Urinary Tract Infections (UTIs) denote a family of infections involving the urinary system--the kidneys, ureters, bladder, and urethra. Women are at an elevated risk of contracting UTIs relative to men, early treatment is imperative to prevent more complex kidney infections. UTIs may present without symptoms.<br/><i>Symptoms include:</i></div>
        <ul class="education-symptoms">
          <li>Strong, persistent urge to urinate</li>
          <li>Burning sensation when urinating</li>
          <li>Passing frequent, small amounts of urine</li>
          <li>Cloudy urine</li>
          <li>Red, bright pink or cola-colored urine— a sign of blood in the urine</li>
          <li>Strong-smelling urine</li>
          <li>Pelvic pain, in women — especially in the center of the pelvis and around the area of the pubic bone</li>
        </ul>
      <div class="text-block-4">Treatment typically revolves around a regimen of antibiotics and pain management medications.</div>
      <a href="https://www.mayoclinic.org/diseases-conditions/urinary-tract-infection/symptoms-causes/syc-20353447" target ="blank"><i>Learn more at MayoClinic</i></a>
      <div class="pad-vertical"></div>

    </div>
  </>
)
}

export default Education;
