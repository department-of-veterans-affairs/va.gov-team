const educationTypeLabels = {
  college: 'College, university, or other educational program, including online courses',
  correspondence: 'Correspondence',
  apprenticeship: 'Apprenticeship or on-the-job training',
  flightTraining: 'Vocational flight training',
  testReimbursement: 'National test reimbursement (for example, SAT or CLEP)',
  licensingReimbursement: 'Licensing or certification test reimbursement (for example, MCSE, CCNA, EMT, or NCLEX)',
  tuitionTopUp: 'Tuition assistance top up (Post 9/11 GI Bill and MGIB-AD only)',
  cooperativeTraining: 'Cooperative training',
  farmCoop: 'Farm cooperative'
};

const uiSchema = {
  'ui:title': 'Type of education or training',
  'ui:options': {
    labels: educationTypeLabels
  }
};

export default uiSchema;
