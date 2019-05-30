module.exports = {
  // An array of objects containing the category name (label) and a
  // value for use with select, radio button inputs.
  messageCategories: [
    {
      label: 'Appointments',
      value: 'APPOINTMENTS'
    },
    {
      label: 'Education',
      value: 'EDUCATION'
    },
    {
      label: 'Medications',
      value: 'MEDICATIONS'
    },
    {
      label: 'Test results',
      value: 'TEST_RESULTS'
    },
    {
      label: 'Other (please add a subject)',
      value: 'OTHER'
    }
  ],

  composeMessage: {
    placeholders: {
      subject: 'Add an additional subject line',
      message: 'Type your message here (required)'
    },
    errors: {
      attachments: {
        tooLarge: {
          title: 'Attachment size limit',
          text: 'The file(s) you are trying to attach exceed the 3MB attachment size limit and the total size of attachments cannot exceed 6MB'
        },
        tooMany: {
          title: 'Attachments limit',
          text: 'You may not attach more than four files.'
        }
      },
      subjectLine: {
        category: 'Please select a category.',
        subject: 'Please add subject description.'
      },
      message: 'Please enter your message.',
      recipient: 'Please select a recipient from your health care team.'
    },
    maxChars: {
      subject: 512
    },
    // Using bytes
    attachments: {
      maxNum: 4,
      maxSingleFile: 3000000,
      maxTotalFiles: 6000000
    }
  },

  allowedMimeTypes: [
    'text/plain',
    'application/pdf',
    'application/msword',
    'application/excel',
    'application/vnd.ms-excel',
    'image/gif',
    'image/jpg',
    'application/rtf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'image/png'
  ],

  createNewFolderSettings: {
    maxLength: 50,
    errorMessages: {
      empty: 'Please enter a folder name.',
      exists: 'The folder name you have chosen already exists. Please try another name.',
      patternMismatch: 'Only the letters A through Z, numbers, and spaces are allowed in folder names.'
    }
  },

  errorCodes: {
    access: [
      'SM105'
    ],
    accountCreation: [
      'MHVAC1',
    ]
  }
};
