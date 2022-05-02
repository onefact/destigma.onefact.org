import React from 'react';

let SYMPTOMS = {
    1: 'genital bleeding ',
    2: 'genital pain',
    3: 'genital itch/rash',
    4: 'genital warts/bumps/sores',
    5: 'problems with urination',
    6: 'abnormal urine',
    7: 'abnormal discharge',
    8: 'oral sores/blisters/lesions',
    9: 'rectal pain/itchiness',
    10: 'abnormal rectal discharge',
    11: 'visual abnormalities',
    12: 'swollen/painful joints',
    13: 'abnormal fatigue',
    14: 'nausea/headache',
    15: 'fever',
}

let STI_symptoms = {'HIV/AIDS' : [4, 15, 6, 16],
       'HPV' : [4],
       'Syphilis' : [4, 5, 8, 15, 16, 13, 11],
       'Chlamydia' : [1, 5, 7, 2, 3, 10],
       'Trichomoniasis' : [2, 3, 7,11],
       'Gonorrhea' : [1, 5, 7, 2, 10, 16, 11],
       'Bacterial Vaginosis' : [3, 5, 7],
       'Poxvirus/Molluscum Contagiosum' : [4],
       'Mycoplasma' : [2, 3, 14, 5, 7],
       'Ureaplasma' : [5, 7],
       'Pubic lice' : [3, 14, 15],
       'Urinary tract infection' : [15, 5],
       'Prostatitis' : [2, 5, 3, 15],
       'Candidiasis (Yeast)' : [4, 2, 3, 5, 7],
       'Herpes Simplex Virus I, Oral' : [8, 13, 15, 16],
       'Herpes Simplex Virus II, Genital' : [4, 2, 3],
       'Mono' : [8, 13, 15, 16],
       'Hepatitis' : [5, 13, 15, 16, 12, 11]}


let RISK_FACTORS = {5:'sex with symptomatic',
                8:'sex worker sexual partner',
                9:'sex without physical barrier',
                11:'anal insertive',
                12:'anal receptive',
                13:'oral insertive',
                14:'oral receptive',
                15:'vaginal',
                16:'more than 3 partners in the last month',
                17:'recent bacterial STI test (gonorrhea, chlamydia, syphilis)',
                18:'recent trichomoniasis test',
                19:'recent HIV test',
                20:'recent hep test',
                21:'recent HPV test',
                22:'recent mononucleosis test',
                24:'hep A vax',
                25:'hep B vax',
                26:'HPV shots',
                27:'blood transfusion',
                28:'needle/blood exposure',
                29:'pregnant'}

let STI_risks = {'HIV/AIDS' : [5,8,11,12,15,24,25,27,28,29],
       'HPV' : [5,8,11,12,15,28,19,26,16],
       'Syphilis' : [5,8,9,11,12,13,14,15,29],
       'Chlamydia' : [5,8,9,11,12,13,14,15,29,16],
       'Trichomoniasis' : [5,8,9,15,29,16],
       'Gonorrhea' : [5,8,9,15,13,14,23,16],
       'Bacterial Vaginosis' : [5,9,15,16],
       'Poxvirus/Molluscum Contagiosum' : [19,28,13,14,5,8,9,11,12,15,16],
       'Mycoplasma' : [5,8,9,11,12,15,16],
       'Ureaplasma' : [5,8,9,11,12,15,29,16],
       'Pubic lice' : [5,11,12,13,14,15,23],
       'Urinary tract infection' : [],
       'Prostatitis' : [],
       'Candidiasis (Yeast)' : [],
       'Herpes Simplex Virus I, Oral' : [13,29],
       'Herpes Simplex Virus II, Genital' : [17,18,19,20,21,22,8],
       'Mono' : [8,9,11,12,13,14,15],
       'Hepatitis' : [8,11,12,13,14,15,20,27,28]}

//{"question1":"item3",
// "question2":"item2",
// "question3":["item2"],
// "question4":false,
// "question5":true,
// "question6":["item1None/","item2"],
// "question7":false,
// "question8":false,
// "question9":[19,21,20],
// "question10":[24],
// "question11":true,
// "question12":true,
// "question13":true,
// "question14":[11,12,13,14,15],
// "question15":true,
// "question16":[1,2,3,4,5,6,10,14,15,12]}

function question10(match_risk_results, results) {
  let vaccinations = results["question10"]
  var filtered = match_risk_results
  if (24 in vaccinations && 25 in vaccinations) {
    if ("Hepatitis" in filtered) {
      filtered = filtered.filter(val=> val !== 'Hepatitis')
    }
  }
  if (26 in vaccinations) {
    if ("HPV" in filtered) {
      filtered = filtered.filter(val=> val !== 'HPV')
    }
  }
  return filtered;
};

function match_test(risk_factors) {
  if (!risk_factors) {
    return []
  }
  let matched_risk_results = []
  for (const i of risk_factors) {
    if (i[0] != "s") {
      for (const [key, value] of Object.entries(STI_risks)) {
        if (i in value) {
          console.log("STI_risks:", key)
          if (!matched_risk_results.includes(key)) {
            console.log("RISKS duplicate!")
            matched_risk_results.push(key)
          }
        }
      }
    }
    else {
      let d_s = parseInt(i.substring(1))
      for (const [key, value] of Object.entries(STI_symptoms)) {
        if (d_s in value) {
          console.log("STI_symptoms:", key)
          if (!matched_risk_results.includes(key)) {
            console.log("STI_symptoms: duplicate!")
            matched_risk_results.push(key)
          }
        }
      }
    }
  }
  return matched_risk_results;
};

function raw_to_risk_factors(results) {
  if (!results) {
    return ["Please take the survey to receive STI test recommendations."]
  }
  var risk_factors = []
  if ("question7" in results) {
    risk_factors.push(27)
  }
  if ("question8" in results) {
    risk_factors.push(28)
  }
  if ("question9" in results) {
    let tests = results["question9"]
    if (!(17 in tests)) {risk_factors.push(17)}
    if (!(18 in tests)) {risk_factors.push(18)}
    if (!(19 in tests)) {risk_factors.push(19)}
    if (!(20 in tests)) {risk_factors.push(20)}
    if (!(21 in tests)) {risk_factors.push(21)}
    if (!(22 in tests)) {risk_factors.push(22)}
  }
  if ("question11" in results) {
    risk_factors.push(5)
  }
  if ("question12" in results) {
    risk_factors.push(9)
  }
  if ("question13" in results) {
    risk_factors.push(16)
  }
  if ("question14" in results) {
    let tests = results["question14"]
    if (11 in tests) {risk_factors.push(11)}
    if (12 in tests) {risk_factors.push(12)}
    if (13 in tests) {risk_factors.push(13)}
    if (14 in tests) {risk_factors.push(14)}
    if (15 in tests) {risk_factors.push(15)}
  }
  if ("question15" in results) {
    risk_factors.push(29)
  }
  if ("question16" in results) {
    let tests = results["question16"]
    if (1 in tests) {risk_factors.push("s1")}
    if (2 in tests) {risk_factors.push("s2")}
    if (3 in tests) {risk_factors.push("s3")}
    if (4 in tests) {risk_factors.push("s4")}
    if (5 in tests) {risk_factors.push("s5")}
    if (6 in tests) {risk_factors.push("s6")}
    if (7 in tests) {risk_factors.push("s7")}
    if (8 in tests) {risk_factors.push("s8")}
    if (9 in tests) {risk_factors.push("s9")}
    if (10 in tests) {risk_factors.push("s10")}
    if (11 in tests) {risk_factors.push("s11")}
    if (12 in tests) {risk_factors.push("s12")}
    if (13 in tests) {risk_factors.push("s13")}
    if (14 in tests) {risk_factors.push("s14")}
    if (15 in tests) {risk_factors.push("s15")}
  }
  let match_risk_results = match_test(risk_factors)
  let final_risk_results = question10(match_risk_results, results)
  return final_risk_results
}

function risk_to_test(risk_factors) {
  return risk_factors
}

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
        <p>{JSON.stringify((risk_to_test(raw_to_risk_factors(results))).join(','))}</p></div>
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
