module.exports = {
  reportTypes: {
    appointments: {
      title: 'Appointments',
      children: [
        {
          value: 'futureappointments',
          label: 'Upcoming VA appointments',
        },
        {
          value: 'pastappointments',
          label: 'VA appointment history (limited to the past 2 years)',
        },
      ],
    },
    medications: {
      title: 'Medications (includes allergy information)',
      children: [
        {
          value: 'prescriptions',
          label: 'VA medication history',
        },
        {
          value: 'medications',
          label: 'Self-reported medications and supplements',
        },
      ],
    },
    labs: {
      title: 'Labs and Tests',
      children: [
        {
          value: 'labsandtests',
          label: 'VA laboratory results',
          hold: 3,
          holdExplanation: 'Some information may need to be reviewed by a member of your VA health care team before it’s added to your record. VA lab results will be available 3 calendar days after they’ve been verified.',
        },
        {
          value: 'vapathology',
          label: 'VA pathology reports',
          hold: 14,
          holdExplanation: 'Some information may need to be reviewed by a member of your VA health care team before it’s added to your record. VA pathology reports will be available 14 calendar days after they’ve been completed. Studies done at a non-VA facility may not be available or may not include an interpretation.',
        },
        {
          value: 'varadiology',
          label: 'VA radiology reports',
          hold: 3,
          holdExplanation: 'Some information may need to be reviewed by a member of your VA health care team before it’s added to your record. VA radiology reports will be available 3 calendar days after they’ve been completed. Studies done at a non-VA facility may not be available or may not include an interpretation.',
        },
        {
          value: 'vaekg',
          label: 'History of electrocardiograms (EKGs) performed at VA facilities',
        },
        {
          value: 'vachemlabs',
          label: 'Self-reported labs and tests',
        },
      ],
    },
    ehr: {
      title: 'VA electronic Health Record History and Wellness Reminders',
      children: [
        {
          value: 'vaproblemlist',
          label: 'VA Problem List',
          hold: 3,
          holdExplanation: 'Your VA problem list contains active health problems that your VA health care team is helping you manage. This information will be available 3 days after it’s been entered.',
        },
        {
          value: 'vaadmissionsanddischarges',
          label: 'VA Admissions and Discharges',
          hold: 3,
          holdExplanation: 'Some information may need to be reviewed by a member of your VA health care team before it’s added to your record. Discharge summaries will be available 3 days after they’re completed.',
        },
        {
          value: 'vaprogressnotes',
          label: 'VA Notes starting from Jan 01, 2013',
          hold: 3,
          holdExplanation: 'Some information may need to be reviewed by a member of your VA health care team before it’s added to your record. VA notes starting from Jan 1, 2013 will be available 3 days after they’ve been completed and signed by all required members of your VA health care team.',
        },
        {
          value: 'wellness',
          label: 'VA Wellness Reminders',
        },
      ],
    },
    allergies: {
      title: 'Allergies',
      children: [
        {
          value: 'vaallergies',
          label: 'VA allergies',
        },
        {
          value: 'seiallergies',
          label: 'Self-reported allergies',
        },
      ],
    },
    immunizations: {
      title: 'Immunizations',
      children: [
        {
          value: 'vaimmunizations',
          label: 'Immunizations received through VA',
        },
        {
          value: 'seiimmunizations',
          label: 'Self-reported immunizations',
        },
      ],
    },
    vitals: {
      title: 'Vitals and Readings',
      children: [
        {
          value: 'vitalsandreadings',
          label: 'VA vitals and readings',
        },
        {
          value: 'vahth',
          label: 'Self-reported vitals and readings',
        },
      ],
    },
    selfReported: {
      title: 'Self-Reported Health History',
      children: [
        {
          value: 'medicalevents',
          label: 'Medical events',
        },
        {
          value: 'familyhealthhistory',
          label: 'Family health history',
        },
        {
          value: 'militaryhealthhistory',
          label: 'Military health history',
        },
        {
          value: 'treatmentfacilities',
          label: 'Treatment facilities',
        },
        {
          value: 'healthcareproviders',
          label: 'Health care providers',
        },
      ],
    },
    food: {
      title: 'Food and Activity Journals',
      children: [
        {
          value: 'seiactivityjournal',
          label: 'Self-reported activity journal',
        },
        {
          value: 'seifoodjournal',
          label: 'Self-reported food journal',
        },
      ],
    },
    goals: {
      title: 'Goals',
      children: [
        {
          value: 'seimygoalscurrent',
          label: 'Self-reported current goals',
        },
        {
          value: 'seimygoalscompleted',
          label: 'Self-reported completed goals',
        },
      ],
    },
    demographics: {
      title: 'Demographics and Health Insurance',
      children: [
        {
          value: 'vademographics',
          label: 'VA demographics from VA treating facilities in the last 3 years',
        },
        {
          value: 'seidemographics',
          label: 'Self-reported demographics',
        },
        {
          value: 'healthinsurance',
          label: 'Self-reported health insurance',
        },
      ],
    },
    dod: {
      title: 'Department of Defense',
      children: [
        {
          value: 'dodmilitaryservice',
          label: 'Information from the Department of Defense',
        },
      ]
    },
  },

  errorCodes: {
    accountCreation: [
      'MHVAC1',
    ]
  }
};
