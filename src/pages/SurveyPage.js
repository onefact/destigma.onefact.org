import React, { useCallback } from "react";

import "survey-react/modern.min.css";
// import 'survey-react/survey.min.css';
import { Survey, StylesManager, Model } from "survey-react";
import { useNavigate } from "react-router-dom";

StylesManager.applyTheme("modern");

const surveyJson = {
    title: "DeSTIgma Questionnaire",
    description: "Questionnaire for STI screening. Survey will collect medical history, sexual activity history, and symptoms (if present). Participation is voluntary and can be stopped at any time by exiting the survey.",
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
            }
        ]
        },
        {
        type: "radiogroup",
        name: "question4",
        title: "What is your age?",
        choices: [
            {
            value: "item1",
            text: "Under 25"
            },
            {
            value: "item2",
            text: "Over 25"
            }
        ]
        },
        {
        type: "checkbox",
        name: "question13",
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
        name: "question14",
        title: "Are you of Hispano/Latino origin?"
        },
        {
        type: "boolean",
        name: "question11",
        title: "Do you currently have any symptoms of STIs? (eg. pain, itchiness, swelling, blisters, bleeding, etc. in genital and/or oral regions?)",
        isRequired: true
        },
        {
        type: "boolean",
        name: "question6",
        title: "Have you ever experienced domestic violence or sexual assault? If Yes, please be aware of the confidential, 24/7 National Domestic Violence Hotline at 1-800-799-7233 (SAFE)."
        },
        {
        type: "text",
        name: "question15",
        title: "Enter your zip code if you would like to learn about sexual health resources near you."
        },
        {
        type: "checkbox",
        name: "question18",
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
        {
        type: "boolean",
        name: "question19",
        title: "Would you like more information about birth control methods?"
        }
        ],
        title: "Basic Information",
        description: "We will never collect personally identifying information like your name and date of birth."
        },
        {
        name: "page2",
        elements: [
        {
        type: "boolean",
        name: "question16",
        title: "Have you ever received a blood transfusion before?"
        },
        {
        type: "boolean",
        name: "question5",
        title: "Have you ever intentionally or accidentally shared needles before?"
        },
        {
        type: "checkbox",
        name: "question2",
        title: "Select any and all STIs that you have been tested for in the past year (12 months). If none, leave blank.",
        choices: [
            {
            value: "item1",
            text: "Bacterial STIs (gonorrhea, syphilis, chlamydia)"
            },
            {
            value: "item2",
            text: "Trichomoniasis (\"Trich\")"
            },
            {
            value: "item3",
            text: "HIV/AIDS"
            },
            {
            value: "item4",
            text: "HPV (Human Papillomavirus)"
            },
            {
            value: "item5",
            text: "Hepatitis (A,B, and C)"
            },
            {
            value: "item6",
            text: "Mononucleosis"
            }
        ],
        hasSelectAll: true
        },
        {
        type: "checkbox",
        name: "question3",
        title: "Select any and all STIs that you have been fully vaccinated for. If none, leave blank.",
        choices: [
            {
            value: "item1",
            text: "Hepatitis A (2 shots)"
            },
            {
            value: "item2",
            text: "Hepatitis B (3 shots)"
            },
            {
            value: "item3",
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
        name: "question7",
        title: "Have you had sex (anal, oral, vaginal) with someone who had symptoms of an STI or who has recently tested positive?"
        },
        {
        type: "checkbox",
        name: "question8",
        title: "Which of the following sexual activities have you engaged in in the past 3 months?",
        choices: [
            {
            value: "item1",
            text: "Sex with female partner"
            },
            {
            value: "item3",
            text: "Sex with male partner "
            },
            {
            value: "item2",
            text: "Sex with sex worker"
            }
        ]
        },
        {
        type: "boolean",
        name: "question9",
        title: "Have you had unprotected sex (no physical barrier, such as a male or female condom) in the past three months?"
        },
        {
        type: "boolean",
        name: "question10",
        title: "Have you had more than three sexual partners in the last 3 months?"
        },
        {
        type: "checkbox",
        name: "question12",
        title: "Have you engaged in any of the following sexual activities in the last two months?",
        choices: [
            {
            value: "item5",
            text: "Anal insertive"
            },
            {
            value: "item1",
            text: "Anal receptive"
            },
            {
            value: "item2",
            text: "Oral insertive"
            },
            {
            value: "item3",
            text: "Oral receptive"
            },
            {
            value: "item4",
            text: "Vaginal"
            }
        ]
        }
        ],
        title: "Sexual Activity History",
        description: "Please answer the following questions related to your sexual activity history to the best of your ability."
        },
        {
        name: "page4",
        elements: [
        {
        type: "checkbox",
        name: "question17",
        title: "Please select any and all symptoms you are currently feeling.",
        choices: [
            {
            value: "item14",
            text: "Genital Bleeding (not due to menstruation)"
            },
            {
            value: "item1",
            text: "Genital Pain"
            },
            {
            value: "item2",
            text: "Genital Itch/Rash "
            },
            {
            value: "item3",
            text: "Genital Warts/Bumps/Sores"
            },
            {
            value: "item4",
            text: "Problems with urination (eg. pain when urinating, excessive need to urinate)"
            },
            {
            value: "item5",
            text: "Abnormal urine (eg. color, smell)"
            },
            {
            value: "item6",
            text: "Abnormal discharge (eg. amount, color, consistency, smell)"
            },
            {
            value: "item7",
            text: "Oral Sores/Blisters/Lesions"
            },
            {
            value: "item8",
            text: "Rectal pain/Itchiness"
            },
            {
            value: "item9",
            text: "Rectal discharge (eg. clay-colored)"
            },
            {
            value: "item10",
            text: "Visual abnormalities (eg. pus in eyes, vision loss)"
            },
            {
            value: "item11",
            text: "Septic arthritis (joints are warm, red, swollen, and painful)"
            },
            {
            value: "item12",
            text: "Abnormal fatigue"
            },
            {
            value: "item13",
            text: "Nausea/Headache"
            }
        ]
        }
        ],
        visibleIf: "{question11} = true",
        title: "Symptoms",
        description: "From the list of symptoms below, please identify any you may be feeling to the best of your ability."
        }
    ]
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

  return <Survey model={survey} />;
}

export default SurveyPage;
