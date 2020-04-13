scenario.option_lists = {

root: [
  "Health care, appointments, and prescriptions",
  "VA's COVID response",
  "Mental health concerns",
  "Benefits and claims"
],

healthcare: {
  questions: [
    "What should I do if I have an upcoming VA health appointment?",
    "What should I do if I have a community care appointment?",
    "Can I get a referral to see a community care provider if I can't be seen at VA?",
    "How do I reschedule or cancel my upcoming VA appointment?",
    "Can I use emergency care?",
    "What should I do if I need to refill or renew my prescription?",
    "What if I tried to call my clinic, and I can't get through?",
    "How do I know if my VA health facility is still open for regular appointments?",
    "Can I visit a patient at a VA facility?",
    "Can I be tested for coronavirus COVID-19 at VA?",
    "Start over"
  ],
  answers: [
    scenario.messages.upcoming_appointment,
    scenario.messages.community_care_appt,
    scenario.messages.referral,
    scenario.messages.reschedule_appt,
    scenario.messages.emergency_care,
    scenario.messages.need_refill,
    scenario.messages.cant_call_clinic,
    scenario.messages.open_for_appointments,
    scenario.messages.visit_patient,
    scenario.messages.get_tested,
  ]
},

va_covid_response: {
  questions: [
    "Can I be tested for coronavirus COVID-19 at VA?",
    "What is VA doing to deal with COVID-19?",
    "Start over"
  ],
  answers: [
    scenario.messages.get_tested,
    scenario.messages.va_response
  ]
},

mental_health: {
  questions: [
    "I don't have symptoms, but I feel anxious and overwhelmed. What can I do?",
    "How can I ask for a new mental health appointment?",
    "Start over"
  ],
  answers: [
    scenario.messages.feeling_anxious,
    scenario.messages.new_mental_health_appt
  ]
},

benefits: {
  questions: [
    "Will my benefit patient be delayed because of COVID-19?",
    "My school changed all classes to online, Will I still qualify for my GI bill benefits?",
    "Are VA regional offices closed?",
    "How can I stay updated on regional office closures or service interruptions?",
    "How can I contact my local regional office?",
    "Start over"
  ],
  answers: [
    scenario.messages.benefit_delay,
    scenario.messages.gi_benefits,
    scenario.messages.regional_office_closure,
    scenario.messages.stay_updated_closures,
    scenario.messages.contact_regional_office
  ]
}

};