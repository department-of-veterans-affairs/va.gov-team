scenario.option_lists = {

  covid_prevention: {
    questions: [
      "What's VA doing to deal with COVID-19?",
      "What steps can I take to protect myself and others from COVID-19?",
      "If I need to leave my house, how do I stay safe?",
      "Should I wear a mask?",
      "When will a vaccine be out?",
      "If I get COVID-19, will I have immunity from getting it again?",
      "Ask a different type of question"
    ],
    answers: [
      "va_covid_response",
      "protect_myself",
      "leave_house",
      "wear_mask",
      "vaccine",
      "covid_immunity"
    ],
    do_next: [
      "Ask another COVID-19 prevention question",
      "Ask a different type of question",
      "Talk with someone about my specific needs",
      "Nothing. I have the information I need."
    ],
    contacts: "handoff_health_care",
  },

  health_care: {
    questions: [
      "What should I do if I have or need a VA health appointment?",
      "What should I do if I have a community care appointment, or need a referral?",
      "How can I refill my prescription?",
      "Can I use emergency care?",
      "What if I tried to call my clinic, and I can't get through?",
      "How can I ask for a new mental health appointment?",
      "Can I visit a patient at a VA facility?",
      "Ask a different type of question"
    ],
    answers: [
      "va_health_appointment",
      "community_care_appointment",
      "refill_prescription",
      "emergency_care",
      "cant_call_clinic",
      "mental_health_appointment",
      "visit_patient"
    ],
    do_next: [
      "Ask another health care question",
      "Ask a different type of question",
      "Talk with someone about my specific needs",
      "Nothing. I have the information I need."
    ],
    contacts: "handoff_health_care",
  },

  benefits: {
    questions: [
      "Will my benefit payment be delayed because of COVID-19?",
      "My school changed all classes to online. Will I still qualify for my GI Bill benefits?",
      "Is VA still doing claim exams (also called compensation and pension, or C&P, exams)?",
      "What if I had or need an in-person appointment for VA benefits or services?",
      "What if I need to turn in or sign paperwork for my claim or appeal?",
      "How can I work with my regional office during this time?",
      "Ask a different type of question"
    ],
    answers: [
      "benefit_payment_delay",
      "gi_bill_benefits",
      "claim_exams",
      "in_person_appointment",
      "turn_in_paperwork",
      "regional_office"
    ],
    do_next: [
      "Ask another benefits and claims question",
      "Ask a different type of question",
      "Talk with someone about my specific needs",
      "Nothing. I have the information I need."
    ],
    contacts: "handoff_benefits",
  },

  financial: {
    questions: [
      "Will my COVID-19 stimulus check lower my VA payments?",
      "What if I can’t pay my existing VA debt?",
      "What if I’m having trouble paying my VA-backed home loan during this time?",
      "Will I still have to pay my VA copays during the pandemic?",
      "What if I’ve been diagnosed with COVID-19 and need immediate action on my VA appeal?",
      "How do I get help if I'm homeless or at risk of becoming homeless?",
      "Ask a different type of question"
    ],
    answers: [
      "covid_stimulus_check",
      "existing_va_debt",
      "va_backed_home_loan",
      "va_copay",
      "covid_diagnosis_va_appeal",
      "homeless_help"
    ],
    do_next: [
      "Ask another financial question",
      "Ask a different type of question",
      "Talk with someone about my specific needs",
      "Nothing. I have the information I need."
    ],
    contacts: "handoff_financial",
  },

  anxiety: {
    questions: [
      "I don't have symptoms, but I feel anxious and overwhelmed. What can I do?",
      "How can I ask for a new mental health appointment?",
      "Ask a different type of question"
    ],
    answers: [
      "anxious_and_overwhelmed",
      "mental_health_appointment"
    ],
    do_next: [
      "Ask another anxiety question",
      "Ask a different type of question",
      "Talk with someone about my specific needs",
      "Nothing. I have the information I need."
    ],
    contacts: "handoff_anxiety",
  },

  testing_do_next: [
    "Ask a different type of question",
    "Talk with someone about my specific needs",
    "Nothing. I have the information I need."
  ],

  symptom_checker_do_next: [
    "Ask a question",
    "Talk with someone about my specific needs",
    "Nothing. I have the information I need."
  ]

};

scenario.root_options = {
  topics: [
    "COVID-19 prevention",
    "COVID-19 testing at VA",
    "My current COVID-19 symptoms (CDC self-checker tool)",
    "Health care, appointments, and prescriptions",
    "Debt, copays, and other financial concerns",
    "Benefits and claims",
    "Anxiety and related concerns"
  ],
  submenus: [
    "covid_prevention",
    null,
    null,
    "health_care",
    "financial",
    "benefits",
    "anxiety"
  ]
};