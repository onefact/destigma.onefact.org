import React, { useCallback } from "react";

import "survey-react/modern.min.css";
// import 'survey-react/survey.min.css';
import { Survey, StylesManager, Model } from "survey-react";
import { useNavigate } from "react-router-dom";

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
                24:'no hep A vax',
                25:'no hep B vax',
                26:'no HPV shots',
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

StylesManager.applyTheme("modern");

const surveyJson = {
    title: "DeSTIgma Questionnaire",
    description: "Questionnaire for STI screening. Survey will collect medical history, sexual activity history, and symptoms (if present). Participation is voluntary (you do NOT need to answer all of the questions) and can be stopped at any time by exiting the survey.",
    logoPosition: "right",
    pages: [
        {
        name: "page1",
        elements: [
        {
        type: "radiogroup",
        name: "question1",
        title: "What is your gender identity?",
        choices: [
            {
            value: "item1",
            text: "Male"
            },
            {
            value: "item2",
            text: "Female"
            },
            {
            value: "item3",
            text: "Transgender Male"
            },
            {
            value: "item4",
            text: "Transgender Female"
            },
            {
            value: "item5",
            text: "Other/Non-binary"
            }

        ]
        },
        {
        type: "radiogroup",
        name: "question2",
        title: "What is your age?",
        choices: [
            {
            value: "item1",
            text: "Under 25"
            },
            {
            value: "item2",
            text: "25 or over"
            }
        ]
        },
        {
        type: "checkbox",
        name: "question3",
        title: "What is your race/ethnicity?",
        choices: [
            {
            value: "item3",
            text: "African/African American"
            },
            {
            value: "item4",
            text: "American Indian/Alaska Native"
            },
            {
            value: "item1",
            text: "Asian/Asian American (Middle East, South, East, Southeast)"
            },
            {
            value: "item5",
            text: "Caucasian/White"
            },
            {
            value: "item2",
            text: "Native Hawaiian/Pacific Islander"
            }
        ]
        },
        {
        type: "boolean",
        name: "question4",
        title: "Are you of Hispano/Latino origin?"
        },
        {
        type: "boolean",
        name: "question5",
        title: "Do you currently have any symptoms of STIs? (eg. pain, itchiness, swelling, blisters, bleeding, etc. in genital and/or oral regions?)",
        isRequired: true
        },

        {
        type: "checkbox",
        name: "question6",
        title: "Do you or your female partner use any forms of birth control? If none or not applicable, leave blank.",
        choices: [
            {
            value: "item7",
            text: "IUD (copper or hormonal)"
            },
            {
            value: "item1None/",
            text: "Pill (hormonal)"
            },
            {
            value: "item2",
            text: "Shot (hormonal)"
            },
            {
            value: "item3",
            text: "Patch (hormonal)"
            },
            {
            value: "item4",
            text: "Ring (hormonal)"
            },
            {
            value: "item5",
            text: "Implant (hormonal)"
            },
            {
            value: "item6",
            text: "Permanent"
            }
        ]
        },

        ],
        title: "Basic Information",
        description: "We will never collect personally identifying information like your name and date of birth. The after completing this basic information section, the rest of the survey will collect medical history, sexual activity history, and symptoms (if present). Participation is voluntary (you do NOT need to answer all of the questions) and can be stopped at any time by exiting the survey."
        },
        {
        name: "page2",
        elements: [
        {
        type: "boolean",
        name: "question7",
        title: "Have you ever received a blood transfusion before?"
        },
        {
        type: "boolean",
        name: "question8",
        title: "Have you ever intentionally or accidentally shared needles before?"
        },
        {
        type: "checkbox",
        name: "question9",
        title: "Select any and all STIs that you have been tested for in the past 6 months. If none, leave blank.",
        choices: [
            {
            value: 17,
            text: "Bacterial STIs (gonorrhea, syphilis, chlamydia)"
            },
            {
            value: 18,
            text: "Trichomoniasis (\"Trich\")"
            },
            {
            value: 19,
            text: "HIV/AIDS"
            },
            {
            value: 21,
            text: "HPV (Human Papillomavirus)"
            },
            {
            value: 20,
            text: "Hepatitis (A,B, and C)"
            },
            {
            value: 22,
            text: "Mononucleosis"
            }
        ],
        hasSelectAll: true
        },
        {
        type: "checkbox",
        name: "question10",
        title: "Select any and all STIs that you have been fully vaccinated for. If none, leave blank.",
        choices: [
            {
            value: 24,
            text: "Hepatitis A (2 shots)"
            },
            {
            value: 25,
            text: "Hepatitis B (3 shots)"
            },
            {
            value: 26,
            text: "HPV (3 shots)"
            }
        ],
        hasSelectAll: true
        }
        ],
        title: "Medical History",
        description: "Please answer the following questions related to your sexual health medical history to the best of your ability."
        },
        {
        name: "page3",
        elements: [
        {
        type: "boolean",
        name: "question11",
        title: "Have you had sex (anal, oral, vaginal) with someone who had symptoms of an STI or who has recently tested positive?"
        },

        {
        type: "boolean",
        name: "question12",
        title: "Have you had unprotected sex (no physical barrier, such as a male or female condom) in the past month?"
        },
        {
        type: "boolean",
        name: "question13",
        title: "Have you had more than three sexual partners in the last 2 months?"
        },
        {
        type: "checkbox",
        name: "question14",
        title: "Have you engaged in any of the following sexual activities in the last two months?",
        choices: [
            {
            value: 11,
            text: "Anal insertive"
            },
            {
            value: 12,
            text: "Anal receptive"
            },
            {
            value: 13,
            text: "Oral insertive"
            },
            {
            value: 14,
            text: "Oral receptive"
            },
            {
            value: 15,
            text: "Vaginal"
            },

        ]
      },
      {
      type: "boolean",
      name: "question15",
      title: "Are you pregnant or possibly pregnant?"
      },
        ],
        title: "Sexual Activity History",
        description: "Please answer the following questions related to your sexual activity history to the best of your ability."
        },
        {
        name: "page4",
        elements: [
        {
        type: "checkbox",
        name: "question16",
        title: "Please select any and all symptoms you are currently feeling.",
        choices: [
            {
            value: 1,
            text: "Genital Bleeding (not due to menstruation)"
            },
            {
            value: 2,
            text: "Genital Pain"
            },
            {
            value: 3,
            text: "Genital Itch/Rash "
            },
            {
            value: 4,
            text: "Genital Warts/Bumps/Sores"
            },
            {
            value: 5,
            text: "Problems with urination (eg. pain when urinating, excessive need to urinate)"
            },
            {
            value: 6,
            text: "Abnormal urine (eg. color, smell)"
            },
            {
            value: 7,
            text: "Abnormal discharge (eg. amount, color, consistency, smell)"
            },
            {
            value: 8,
            text: "Oral Sores/Blisters/Lesions"
            },
            {
            value: 9,
            text: "Rectal pain/Itchiness"
            },
            {
            value: 10,
            text: "Rectal discharge (eg. clay-colored)"
            },
            {
            value: 11,
            text: "Visual abnormalities (eg. pus in eyes, vision loss)"
            },
            {
            value: 12,
            text: "Septic arthritis (joints are warm, red, swollen, and painful)"
            },
            {
            value: 13,
            text: "Abnormal fatigue"
            },
            {
            value: 14,
            text: "Nausea/Headache"
          },
          {
            value: 15,
            text: "Fever"
          }
        ]
        }
        ],
        visibleIf: "{question11} = true",
        title: "Symptoms",
        description: "From the list of symptoms below, please identify any you may be feeling to the best of your ability."
        }
    ],
    showProgressBar: "both",
    progressBarType: "questions"
};

const SurveyPage = ({ resultCallback }) => {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;
  const navigate = useNavigate();

  const saveResults = useCallback((sender) => {
    resultCallback(sender.data);
    navigate('/results');
  }, []);
  survey.onComplete.add(saveResults);

  return <
  Survey model={survey} />;
}

export default SurveyPage;
