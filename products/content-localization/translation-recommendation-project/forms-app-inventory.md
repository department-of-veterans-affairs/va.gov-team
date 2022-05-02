### The application registry contains all the apps as well as forms: https://github.com/department-of-veterans-affairs/content-build/blob/main/src/applications/registry.json


### Below is a sub-set of just the on-line app forms: 

1. **"appName": "COVID-19 screener",**
- "title": "COVID-19 screening tool",

2. **"appName": "21-527EZ pension benefits form",**
- "entryName": "pensions",
- "title": "Apply For Pension Benefits",

3. **"appName": "10-10CG",**
- "entryName": "1010cg-application-caregiver-assistance",
- "title": "Caregiver Application for Benefits",

4. **"appName": "21P-530 Burials benefits form",**
- "entryName": "burials",
- "title": "Apply for Burial Benefits (VA Form 21P-530)",

5. **"appName": "1010ez Health Care Application form",**
- "rootUrl": "/health-care/apply/application",
- "title": "Apply for Health Care",
- "description": "Apply for VA health care benefits. Find out which documents you’ll need, and start your online application today.",

6. **"appName": "686C-674",** 
- "rootUrl": "/view-change-dependents/add-remove-form-21-686c",
- "name": "View or change your dependents"
   
7. **"appName": "21-526EZ disability compensation claim form",**
- "entryName": "526EZ-all-claims",
- "title": "File for disability benefits",
  
8. **"appName": "Order hearing aid batteries and accessories",**
- "entryName": "order-form-2346",
- "rootUrl": "/health-care/order-hearing-aid-batteries-and-accessories/order-form-2346",

9. **"appName": "Request for Higher-Level Review",**
- "entryName": "0996-higher-level-review",
- "rootUrl": "/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996",
- "title": "Request a Higher-Level Review",
     
10. **"appName": "Claims Status",**
- "rootUrl": "/track-claims",
- "description": "Track the status of your VA claims and appeals."
   
11.**"appName": "Login Page",**
- "entryName": "login-page",
- "rootUrl": "/sign-in",
 
12. **"appName": "40-40007 pre need burial planning form",**
- "rootUrl": "/burials-and-memorials/pre-need/form-10007-apply-for-eligibility",
- "title": "Apply online for pre-need determination of eligibility in a VA National Cemetery",
    
13. **"appName": "Post 9/11 GI Bill Status",**
- "title": "Check Your Post-9/11 GI Bill Benefits Status",
- "appName": "Discharge Wizard",
- "title": "How To Apply For A Discharge Upgrade",
      
14. **"appName": "Yellow Ribbon Schools",**
- "entryName": "yellow-ribbon",
- "description": "Search for schools that participate in the Yellow Ribbon Program.",
     

    "appName": "22-1990E Education benefits form",
    "entryName": "1990e-edu-benefits",
    "rootUrl": "/education/apply-for-education-benefits/application/1990E",
    "template": {
      "title": "Apply For Education Benefits",
      "heading": "Apply for education benefits",
      "display_title": "Apply to use transferred benefits",
      "layout": "page-react.html",
      "description": "Use your VA education benefits to pay for college or training programs. Find out which documents you’ll need to apply for benefits, and start your online application today.",
      "order": 4,
      "hideFromSidebar": true,
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Education and training",
          "path": "education/"
        },
        {
          "name": "How to apply",
          "path": "education/how-to-apply/"
        },
        {
          "name": "Apply for education benefits",
          "path": "education/apply-for-education-benefits/application/1990E"
        }
      ]
    }
  },
  {
    "appName": "22-10203 Education benefits form",
    "entryName": "10203-edu-benefits",
    "rootUrl": "/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203",
    "template": {
      "vagovprod": true,
      "title": "Apply for the Rogers STEM Scholarship",
      "heading": "Apply for the Rogers STEM Scholarship",
      "layout": "page-react.html",
      "description": "Use your VA education benefits to pay for college or training programs. Find out which documents you’ll need to apply for benefits, and start your online application today.",
      "order": 1,
      "hideFromSidebar": true,
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Education and training",
          "path": "education/"
        },
        {
          "name": "Other VA education benefits",
          "path": "education/other-va-education-benefits/"
        },
        {
          "name": "Edith Nourse Rogers STEM Scholarship",
          "path": "education/other-va-education-benefits/stem-scholarship/"
        },
        {
          "name": "Apply for the Rogers STEM Scholarship",
          "path": "education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203"
        }
      ]
    }
  },
  {
    "appName": "Opt Out of Sharing VA Education Benefits Information",
    "entryName": "0993-edu-benefits",
    "rootUrl": "/education/opt-out-information-sharing/opt-out-form-0993",
    "template": {
      "title": "Opt Out Of Sharing VA Education Benefits Information",
      "heading": "Opt out of sharing VA education benefits information",
      "layout": "page-react.html",
      "description": "Use your VA education benefits to pay for college or training programs. Find out which documents you’ll need to apply for benefits, and start your online application today.",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "path": "education/",
          "name": "Education and training"
        },
        {
          "path": "education/opt-out-information-sharing/",
          "name": "Opt out of information sharing"
        },
        {
          "path": "education/opt-out-information-sharing/opt-out-form-0993",
          "name": "Opt out of sharing your information with schools"
        }
      ]
    }
  },
  {
    "appName": "22-5495 Education benefits form",
    "entryName": "5495-edu-benefits",
    "rootUrl": "/education/apply-for-education-benefits/application/5495",
    "template": {
      "title": "Dependents Request For Change",
      "heading": "Dependents request for change",
      "layout": "page-react.html",
      "description": "Use your VA education benefits to pay for college or training programs. Find out which documents you’ll need to apply for benefits, and start your online application today.",
      "order": 2,
      "hideFromSidebar": true,
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Education",
          "path": "education/"
        },
        {
          "name": "Apply for education benefits",
          "path": "education/how-to-apply/"
        }
      ]
    }
  },
  {
    "appName": "GI Bill School Feedback Tool",
    "entryName": "feedback-tool",
    "rootUrl": "/education/submit-school-feedback",
    "template": {
      "title": "GI Bill® School Feedback Tool",
      "heading": "GI Bill® School Feedback Tool",
      "layout": "page-react.html",
      "description": "Find out how to give us feedback about your GI Bill school. ",
      "includeBreadcrumbs": true,
      "hideFromSidebar": true
    }
  },
  {
    "appName": "22-1990N Education benefits form",
    "entryName": "1990n-edu-benefits",
    "rootUrl": "/education/apply-for-education-benefits/application/1990N",
    "template": {
      "title": "Apply For Education Benefits",
      "heading": "Apply for education benefits",
      "layout": "page-react.html",
      "description": "Use your VA education benefits to pay for college or training programs. Find out which documents you’ll need to apply for benefits, and start your online application today.",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Education and training",
          "path": "education/"
        },
        {
          "name": "How to apply",
          "path": "education/how-to-apply/"
        },
        {
          "name": "Apply for education benefits",
          "path": "education/apply-for-education-benefits/application/1990N"
        }
      ]
    }
  },
  {
    "appName": "22-1995 Education benefits form",
    "entryName": "1995-edu-benefits",
    "rootUrl": "/education/apply-for-education-benefits/application/1995",
    "template": {
      "title": "Veteran Request For Change",
      "heading": "Veteran request for change",
      "layout": "page-react.html",
      "description": "Use your VA education benefits to pay for college or training programs. Find out which documents you’ll need to apply for benefits, and start your online application today.",
      "order": 1,
      "hideFromSidebar": true,
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Education and training",
          "path": "education/"
        },
        {
          "name": "Change your GI Bill school or program",
          "path": "education/change-gi-bill-benefits/"
        },
        {
          "name": "Change your benefits VA Form 22-1995",
          "path": "education/apply-for-education-benefits/application/1995/introduction"
        }
      ]
    }
  },
  {
    "appName": "22-5490 Education benefits form",
    "entryName": "5490-edu-benefits",
    "rootUrl": "/education/apply-for-education-benefits/application/5490",
    "template": {
      "title": "Apply For Education Benefits",
      "heading": "Apply for education benefits",
      "display_title": "Apply for dependent benefits",
      "layout": "page-react.html",
      "description": "Use your VA education benefits to pay for college or training programs. Find out which documents you’ll need to apply for benefits, and start your online application today.",
      "order": 3,
      "hideFromSidebar": true,
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Education and training",
          "path": "education/"
        },
        {
          "name": "How to apply",
          "path": "education/how-to-apply/"
        },
        {
          "name": "Apply for education benefits",
          "path": "education/apply-for-education-benefits/application/5490"
        }
      ]
    }
  },
  {
    "appName": "22-1990 Education benefits form",
    "entryName": "1990-edu-benefits",
    "rootUrl": "/education/apply-for-education-benefits/application/1990",
    "template": {
      "title": "Apply For Education Benefits",
      "heading": "Apply for education benefits",
      "layout": "page-react.html",
      "description": "Use your VA education benefits to pay for college or training programs. Find out which documents you’ll need to apply for benefits, and start your online application today.",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Education and training",
          "path": "education/"
        },
        {
          "name": "How to apply",
          "path": "education/how-to-apply/"
        },
        {
          "name": "Apply for education benefits",
          "path": "education/apply-for-education-benefits/application/1990"
        }
      ]
    }
  },
  {
    "appName": "22-0994 Education benefits form",
    "entryName": "0994-edu-benefits",
    "rootUrl": "/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994",
    "template": {
      "title": "Apply for education benefits",
      "layout": "page-react.html",
      "description": "VET TEC",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Education and training",
          "path": "education/"
        },
        {
          "name": "GI Bill",
          "path": "education/about-gi-bill-benefits/"
        },
        {
          "name": "How to use your benefits",
          "path": "education/about-gi-bill-benefits/how-to-use-benefits/"
        },
        {
          "name": "VET TEC program",
          "path": "education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/"
        },
        {
          "name": "Apply for education benefits",
          "path": "education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994"
        }
      ]
    }
  },
  {
    "appName": "Authentication callback",
    "entryName": "auth",
    "rootUrl": "/auth/login/callback",
    "template": {
      "title": "Auth",
      "layout": "page-react.html",
      "loadingMessage": "Please wait while we log you in."
    }
  },
  {
    "appName": "GI Bill Comparison Tool",
    "entryName": "gi",
    "rootUrl": "/gi-bill-comparison-tool",
    "template": {
      "title": "GI Bill Comparison Tool",
      "display_title": "GI Bill school comparison",
      "description": "Use our GI Bill Comparison Tool to help you decide which education program and school is best for you. Find out which benefits you’ll get at your chosen school.",
      "layout": "page-react.html",
      "collection": "education",
      "spoke": "More resources",
      "order": 1
    }
  },
  {
    "appName": "CT Redesign Sandbox",
    "entryName": "gi-sandbox",
    "rootUrl": "/gi-bill-comparison-tool-sandbox",
    "template": {
      "vagovprod": false,
      "title": "CT Redesign Sandbox",
      "display_title": "CT Redesign Sandbox",
      "description": "Sandbox for testing the CT redesign features so that the original Comparison Tool codebase is not filled with throw away code",
      "layout": "page-react.html",
      "collection": "education",
      "spoke": "More resources",
      "order": 1
    }
  },
  {
    "appName": "Search",
    "entryName": "search",
    "rootUrl": "/search",
    "template": {
      "title": "Search Results",
      "layout": "page-react.html"
    }
  },
  {
    "appName": "Veteran ID Card V1",
    "entryName": "veteran-id-card",
    "rootUrl": "/records/get-veteran-id-cards/apply",
    "template": {
      "title": "Veteran ID Card",
      "layout": "page-react.html",
      "hideFromSidebar": true,
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "path": "records/",
          "name": "Records"
        },
        {
          "path": "records/get-veteran-id-cards/",
          "name": "Types of Veteran ID cards"
        },
        {
          "path": "records/get-veteran-id-cards/apply/",
          "name": "Apply for an ID Card"
        }
      ]
    }
  },
  {
    "appName": "Debt Letters",
    "entryName": "your-debt",
    "rootUrl": "/manage-va-debt/your-debt",
    "template": {
      "vagovprod": true,
      "title": "Your VA Debt",
      "layout": "page-react.html"
    }
  },
  {
    "appName": "28-1900 Veteran Readiness",
    "entryName": "28-1900-chapter-31",
    "rootUrl": "/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900",
    "template": {
      "vagovprod": true,
      "layout": "page-react.html",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "path": "careers-employment",
          "name": "Careers and employment"
        },
        {
          "path": "careers-employment/vocational-rehabilitation",
          "name": "Veteran Readiness and Employment"
        },
        {
          "path": "/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900",
          "name": "Apply for Veteran Readiness and Employment Form 28‑1900"
        }
      ]
    }
  },
  {
    "appName": "Apply for Personalized Career Planning and Guidance with VA Form 28-8832",
    "entryName": "28-8832-planning-and-career-guidance",
    "rootUrl": "/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/",
    "template": {
      "title": "Personalized Career Planning and Guidance Chapter 36 Form 28-8832",
      "vagovprod": true,
      "layout": "page-react.html",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "path": "careers-employment",
          "name": "Careers and employment"
        },
        {
          "path": "careers-employment/education-and-career-counseling/",
          "name": "Career planning and guidance"
        },
        {
          "path": "careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/introduction",
          "name": "Apply for Personalized Career Planning and Guidance Form 28‑8832"
        }
      ]
    }
  },
  {
    "appName": "View Payments",
    "entryName": "view-payments",
    "rootUrl": "/va-payment-history/payments",
    "template": {
      "includeBreadcrumbs": true,
      "vagovprod": true,
      "layout": "page-react.html",
      "title": "View Payments",
      "breadcrumbs_override": [
        {
          "path": "va-payment-history/payments",
          "name": "View VA payment history"
        }
      ]
    }
  },
  {
    "appName": "Coronavirus Research - Volunteer",
    "entryName": "coronavirus-research",
    "rootUrl": "/coronavirus-research/volunteer",
    "template": {
      "vagovprod": true,
      "layout": "page-react.html",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "path": "coronavirus-research/",
          "name": "Participating in coronavirus research at VA"
        },
        {
          "path": "coronavirus-research/volunteer/",
          "name": "Sign up to volunteer"
        }
      ]
    }
  },
  {
    "appName": "Ask a Question",
    "entryName": "ask-a-question",
    "rootUrl": "/ask-a-question",
    "template": {
      "vagovprod": false,
      "layout": "page-react.html"
    }
  },
  {
    "appName": "Health care Questionnaire",
    "entryName": "questionnaire",
    "rootUrl": "/health-care/health-questionnaires/questionnaires/answer-questions",
    "template": {
      "vagovprod": true,
      "layout": "page-react.html",
      "includeBreadcrumbs": false,
      "breadcrumbs_override": []
    }
  },
  {
    "appName": "eFolders",
    "entryName": "my-documents",
    "rootUrl": "/my-documents",
    "template": {
      "title": "My Documents",
      "layout": "page-react.html",
      "vagovprod": false
    }
  },
  {
    "appName": "Financial Status Report",
    "entryName": "request-debt-help-form-5655",
    "rootUrl": "/manage-va-debt/request-debt-help-form-5655",
    "template": {
      "title:": "Request help with VA debt with VA Form 5655",
      "vagovprod": true,
      "vagovstaging": true,
      "vagovdev": true,
      "localhost": true,
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "path": "manage-va-debt",
          "name": " Manage VA debt"
        },
        {
          "path": "manage-va-debt/request-debt-help-form-5655",
          "name": "Request help with VA debt"
        }
      ]
    }
  },
  {
    "appName": "Medical Copays",
    "entryName": "medical-copays",
    "rootUrl": "/health-care/pay-copay-bill/your-current-balances",
    "template": {
      "title": "Medical Copays",
      "layout": "page-react.html",
      "vagovprod": false
    }
  },
  {
    "appName": "Resources and support",
    "entryName": "resources-and-support",
    "rootUrl": "/resources/search",
    "template": {
      "title:": "Search results",
      "layout": "page-react.html",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "path": "resources/",
          "name": "Resources and support"
        },
        {
          "path": "resources/search",
          "name": "Search results"
        }
      ]
    }
  },
  {
    "appName": "Questionnaire List",
    "entryName": "questionnaire-list",
    "rootUrl": "/health-care/health-questionnaires/questionnaires",
    "template": {
      "vagovprod": true,
      "layout": "page-react.html",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "path": "health-care/",
          "name": "Health care"
        },
        {
          "path": "health-care/health-questionnaires/questionnaires",
          "name": "Your health questionnaires"
        }
      ]
    }
  },
  {
    "appName": "My Messages",
    "entryName": "messages",
    "rootUrl": "/my-messages",
    "template": {
      "vagovprod": false,
      "layout": "page-react.html"
    }
  },
  {
    "appName": "Coronavirus Vaccination",
    "entryName": "coronavirus-vaccination",
    "rootUrl": "/health-care/covid-19-vaccine/stay-informed",
    "template": {
      "title": "Sign up to get a COVID-19 vaccine at VA",
      "layout": "page-react.html",
      "includeBreadcrumbs": true,
      "description": "We’re working to provide COVID-19 vaccines as quickly and safely as we can. We base our vaccine plans on CDC guidelines, federal law, and available supply. Sign up to tell us you’d like to get a COVID-19 vaccine at VA.",
      "breadcrumbs_override": [
        {
          "path": "health-care/",
          "name": "Health care"
        },
        {
          "path": "health-care/covid-19-vaccine/",
          "name": "COVID-19 vaccines"
        },
        {
          "path": "health-care/covid-19-vaccine/stay-informed",
          "name": "Sign up for vaccine updates"
        }
      ]
    }
  },
  {
    "appName": "View your representative",
    "entryName": "view-representative",
    "rootUrl": "/view-change-representative/view",
    "template": {
      "vagovprod": false,
      "layout": "page-react.html"
    }
  },
  {
    "appName": "Virtual Agent",
    "entryName": "virtual-agent",
    "rootUrl": "/virtual-agent-study",
    "template": {
      "vagovprod": false,
      "layout": "page-react.html"
    }
  },
  {
    "appName": "covid-vaccine-expansion",
    "entryName": "covid-vaccine",
    "rootUrl": "/health-care/covid-19-vaccine/sign-up/",
    "template": {
      "vagovprod": true,
      "layout": "page-react.html",
      "title": "Sign up to get a vaccine",
      "description": "We’re working to provide COVID-19 vaccines as quickly and safely as we can. We base our vaccine plans on CDC guidelines, federal law, and available supply. Sign up to tell us you’d like to get a COVID-19 vaccine at VA.",
      "breadcrumbs_override": [
        {
          "path": "health-care/",
          "name": "Health care"
        },
        {
          "path": "health-care/covid-19-vaccine/",
          "name": "COVID-19 vaccines"
        },
        {
          "path": "health-care/covid-19-vaccine/sign-up",
          "name": "Sign up to get a vaccine"
        }
      ]
    }
  },
  {
    "appName": "Veteran Rapid Retraining Assistance Program (VRRAP)",
    "entryName": "1990s-edu-benefits",
    "rootUrl": "/education/other-va-education-benefits/veteran-rapid-retraining-assistance/apply-for-vrrap-form-22-1990s",
    "template": {
      "title": "Apply for the Veteran Rapid Retraining Assistance Program (VRRAP)",
      "heading": "Apply for the Veteran Rapid Retraining Assistance Program (VRRAP)",
      "layout": "page-react.html",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Education and training",
          "path": "education/"
        },
        {
          "name": "Other VA education benefits",
          "path": "education/other-va-education-benefits/"
        },
        {
          "name": "Veteran Rapid Retraining Assistance Program (VRRAP)",
          "path": "education/other-va-education-benefits/veteran-rapid-retraining-assistance"
        },
        {
          "name": "Apply for VRRAP VA Form 22 1990s",
          "path": "education/other-va-education-benefits/veteran-rapid-retraining-assistance/apply-for-vrrap-form-22-1990s"
        }
      ]
    }
  },
  {
    "appName": "Request a Board Appeal",
    "entryName": "10182-board-appeal",
    "rootUrl": "/decision-reviews/board-appeal/request-board-appeal-form-10182",
    "template": {
      "title": "Request a Board Appeal",
      "heading": "Request a Board Appeal",
      "display_title": "Request a Board Appeal",
      "layout": "page-react.html",
      "description": "Apply online to request a Board Appeal.",
      "includeBreadcrumbs": true,
      "keywords": "notice of disagreement, board appeal, NOD",
      "vagovprod": true,
      "breadcrumbs_override": [
        {
          "name": "Decision reviews and appeals",
          "path": "decision-reviews"
        },
        {
          "name": "Board Appeals",
          "path": "decision-reviews/board-appeal"
        },
        {
          "name": "Request a Board Appeal",
          "path": "decision-reviews/board-appeal/request-board-appeal-form-10182"
        }
      ]
    }
  },
  {
    "appName": "Apply for Certificate of Eligibility",
    "entryName": "coe",
    "rootUrl": "/housing-assistance/home-loans/apply-for-coe-form-26-1880",
    "template": {
      "vagovprod": false,
      "layout": "page-react.html",
      "includeBreadcrumbs": true,
      "breadcrumbs_override": [
        {
          "name": "Housing assistance",
          "path": "housing-assistance"
        },
        {
          "name": "VA-backed home loans",
          "path": "housing-assistance/home-loans"
        },
        {
          "name": "Apply for Certificate of Eligibility Form 26-1880",
          "path": "housing-assistance/home-loans/apply-for-coe-form-26-1880"
        }
      ]
    }
  },
  {
    "appName": "check-in",
    "entryName": "check-in",
    "rootUrl": "/health-care/appointment-check-in",
    "template": {
      "vagovprod": true,
      "layout": "page-react.html"
    }
  },
  {
    "appName": "My Education Benefits",
    "entryName": "my-education-benefits",
    "rootUrl": "/my-education-benefits",
    "template": {
      "vagovprod": false,
      "layout": "page-react.html"
    }

